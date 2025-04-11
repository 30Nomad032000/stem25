import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="h-auto py-4 border-b border-[#CBCBCB] px-[25px] md:px-[50px] lg:px-[25px] xl:px-[100px] bg-white">
      <div className="w-full flex flex-wrap lg:flex-nowrap justify-between items-center gap-6">
        {/* Left: Logos + Title */}
        <div className="flex items-center gap-4 flex-shrink-0 w-full lg:w-auto justify-center lg:justify-start">
          <div className="flex items-center gap-3">
            <Image
              src="/adi1.png"
              alt="Institute Logo"
              width={90}
              height={90}
              className="object-contain rounded-[12px] w-[75px] h-[75px] md:w-[200px] md:h-[140px]"
            />
            <Image
              src="/logo.jpg"
              alt="Conference Logo"
              width={90}
              height={90}
              className="object-contain w-[75px] h-[75px] md:w-[120px] md:h-[120px]"
            />
          </div>
          <div className="text-[28px] md:text-[36px] font-semibold text-[#1C77C3] whitespace-nowrap pl-2">
            ICEAMT 25
          </div>
        </div>

        {/* Right: Register + Contact */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-end items-center gap-4 flex-wrap">
          <Link href="https://forms.gle/oeyBYV2TcFJXDdHf8">
            <Button
              variant="outline"
              className="px-6 py-2 text-[#003399] border-[#003399] hover:text-[#003399] text-sm md:text-base font-normal flex gap-2 items-center"
            >
              <Image
                src="/loginIcon.svg"
                alt="login icon"
                width={16}
                height={16}
                className="h-4 w-4"
              />
              Register
            </Button>
          </Link>

          <Button className="bg-[#00CCFF] hover:bg-[#00CCFF] text-white px-6 py-2 text-sm md:text-base font-normal">
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};
