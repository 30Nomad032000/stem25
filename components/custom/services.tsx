"use client";

import { useState } from "react";

interface Track {
  title: string;
  description: string;
  themes: string[];
}

const tracks: Track[] = [
  {
    title: "🔬 Applied Science",
    description:
      "Exploring cutting-edge developments in foundational and interdisciplinary sciences.",
    themes: [
      "Algebra",
      "Stochastic Modelling",
      "Fuzzy Theory",
      "Differential Equations",
      "Numerical Methods",
      "Discrete and Combinatorial Optimization",
      "Graph Theory",
      "Nano Technology",
      "Materials",
      "Polymers and Plastics",
      "Theoretical Physics",
      "Sustainable Engineering",
    ],
  },
  {
    title: "📈 Management",
    description:
      "Innovative management practices and economic strategies for a sustainable future.",
    themes: [
      "Sustainable Business Practices",
      "Emerging Trends in Business",
      "Ethics in Corporate Governance and Leadership",
      "Sustainable Economic Growth and Development",
      "Trading and Market Prediction",
      "Behavioural Finance",
      "Human-AI Partnership in Business",
      "Heritage Management",
    ],
  },
  {
    title: "💻 Technology",
    description:
      "Technological innovations redefining industries and future-ready solutions.",
    themes: [
      "Machine Learning Algorithms and Applications",
      "Deep Learning: Deployment, and Real-World Challenges",
      "Big Data Analytics and AI-Driven Decision Support Systems",
      "Quantum Computing",
      "Cybersecurity, Surveillance, and Forensics",
      "Blockchain",
      "Generative AI: Creativity, Innovation, and Ethical Considerations",
      "Reinforcement Learning",
      "Autonomous Intelligent Systems",
      "Explainable AI and Trust in Machine Learning Systems",
    ],
  },
];

export default function Services() {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);

  return (
    <section id="conference-tracks" className="py-16 bg-white text-center">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Conference Tracks
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the leading research and innovation shaping science,
          management, and technology.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {tracks.map((track, index) => (
            <div
              key={index}
              onClick={() => setSelectedTrack(track)}
              className="bg-gray-100 p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {track.title}
              </h3>
              <p className="text-gray-600">{track.description}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedTrack && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full text-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {selectedTrack.title}
            </h3>
            <p className="text-gray-600 mb-4">{selectedTrack.description}</p>
            <h4 className="text-lg font-semibold text-gray-700 mb-2">
              Key Themes:
            </h4>
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
  );
}
