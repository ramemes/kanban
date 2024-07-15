"use client";


import { Plus } from "lucide-react";
import { useApiMutation } from "../../../../hooks/useApiMutation";
import { api } from "../../../../../convex/_generated/api";
import { useRouter } from "next/navigation";
import { useAuth, useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import { imgFromPublic } from "../../../../../utils/utils";
import { useNewBoardModal } from "@/store/use-new-board-modal";

interface NewBoardButtonProps {
  orgId: string;
}



export const NewBoardButton = ({
  orgId
}: NewBoardButtonProps) => {
  const {onOpen} = useNewBoardModal()

  const { userId } = useAuth();

  
  return (
    <button
      onClick={() => onOpen(orgId)}
    >
      <div className="flex  flex-col bg-fuchsia-600 justify-center items-center aspect-[900/720] h-[calc(+ 64px)] rounded-md text-white  hover:bg-fuchsia-700  cursor-pointer ">
        <Plus/>
        <p className="z-[1] text-sm">
          New Board
        </p>
      </div>
    </button>
  )
};
