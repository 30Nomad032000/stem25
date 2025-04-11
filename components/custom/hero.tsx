import { Button } from "../ui/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="px-6 md:px-16 lg:px-36 py-16 grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-10 bg-[#f8f9fc]">
      {/* Left: Textual Info */}
      <div className="flex flex-col items-center lg:items-start justify-center gap-8 text-[#172540]">
        <div className="flex flex-col gap-3 text-center lg:text-left">
          <h1 className="text-2xl md:text-3xl font-serif font-bold leading-snug tracking-tight">
            International Conference on Emerging Trends in <br />
            Applied Science, Management & Technology – 2025
          </h1>
          <h2 className="text-lg font-medium text-[#3e4a5e] tracking-wide">
            (ICEAMT-2025)
          </h2>
        </div>

        <div className="text-base font-medium text-center lg:text-left leading-relaxed">
          📅 <strong>July 31 – August 1, 2025</strong> <br />
          📍{" "}
          <strong>
            Adi Shankara Institute of Engineering & Technology, Kalady
          </strong>
        </div>

        <div className="text-sm text-justify text-[#2c3e50] leading-6 max-w-xl">
          <p className="mb-3">
            <strong className="text-[#1c2b39]">About the Conference:</strong>{" "}
            ICEAMT-2025 is a premier academic event designed to explore
            contemporary advancements in Applied Science, Management, and
            Technology. It aims to connect global scholars, researchers, and
            professionals to exchange ideas, foster innovation, and shape the
            future of interdisciplinary research.
          </p>
          <p>
            <strong className="text-[#1c2b39]">About the Institute:</strong> Adi
            Shankara Institute of Engineering & Technology (ASIET), Kalady, is a
            premier institution offering value-added technological education,
            fostering professional excellence and ethical values. Established in
            2001, ASIET is Kerala's first self-financing technological education
            center, affiliated with APJ Abdul Kalam Technological University and
            approved by AICTE. It offers UG, PG, and PhD courses with NBA
            accreditation in multiple streams and holds an 'A' grade from NAAC.
          </p>
        </div>

        <Button
          variant="outline"
          className="mt-4 px-8 py-3 border-2 text-[#003366] border-[#003366] hover:bg-[#003366] hover:text-white transition-all duration-200 font-medium rounded-md"
        >
          Learn More
        </Button>
      </div>

      {/* Right: Hero Image */}
      <div className="col-span-1 lg:col-span-2 relative">
        <Image
          src="/hero.png"
          alt="Hero Image 1"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="rounded-[24px] shadow-md"
        />
      </div>
    </div>
  );
};
