import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="h-[100px] flex justify-center lg:justify-between items-center border-b border-[#CBCBCB] px-[50px] md:px-[100px] lg:px-[50px] xl:px-[200px]">
      <div className="flex gap-4 items-center justify-center">
        <Image
          src="/logo.jpg"
          className="w-[95px] h-[95px]"
          width={100}
          height={100}
          alt="Logo"
        />
        <div className="text-[37px]  font-semibold text-[#1C77C3]">Stem 25</div>
      </div>

      <div className=" justify-center items-center gap-6 hidden lg:flex">
        <div className="flex justify-center items-center gap-10 font-semibold text-base text-[#393939]">
          <div>
            <Link href="https://forms.gle/oeyBYV2TcFJXDdHf8">
              <Button
                variant="outline"
                className="px-[30px] py-[10px] text-[#003399] border-[#003399] hover:text-[#003399] flex gap-3 font-normal text-base"
              >
                <Image
                  className="h-4 w-4"
                  src="/loginIcon.svg"
                  alt="login icon"
                  width={100}
                  height={100}
                />{" "}
                Register
              </Button>
            </Link>
          </div>
        </div>
        <Button className="bg-[#00CCFF] hover:bg-[#00CCFF] text-white border-none px-[30px] py-[10px] text-base hover:text-white font-normal">
          Contact Us
        </Button>
      </div>
    </div>
  );
};
