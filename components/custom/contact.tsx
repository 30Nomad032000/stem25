import { Button } from "../ui/button";

export const Contact = () => {
  return (
    <div className="bg-[url('/contactBackground.svg')] h-[380px] w-full bg-no-repeat bg-cover flex flex-col items-center justify-center gap-6">
      <div className="text-white text-5xl font-semibold text-center">
        Want to know more ?
      </div>
      <div className="text-white text-xl font-normal text-center">
        Get in touch with us to know more about the conference
      </div>
      <Button className="bg-[#00CCFF] hover:bg-[#00CCFF] text-white border-none px-[30px] py-[10px] text-base hover:text-white font-normal">
        Contact Us
      </Button>
    </div>
  );
};
