import { CustomFontText } from "../ui/customFontText";
import Image from "next/image";

export const About = () => {
  return (
    <>
      <div className="px-[25px] md:px-[50px] lg:px-[50px] py-12 grid grid-cols-1 lg:grid-cols-4 items-center justify-items-center bg-[#f8f9fc] gap-4 w-full">
        <div className="font-bold text-[48px] md:text-[56px] text-[#1C77C3] leading-tight">
          <CustomFontText>Why Attend?</CustomFontText>
        </div>
        <div className="col-span-3 text-base text-[#393939] px-6 md:px-10 space-y-4 mt-4 lg:mt-0">
          <p>
            ICEAMT 2025 offers a distinguished platform for researchers,
            academics, and professionals to engage with the latest trends and
            innovations in applied science, management, and technology.
          </p>
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>Engage with Interdisciplinary Research:</strong> Discover
              emerging ideas and advancements in diverse domains including AI,
              cybersecurity, sustainable engineering, and modern management.
            </li>
            <li>
              <strong>Network with Global Experts:</strong> Collaborate with
              leading researchers, industry professionals, and policymakers to
              foster new opportunities and partnerships.
            </li>
            <li>
              <strong>Participate in Expert-Led Sessions:</strong> Gain insights
              through keynote speeches, panel discussions, and interactive
              workshops on cutting-edge topics.
            </li>
            <li>
              <strong>Showcase and Publish Research:</strong> Present your work
              to an international audience and get the opportunity to publish
              with ISBN & DOI, and submit to Scopus/UGC CARE listed journals.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col gap-6 w-full bg-[#f8f9fc] pt-10 pb-10">
        <h2 className="text-2xl font-semibold text-[#1C77C3]">
          Knowledge Partner: IEI
        </h2>
        <Image
          src="/iei-logo.jpeg" // Ensure this file exists in your public folder
          alt="IEI Logo"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
    </>
  );
};
