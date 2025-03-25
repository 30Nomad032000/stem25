'use client';

import { useState } from "react";

interface Track {
  title: string;
  description: string;
  themes: string[];
}

export const Services = () => {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const tracks: Track[] = [
    {
      title: "🔬 Basic Sciences & Humanities",
      description: "AI applications in scientific research, sustainability, education, and cognitive sciences.",
      themes: [
        "AI in Scientific Research and Discovery",
        "AI for Sustainable Development and Environmental Science",
        "AI in Mathematical Modelling & Simulation",
        "AI in Language Processing and Linguistics",
        "AI in Social Sciences and Behavioral Analysis",
        "AI for Education and Learning Technologies",
        "AI in Healthcare and Biomedical Sciences",
        "AI for Economic Modeling and Policy Analysis",
        "AI in Cognitive Science and Human-Computer Interaction",
        "AI for Cultural Heritage and Digital Humanities"
      ]
    },
    {
      title: "📈 Business & Management",
      description: "AI in business intelligence, decision-making, cybersecurity, and digital ecosystems.",
      themes: [
        "AI-Driven Decision Intelligence and Analytics",
        "Hyper-automation and AI-enabled Business Processes",
        "AI-Powered Customer Experience and Personalization",
        "AI in Supply Chain Optimization and Logistics",
        "AI for Cybersecurity and Risk Management",
        "AI in Workforce Transformation and Automation",
        "AI for Smart Business Models and Digital Ecosystems",
        "AI in Sustainable Computing and Ethical AI Practices",
        "AI Applications in Financial Technology and Investment Strategies",
        "AI for Collaborative Workspaces and Intelligent Automation"
      ]
    },
    {
      title: "💻 Computer Applications",
      description: "Machine learning, deep learning, blockchain, big data, and generative AI.",
      themes: [
        "Data Science and Predictive Analytics in AI",
        "Machine Learning Algorithms and Applications",
        "Deep Learning Innovations and Challenges",
        "Big Data Analytics and AI-driven Insights",
        "Quantum Computing for AI and Machine Learning",
        "AI for Cybersecurity and Secure Systems",
        "Blockchain and AI: Convergence and Applications",
        "Generative AI: Models, Creativity, and Ethics",
        "Reinforcement Learning and Autonomous Systems",
        "Explainable AI and Trustworthy Machine Learning"
      ]
    }
  ];
  return (
    <div className="px-[25px] md:px-[100px] lg:px-[50px] xl:px-[200px] py-12 flex flex-col justify-center items-center gap-14">

      <section id="conference-tracks" className="py-16 bg-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Conference Tracks</h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore AI&apos;s role across various disciplines through these focused tracks.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {tracks.map((track, index) => (
              <div
                key={index}
                onClick={() => setSelectedTrack(track)}
                className="bg-gray-100 p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{track.title}</h3>
                <p className="text-gray-600">{track.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Key Themes */}
        {selectedTrack && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{selectedTrack.title}</h3>
              <p className="text-gray-600 mb-4">{selectedTrack.description}</p>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">Key Themes:</h4>
              <ul className="list-disc list-inside text-gray-600">
                {selectedTrack.themes.map((theme, i) => (
                  <li key={i}>{theme}</li>
                ))}
              </ul>
              <button
                onClick={() => setSelectedTrack(null)}
                className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>

      <section id="call-for-papers" className="py-16 bg-gray-100 text-center rounded-xl">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Call for Papers</h2>
          <p className="text-lg text-gray-600 mb-8">
            Researchers, academicians, and industry professionals are invited to submit
            <span className="font-semibold">original research papers</span> aligned with the conference themes.
          </p>

          <ul className="text-lg text-gray-700 space-y-4 text-left max-w-2xl mx-auto">
            <li>✅ Selected papers will be <strong>published</strong> with an ISBN & DOI.</li>
            <li>✅ Additional options for <strong>Scopus/UGC CARE</strong> journal publication.</li>
            <li>✅ Contribute to shaping AI&apos;s future with impactful research.</li>
          </ul>

          <a href="https://forms.gle/oeyBYV2TcFJXDdHf8" className="mt-6 inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition">
            Submit Your Paper
          </a>
        </div>
      </section>

      <section id="who-should-attend" className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Who Should Attend?</h2>
          <p className="text-lg text-gray-600 mb-8">AI-STEM 2025 is designed for anyone passionate about AI and its applications.</p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start">
              <span className="text-green-500 text-2xl mr-3">✔</span>
              <p className="text-lg text-gray-700"><strong>AI Researchers & Academicians</strong> - Stay updated on the latest AI innovations.</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 text-2xl mr-3">✔</span>
              <p className="text-lg text-gray-700"><strong>Industry Professionals & Innovators</strong> - Discover AI-driven solutions for your field.</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 text-2xl mr-3">✔</span>
              <p className="text-lg text-gray-700"><strong>Policymakers & Government Officials</strong> - Understand AI&apos;s impact on governance and policy.</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 text-2xl mr-3">✔</span>
              <p className="text-lg text-gray-700"><strong>Students & AI Enthusiasts</strong> - Explore AI career paths and research opportunities.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
