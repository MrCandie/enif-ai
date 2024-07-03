import ImageComponent from "./Image";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";

export default function Header() {
  return (
    <header className="w-full h-[64px] bg-white flex items-center justify-between bg-white px-[3.5rem] py-4 shadow-xl">
      <div className="w-[76px]">
        <ImageComponent src="/logo.svg" alt="" height="25px" fit="contain" />
      </div>
      <Menu />
      <button
        style={{
          fontFamily: "Axiforma-Bold",
        }}
        className="bg-[#DCCCFF] rounded-[38px] py-[14px] px-[21px] text-[12px] font-bold text-[#19191A]">
        Learn more
      </button>
    </header>
  );
}

function Menu() {
  return (
    <div className="flex items-center gap-6">
      <p
        style={{
          fontFamily: "Axiforma-Bold",
        }}
        className="text-[#B999FF] text-[14px] cursor-pointer font-bold flex items-center">
        Platform
        <RiArrowDropUpLine size={24} />
      </p>
      <p
        style={{
          fontFamily: "Axiforma-Bold",
        }}
        className="text-[#191919] text-[14px] cursor-pointer font-bold flex items-center">
        Solutions <RiArrowDropDownLine />
      </p>
      <p
        style={{
          fontFamily: "Axiforma-Bold",
        }}
        className="text-[#191919] text-[14px] cursor-pointer font-bold">
        Channels
      </p>
      <p
        style={{
          fontFamily: "Axiforma-Bold",
        }}
        className="text-[#191919] text-[14px] cursor-pointer font-bold">
        Pricing
      </p>
    </div>
  );
}
