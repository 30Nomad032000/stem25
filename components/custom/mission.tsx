import Image from "next/image";
import { CustomFontText } from "../ui/customFontText";

export const Objectives = () => {
  return (
    <div className="px-[50px] py-10 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8">
      <div className="col-span-1 lg:col-span-2 flex items-center">
        <Image
          src="/mission.jpeg"
          alt="Objectives Image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="rounded-[20px]"
        />
      </div>
      <div className="bg-[#F2F2F2] rounded-[20px] px-6 py-8 flex flex-col gap-4 justify-between">
        <div className="flex justify-between items-center">
          <div className="text-[#39A9DB] text-[36px] leading-10">
            <CustomFontText>Our Objectives</CustomFontText>
          </div>
          <Image
            src="/arrow.svg"
            alt="arrow"
            height={100}
            width={100}
            className="size-10"
          />
        </div>
        <div className="max-w-4xl mx-auto px-2">
          <p className="text-lg text-gray-600 mb-6">
            The objectives of <span className="font-semibold">ICEAMT 2025</span>{" "}
            focus on addressing the most pressing needs in the fields of Applied
            Science, Management, and Technology through innovation,
            collaboration, and ethical integration of emerging tools.
          </p>

          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✔</span>
              <span>
                <strong>Develop Sustainable Innovations</strong> – Foster
                environmentally responsible technologies and practices.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✔</span>
              <span>
                <strong>Bridge Research and Application</strong> – Transform
                theoretical research into impactful real-world solutions.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✔</span>
              <span>
                <strong>Transform Organizational Practices</strong> – Redefine
                management models with technology-driven strategies.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✔</span>
              <span>
                <strong>Enhance Global Collaboration</strong> – Create a
                worldwide network of researchers, professionals, and
                institutions.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✔</span>
              <span>
                <strong>Explore Breakthroughs in AI and Automation</strong> –
                Investigate the frontiers of intelligent systems and automation.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✔</span>
              <span>
                <strong>Strengthen Cybersecurity</strong> – Address digital
                vulnerabilities through advanced defense mechanisms.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
