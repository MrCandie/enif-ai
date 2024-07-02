import ImageComponent from "./Image";

export default function Header() {
  return (
    <header className="w-full bg-white flex items-center justify-between bg-white px-[3.5rem] py-4 shadow-md">
      <div className="w-[76px]">
        <ImageComponent src="/logo.svg" alt="" height="25px" fit="contain" />
      </div>
      <Menu />
      <button className="bg-[#DCCCFF] rounded-[38px] py-[14px] px-[21px] text-[12px] font-bold text-[#19191A]">
        Learn more
      </button>
    </header>
  );
}

function Menu() {
  return (
    <div className="flex items-center gap-6">
      <p className="text-[#B999FF] text-[14px] font-bold">Platform</p>
      <p className="text-[#191919] text-[14px] font-bold">Solutions</p>
      <p className="text-[#191919] text-[14px] font-bold">Channels</p>
      <p className="text-[#191919] text-[14px] font-bold">Pricing</p>
    </div>
  );
}
