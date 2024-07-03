export default function SubFooter() {
  return (
    <div className="bg-[url('/sub-footer.png')] h-screen px-[3.5rem] bg-cover bg-center bg-no-repeat flex items-center flex-col gap-6 py-[5rem]">
      <h1
        style={{
          fontFamily: "Axiforma-Heavy",
        }}
        className="text-[62px] text-[#19191A] font-[900] text-center w-[60%]">
        Automate your customer service with Enif today
      </h1>
      <p
        style={{
          fontFamily: "Axiforma-Regular",
        }}
        className="text-base font-normal text-[#6F7073] text-center w-[40%]">
        Onboard, measure and coach your AI agent — like you would a human — and
        start resolving more inquiries, with less effort.
      </p>
      <div className="w-full flex justify-center items-center gap-4">
        <button
          style={{
            fontFamily: "Axiforma-Bold",
          }}
          className="py-[18px] px-[28px] rounded-[50px] text-base text-white font-bold btn">
          Get Started
        </button>
        <button
          style={{
            fontFamily: "Axiforma-Bold",
          }}
          className="py-[18px] px-[28px] rounded-[50px] text-base text-black font-bold bg-transparent learn">
          Learn more
        </button>
      </div>
    </div>
  );
}
