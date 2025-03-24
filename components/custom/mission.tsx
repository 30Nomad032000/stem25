import Image from "next/image";
import { CustomFontText } from "../ui/customFontText";

export const Mission = () => {
  return (
    <div className="px-[50px] py-10 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8">
      <div className="col-span-1 lg:col-span-2 flex items-center">
        <Image
          src="/mission.jpeg"
          alt="mission Image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="rounded-[20px]"
        />
      </div>
      <div className="bg-[#F2F2F2] rounded-[20px] px-6 py-8 flex flex-col gap-4 justify-between">
        <div className="flex justify-between">
          <div className="text-[#39A9DB] text-[40px] leading-10">
            <CustomFontText>Our Mission</CustomFontText>
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
          <p className="text-lg text-gray-600 mb-8">
            At <span className="font-semibold">AI-STEM Conference 2025</span>,
            our mission is to{" "}
            <span className="italic">
              bridge the gap between AI research and real-world applications
            </span>{" "}
            by fostering collaboration between academia, industry, and
            policymakers.
          </p>

          <div className="text-left max-w-2xl mx-auto">
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 text-xl mr-2">✔</span>
                <span>
                  <strong>Promote Innovation</strong> – Drive cutting-edge AI
                  advancements in science, technology, and management.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 text-xl mr-2">✔</span>
                <span>
                  <strong>Encourage Knowledge Exchange</strong> – Provide a
                  platform for researchers and professionals to share insights.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 text-xl mr-2">✔</span>
                <span>
                  <strong>Explore Ethical AI</strong> – Address the challenges,
                  ethical implications, and future prospects of AI-driven
                  solutions.
                </span>
              </li>

            </ul>
          </div>

          <p className="text-lg text-gray-600 mt-8">
            Through{" "}
            <span className="font-semibold">
              expert discussions, hands-on workshops, and research presentations
            </span>
            , we aim to{" "}
            <span className="font-semibold">shape the future of AI</span> while
            ensuring its responsible and sustainable growth.
          </p>
        </div>
      </div>
    </div>
  );
};
