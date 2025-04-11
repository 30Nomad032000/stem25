import { Button } from "../ui/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="px-[50px] py-10 h-fit grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8">
      <div className="h-full flex flex-col items-center lg:items-start justify-center gap-8">
        <div className="flex flex-col gap-2 items-center">
          <div className="text-[23px] font-semibold text-[#172540] text-center">
            <span className="">
              International conference on Emerging trends in Applied
              Science,Management, Technology-2025 <br />
              (ICEAMT-2025)
            </span>
          </div>
          <Image
            src="/underline1.svg"
            className="w-64 h-8"
            width={100}
            height={100}
            alt="underline"
          />
        </div>
        <div className="font-semibold">
          📅 Date: July 31 – August 1, 2025 <br />
          📍 Venue: Adi Shankara Institute of Engineering & Technology, Kalady
        </div>
        <Button
          variant="outline"
          className="px-[30px] py-[10px] text-[#39A9DB] border-[#39A9DB] hover:text-[#003399] flex gap-3 font-normal text-base"
        >
          Know More
        </Button>
      </div>
      <div className="col-span-1 lg:col-span-2 relative">
        <Image
          src="/aiHero.svg"
          className="h-full w-full bg-cover rounded-3xl"
          alt="Hero Image 1"
          height={100}
          width={100}
        ></Image>
      </div>
    </div>
  );
};
