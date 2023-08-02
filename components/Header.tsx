import Link from "next/link";
import Search from "./Search";

export default function Header() {
  return (
    <header className="bg-mobile md:bg-desktop bg-no-repeat bg-cover">
      <Link href={"/"}>
        <h1 className="text-center font-medium text-white text-[30px] tracking-[-0.23px] leading-[30px] pt-[26px] pb-[29px] md:text-[32px] md:tracking-[-0.29px] md:pt-[33px] md:pb-[31px]">
          IP Address Tracker
        </h1>
      </Link>
      <div className="pb-[157px] md:pb-[128px] px-[28px]">
        <Search />
      </div>
    </header>
  );
}
