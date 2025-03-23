import { CustomFontText } from "../ui/customFontText";

export const About = () => {
  return (
    <div className="px-[50px] md:px-[100px] lg:px-[200px] py-10 grid grid-cols-1 lg:grid-cols-4 items-center justify-items-center">
      <div className="font-bold text-[64px] text-[#1C77C3] text-nowrap">
        <CustomFontText>Why Attend?</CustomFontText>
      </div>
      <p className="col-span-3 text-base text-[#393939]">
        🚀 Discover the Future of AI – Explore cutting-edge AI research and
        innovations across industries. <br />
        🤝 Network with Experts – Connect with global AI researchers, industry
        professionals, and academicians.
        <br /> 🔍 Gain Practical Insights – Attend expert talks, hands-on
        workshops, and thought-provoking panel discussions.
        <br /> 📑 Publish Your Research – Selected papers will be published with
        an ISBN & DOI, with options for Scopus/UGC CARE journals.
      </p>
    </div>
  );
};
