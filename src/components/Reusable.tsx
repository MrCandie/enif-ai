import ImageComponent from "./Image";

export default function Reusable({
  title,
  description,
  src,
  bg,
}: {
  title: string;
  description: string;
  src: string;
  bg?: string;
}) {
  return (
    <div
      style={{ backgroundColor: bg ? bg : "#fff" }}
      className=" px-[7rem]  flex items-start py-[5rem] justify-between">
      <div className="w-1/2 flex items-start flex-col gap-6">
        <h1
          style={{
            color: bg ? "#fff" : "#6F7073",
            fontFamily: "Axiforma-Heavy",
          }}
          className="font-[900] text-[38px] text-[#191919] w-[60%]">
          {title}
        </h1>
        <p
          style={{
            color: bg ? "#EBEDF2" : "#6F7073",
            fontFamily: "Axiforma-Regular",
          }}
          className="text-[#6F7073] w-[60%] font-normal text-[16px]">
          {description}
        </p>
        <button
          style={{
            fontFamily: "Axiforma-Bold",
          }}
          className="py-[18px] px-[28px] rounded-[50px] text-base text-black font-bold bg-[#DCCCFF]">
          Learn more
        </button>
      </div>
      <div className="w-1/2">
        <ImageComponent src={src} alt="hero" height="552px" fit="contain" />
      </div>
    </div>
  );
}
