import Image from "next/image";

export const Choose = () => {
  return (
    <div className="px-[50px] md:px-[100px] lg:px-[200px] py-12 flex flex-col justify-center items-center gap-4 bg-white text-black">
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
        <p className="w-full lg:w-3/5 text-center text-gray-700">
          Secure your spot at ICEAMT 2025 and be part of the AI revolution!
          Don’t miss this opportunity to connect, learn, and innovate.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-10 gap-y-10 py-10">
        <div className="flex flex-col items-center justify-center gap-5">
          <Image
            src="/student.png"
            alt="Students"
            width={100}
            height={100}
            className="size-16"
          />
          <div className="text-xl font-medium text-center">
            Students / <br /> Research Scholars <br /> ₹350*
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <Image
            src="/afford.svg"
            alt="Faculty"
            width={100}
            height={100}
            className="size-16"
          />
          <div className="text-xl font-medium text-center">
            Faculty <br /> ₹500*
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <Image
            src="/customer.svg"
            alt="Industry"
            width={100}
            height={100}
            className="size-16"
          />
          <div className="text-xl font-medium text-center">
            Industry <br /> ₹750*
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <Image
            src="/project.svg"
            alt="Foreign"
            width={100}
            height={100}
            className="size-16"
          />
          <div className="text-xl font-medium text-center">
            Foreign Participants <br /> $15*
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-500 text-center">
        *An additional ₹500 will be charged for publication
      </p>
    </div>
  );
};
