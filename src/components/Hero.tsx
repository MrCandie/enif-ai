import ImageComponent from "./Image";
import Partners from "./Partners";

export default function Hero() {
  return (
    <div className="bg-[url('/hero.svg')] px-[3.5rem] bg-cover bg-center bg-no-repeat flex items-center flex-col py-[5rem] justify-center">
      <div className="w-full flex items-center justify-between">
        <div className="w-1/2 flex items-start flex-col gap-6">
          <h1 className="font-[900] text-[62px] text-[#191919]">
            Smarter <br />
            Customer <br />
            Support
          </h1>
          <p className="text-[#191919] font-bold text-[18px]">
            Enif AI vs. Chatbots
          </p>
          <button className="py-[18px] px-[28px] rounded-[50px] text-base text-white font-bold btn">
            Get Started
          </button>
        </div>
        <div className="w-1/2">
          <ImageComponent
            src="/hero-img.png"
            alt="hero"
            height="552px"
            fit="contain"
          />
        </div>
      </div>
      <Partners />
    </div>
  );
}
