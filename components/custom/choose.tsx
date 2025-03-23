import Image from "next/image";

export const Choose = () => {
  return (
    <div className="px-[50px] md:px-[100px] lg:px-[200px] py-12 flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col">
        <div className="text-4xl font-medium text-center">
          Registration Details
        </div>
        <div className="flex justify-center items-center relative right-14 lg:right-28">
          <Image
            src="/underline1.svg"
            alt="underline"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <p className="w-full lg:w-3/5 text-center">
        Secure your spot at AI-STEM 2025 and be part of the AI revolution! Don’t miss this opportunity to connect, learn, and innovate.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-20 gap-y-10 py-10">
        <div className="flex flex-col items-center justify-center gap-7">
          <Image
            src="/project.svg"
            alt="choose"
            width={100}
            height={100}
            className="size-16"
          />
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="text-xl text-[#172540] font-medium">
              {" "}
              Students: ₹750
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-7">
          <Image
            src="/afford.svg"
            alt="choose"
            width={100}
            height={100}
            className="size-16"
          />
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="text-xl text-[#172540] font-medium">
              Faculty: ₹1500
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-7">
          <Image
            src="/customer.svg"
            alt="choose"
            width={100}
            height={100}
            className="size-16"
          />
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="text-xl text-[#172540] font-medium text-center">
              Industry: ₹2500
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
