"use client"

import UploadFormInput from "@/components/upload/upload-form-input"
import { useUploadThing } from "@/utils/uploadthing"
import { z } from "zod"
import { toast } from "sonner"
import { generatePdfSummary } from "@/actions/upload-actions"
import { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import LoadingSkeleton from "@/components/upload/loading-skeleton"

const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid Data" })
    .refine(
      (file) => file.size <= 20 * 1024 * 1024,
      "File size must be less than 20MB"
    )
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "File must be a PDF"
    ),
})

export default function UploadForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const { startUpload } = useUploadThing("pdfUploader", {
    onUploadBegin: (fileName) => {
      toast.loading(`Uploading ${fileName}...`, { id: "upload-toast" })
    },
    onClientUploadComplete: () => {
      toast.dismiss("upload-toast")
      toast.success("Uploaded successfully 🎉")
    },
    onUploadError: (err) => {
      toast.dismiss("upload-toast")
      toast.error(err.message ?? "Upload failed")
    },
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isLoading) return

    try {
      setIsLoading(true)

      const formData = new FormData(e.currentTarget)
      const file = formData.get("file") as File

      const validatedFields = schema.safeParse({ file })

      if (!validatedFields.success) {
        toast.error(
          validatedFields.error.flatten().fieldErrors.file?.[0] ?? "Invalid file"
        )
        setIsLoading(false)
        return
      }

      toast.info("Processing PDF…")

      const resp = await startUpload([file])

      if (!resp || resp.length === 0) {
        toast.error("Something went wrong. Try another file.")
        setIsLoading(false)
        return
      }

      const uploadedFile = resp[0]

      const formatted = [
        {
          serverData: {
            userId: uploadedFile.serverData.userId,
            file: {
              url: uploadedFile.url,
              name: uploadedFile.name,
            },
          },
        },
      ]

      const result = await generatePdfSummary(formatted)

      if (!result?.success || !result.data) {
        toast.error(result?.message || "Failed to generate summary")
        setIsLoading(false)
        return
      }

      toast.success("Your PDF has been successfully summarized and saved! ✨")

      formRef.current?.reset()

      if (result.data.id) {
        router.push(`/summaries/${result.data.id}`)
      }

    } catch (error) {
      console.error("Error Occurred", error)
      toast.error("Something went wrong")
      formRef.current?.reset()
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput
        isLoading={isLoading}
        ref={formRef}
        onSubmit={handleSubmit}
      />

      {isLoading && (
        <>
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200 dark:border-gray-800" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-3 text-muted-foreground text-sm">
                Processing
              </span>
            </div>
          </div>

          <LoadingSkeleton />
        </>
      )}
    </div>
  )
}