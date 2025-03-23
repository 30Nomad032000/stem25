import { Link2Icon } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="flex flex-col gap-0 pt-[100px]">
      <div className="bg-[#172540] px-[25px] md:px-[100px] lg:px-[200px] py-12 grid grid-cols-1 lg:grid-cols-6 border-b border-white gap-y-8">
        <div className="col-span-1 lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-24 text-white text-base font-normal">
          <div className="flex flex-col gap-4">
            <div className="underline text-xl">CONTACT US</div>
            <div className="flex gap-4 items-center">
              <Link2Icon />{" "}
              <a href="https://www.adishankara.ac.in/site/aistem-conference">
                AISTEM Conference
              </a>
            </div>
            <div className="flex gap-4 items-center">
              <Image
                src="/email.svg"
                alt="email"
                className="size-5"
                height={100}
                width={100}
              />
              aistem2025@adishankara.ac.in
            </div>
            <div className="flex gap-4 items-center text-nowrap">
              🚀 Join us at AI-STEM 2025 and shape the future of AI!
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#172540] px-[25px] md:px-[100px] lg:px-[200px] py-7 flex items-center justify-center text-center text-white text-base font-normal">
        All Rights Reserved © 2025
      </div>
    </div>
  );
};
