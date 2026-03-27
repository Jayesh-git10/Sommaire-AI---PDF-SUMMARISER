import { Button } from "@/components/ui/button";
import { ChevronLeft, Clock } from "lucide-react";
import Link from "next/link"
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { Calendar } from "lucide-react";
export function SummaryHeader({ title, createdAt, readingTime }: { title: string, createdAt: string, readingTime: string }) {
    return (
        <div className="flex  gap-4 mb-4 justify-between">
            <div className="flex flex-col gap-4 mb-6">

                {/* Top Row */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">

                    <Badge className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-rose-100 shadow-sm">
                        <Sparkles className="h-4 w-4 text-rose-500" />
                        <span className="text-rose-500 font-medium">AI Summary</span>
                    </Badge>

                    <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-rose-400" />
                        {new Date(createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </div>

                    <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-rose-400" />
                        {readingTime} min read
                    </div>

                </div>

                {/* Center Title */}
                <h1 className="text-center text-2xl lg:text-4xl font-bold lg:tracking-tight">
                    <span className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
                        {title}
                    </span>
                </h1>

            </div>
            <div className="self-start">
                <Link href='/dashboard'>
                    <Button variant={'link'} size="sm" className="group flex items-center gap-1 sm:gap-2 hover:bg-white/80 backdrop-blur-xs rounded-full transition-allduration-200 shadow-xs hover:shadow-md border border-rose-100/30 bg-rose-100 px-2 sm:px-3">
                        <ChevronLeft className="h-3 w-3 sm:w-4 text-rose-500 transition-transform group-hover:translate-x-0.5" />
                        Back <span className="text-xs sm:text-sm text-muted-foreground font-medium">to Dashboard</span>
                    </Button>
                </Link>
            </div>
        </div>
    )
}