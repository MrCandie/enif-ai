import ImageComponent from "./Image";
import { FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const platform = [
  {
    title: "Platform",
    list: [
      "Automate operations",
      "Business Insight",
      "Knowledge Base",
      "Transform Your Sales",
      "Drive Efficiency",
      "Apps Integrations",
    ],
  },
  {
    title: "Solution",
    list: ["For Fintech", "For SMEs", "For E-commerce"],
  },
];

const industry = [
  {
    title: "Industries",
    list: [
      "Financial Services",
      "E-commerce",
      "Education",
      "Healthcare",
      "Real Estate",
      "Hospitality",
      "Tourism",
    ],
  },
];

const channel = [
  {
    title: "Channels",
    list: [
      "Emails",
      "Live-Chat",
      "Instagram",
      "WhatsApp",
      "Facebook",
      "Mobile Apps",
    ],
  },
  {
    title: "Legal",
    list: ["Privacy Policy", "Terms & Condition", "Data privacy"],
  },
];

const pricing = [
  {
    title: "Pricing",
    list: ["Starter (Monthly)", "Pro (Monthly)", "Premium (Monthly)"],
  },
];

export default function Footer() {
  return (
    <footer className="w-full flex items-start px-[4rem] py-[4rem] h-[600px]">
      <Logo />
      <PlatformComponent />
      <Channel />
      <Industry />
      <Pricing />
    </footer>
  );
}

function Pricing() {
  return (
    <div className="w-[17.5%] h-full justify-between flex items-start flex-col gap-6">
      {pricing.map((el, i) => (
        <div key={i} className="w-full flex items-start flex-col gap-6">
          <h1 className="text-base font-bold text-[#191919]">{el.title}</h1>
          <div key={i} className="w-full flex items-start flex-col gap-4">
            {el.list.map((el, i) => (
              <p key={i} className="text-[14px] font-medium text-[#6F7073]">
                {el}
              </p>
            ))}
          </div>
        </div>
      ))}
      <div className="flex items-center gap-2">
        <div className="w-[24px]">
          <ImageComponent
            height="24px"
            src="/arrow.svg"
            alt="arrow"
            fit="contain"
          />
        </div>
        <p className="text-[14px] font-medium text-[#191919]">Go back to top</p>
      </div>
    </div>
  );
}

function Channel() {
  return (
    <div className="w-[17.5%] h-full flex items-start flex-col gap-6">
      {channel.map((el, i) => (
        <div key={i} className="w-full flex items-start flex-col gap-6">
          <h1 className="text-base font-bold text-[#191919]">{el.title}</h1>
          <div key={i} className="w-full flex items-start flex-col gap-4">
            {el.list.map((el, i) => (
              <p key={i} className="text-[14px] font-medium text-[#6F7073]">
                {el}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function PlatformComponent() {
  return (
    <div className="w-[17.5%] h-full flex items-start flex-col gap-6">
      {platform.map((el, i) => (
        <div key={i} className="w-full flex items-start flex-col gap-6">
          <h1 className="text-base font-bold text-[#191919]">{el.title}</h1>
          <div key={i} className="w-full flex items-start flex-col gap-4">
            {el.list.map((el, i) => (
              <p key={i} className="text-[14px] font-medium text-[#6F7073]">
                {el}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Industry() {
  return (
    <div className="w-[17.5%] h-full flex items-start flex-col gap-6">
      {industry.map((el, i) => (
        <div key={i} className="w-full flex items-start flex-col gap-6">
          <h1 className="text-base font-bold text-[#191919]">{el.title}</h1>
          <div key={i} className="w-full flex items-start flex-col gap-4">
            {el.list.map((el, i) => (
              <p key={i} className="text-[14px] font-medium text-[#6F7073]">
                {el}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Logo() {
  return (
    <div className="w-[30%] h-full justify-between flex items-start flex-col gap-8">
      <div className="flex flex-col gap-8 w-full">
        <div className="w-[76px]">
          <ImageComponent src="/logo.svg" alt="" height="25px" fit="contain" />
        </div>
        <p className="text-[#6F7073] font-medium text-[14px] w-[90%]">
          At Enif, we are dedicated to harnessing the power of AI responsibly.
          We pledge to uphold transparency, data privacy, and fairness in all
          our AI-driven processes.
        </p>

        <p className="text-[#6F7073] font-medium text-[14px] w-[90%]">
          Our promise is to enable you, our users, to thrive while actively
          preventing AI abuse. Together, let's shape a future where technology
          truly works for the betterment of all.
        </p>
      </div>
      <div className="flex items-center gap-6">
        <FaLinkedin />
        <FaFacebookF />
        <FaInstagram />
        <FaXTwitter />
      </div>
    </div>
  );
}
