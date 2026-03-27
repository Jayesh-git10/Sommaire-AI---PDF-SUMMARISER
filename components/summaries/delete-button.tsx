'use client'

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { DialogFooter } from "../ui/dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState, useTransition } from "react";
import { deleteSummaryAction } from "@/actions/summary-actions";
import { toast } from "sonner";

interface DeleteButtonProps{
  summaryId: string
}

export default function DeleteButton({summaryId}:DeleteButtonProps) {

  const [open,setOpen] = useState(false)
  const [isPending,startTransition] = useTransition();

  const handleDelete = async () => {
    startTransition(async()=>{

    const result = await deleteSummaryAction({summaryId})

    if(!result.success){
      toast.error("Failed to delete summary")
      return
    }

    toast.success("Summary deleted")
    setOpen(false)
    })
  }
 

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="text-gray-400 bg-gray-50 border border-gray-200 hover:text-rose-600 hover:bg-rose-50"
          variant="ghost"
          size="icon"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>Delete Summary</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this summary? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button
            className="px-2 bg-gray-50 border border-gray-200 hover:text-gray-600 hover:bg-gray-100"
            variant="ghost"
            onClick={()=>setOpen(false)}
          >
            Cancel
          </Button>

          <Button
            className="bg-gray-900 hover:bg-gray-600"
            variant="destructive"
            onClick={handleDelete}
          >
           {isPending ? 'Deleting...' : 'Delete'} 
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}