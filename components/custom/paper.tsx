import { Button } from "../ui/button";
import { Download } from "lucide-react"; // Optional: Lucide icon
import Link from "next/link";

export const PaperTemplate = () => {
  return (
    <section className="px-[25px] md:px-[50px] lg:px-[100px] py-16 bg-[#f8f9fc]">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1C77C3] mb-2">
            Paper Submission Template
          </h2>
          <p className="text-gray-700 text-base">
            Authors are requested to use the official template for formatting
            their papers before submission. Ensure your manuscript adheres to
            the provided style guidelines.
          </p>
        </div>

        <Link href="/ICEAMT_Template.docx" download>
          <Button className="bg-[#1C77C3] hover:bg-[#145a9e] text-white px-6 py-3 text-base flex gap-2 items-center">
            <Download className="w-5 h-5" />
            Download Template
          </Button>
        </Link>
      </div>
    </section>
  );
};

export const PaperDownloadButton = () => {
  return (
    <Link href="/ICEAMT_Template.docx" passHref>
      <a download>
        <Button className="bg-[#1C77C3] text-white hover:bg-[#145a9e] px-6 py-3 text-base">
          Download Template
        </Button>
      </a>
    </Link>
  );
};
