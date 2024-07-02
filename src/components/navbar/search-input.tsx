"use client";

import queryString from "query-string";

import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { useDebounceCallback, useDebounceValue } from "usehooks-ts";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface SearchInputProps {
  className?: string
}

export const SearchInput = ({className}: SearchInputProps) => {
  const router = useRouter()

  const [value, setValue] = useState("")
  const [debouncedValue, setDebouncedValue] = useDebounceValue(value, 500)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  
  useEffect(() => {
    const url = queryString.stringifyUrl({
      url: "/dashboard",
      query: {
        search: debouncedValue,
      },
    },{ skipEmptyString: true, skipNull: true});
    // if (debouncedValue) {
    //   router.push(`?search=${debouncedValue}`)
    // } else {
    //   router.push("/dashboard")
    // }
    router.push(url)
  }, [debouncedValue, router])


  return (
    <div className={cn("w-full relative", className)}>
      <Search 
        className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4 "
      />
      <Input
        className="w-full max-w-[416px] pl-9 h-[40px] border-neutral-500 border-[1px]"
        placeholder="Search boards"
        value={value}
        onChange={handleChange}
      />
    </div>
  )
};

