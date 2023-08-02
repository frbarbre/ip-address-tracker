"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push(searchValue);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[555px] mx-auto h-[58px] drop-shadow-global"
    >
      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder="Search for any IP address"
        className="w-full bg-white rounded-l-[15px] outline-none pl-[24px]"
      />
      <button
        type="submit"
        className="bg-black hover:bg-[#3F3F3F] transition-all w-[58px] h-full flex items-center justify-center rounded-r-[15px]"
      >
        <Image src={"/icon-arrow.svg"} width={12} height={12} alt="arrow" />
      </button>
    </form>
  );
}
