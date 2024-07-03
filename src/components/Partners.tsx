import ImageComponent from "./Image";

export default function Partners() {
  return (
    <div className="w-full bg-white flex items-center justify-around py-4 my-10 rounded-full shadow-sm">
      {[1, 1, 1, 1, 1, 1].map((_, i) => (
        <div className="">
          <ImageComponent
            src={`/partner${i + 1}.svg`}
            alt="partner"
            fit="contain"
          />
        </div>
      ))}
    </div>
  );
}
