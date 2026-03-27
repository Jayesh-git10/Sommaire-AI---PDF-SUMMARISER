"use server"

import { fetchAndExtractPdfText } from "@/lib/langchain"
import { generateSummaryFromOpenAI } from "@/lib/openai"
import { generateSummaryFromGemini } from "@/lib/geminiai"
import { getDbConnection } from "@/lib/db"
import { formatFileNameAsTitle } from "@/utils/format-utils"
import { revalidatePath } from "next/cache"

interface PdfSummaryType {
    userId?: string,
    fileUrl: string,
    summary: string,
    title: string,
    fileName: string
}

export async function generatePdfSummary(uploadResponse: {
    serverData: {
        userId: string,
        file: {
            url: string,
            name: string
        }
    }
}[]) {
    if (!uploadResponse) {
        return {
            success: false,
            message: 'File upload failed',
            data: null
        }
    }

    const {
        serverData: {
            userId,
            file: { url: pdfUrl, name: fileName },
        },
    } = uploadResponse[0]

    if (!pdfUrl) {
        return {
            success: false,
            message: 'File upload failed',
            data: null
        }
    }

    try {
        const pdfText = await fetchAndExtractPdfText(pdfUrl)
        let summary: string | null = null

        try {
            summary = await generateSummaryFromOpenAI(pdfText)
        } catch (error) {
            try {
                summary = await generateSummaryFromGemini(pdfText)
            } catch (e) { }
        }

        if (!summary) {
            summary = "⚠️ Summary could not be generated due to API limits. Please try again later."
        }

        const formattedFileName = formatFileNameAsTitle(fileName)

        const saved = await savePdfSummary({
            userId,
            fileUrl: pdfUrl,
            summary,
            title: formattedFileName,
            fileName
        })

        if (saved?.id) {
            revalidatePath(`/summaries/${saved.id}`)
        }

        return {
            success: true,
            message: 'Summary generated and saved successfully',
            data: {
                id: saved?.id,
                summary,
                title: formattedFileName
            }
        }

    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : 'Something went wrong',
            data: null
        }
    }
}

async function savePdfSummary({ userId, fileUrl, summary, title, fileName }: PdfSummaryType) {
    try {
        const sql = await getDbConnection()

        const result = await sql`
        INSERT INTO pdf_summaries (
            user_id,
            original_file_url,
            summary_text,
            title,
            file_name
        ) VALUES (
            ${userId},
            ${fileUrl},
            ${summary},
            ${title},
            ${fileName}
        )
        RETURNING id;
        `

        return result[0]

    } catch (error) {
        return null
    }
}