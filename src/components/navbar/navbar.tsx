import { cn } from "@/lib/utils";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { SearchInput } from "./search-input";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const NavBar = () => {
  return (
    <div className="z-[1] flex items-center justify-between gap-x-4 p-3 w-full h-[65px] shadow-sm">
      <Link href="/dashboard">
        <div className="flex items-center justify-center gap-x-2 w-44">
          <Image
            src="./logo.svg"
            width={50}
            height={50}
            alt="logo"
          />
          <span className={cn("font-semibold text-2xl",
            font.className
          )}>
            Canban
          </span>
        </div>
      </Link>


      <div className="flex items-center gap-x-5 pr-1">
        <SearchInput/>
        <UserButton/>
      </div>
      
    </div>
  )
};

