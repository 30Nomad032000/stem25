export const Services = () => {
  return (
    <div className="px-[25px] md:px-[100px] lg:px-[50px] xl:px-[200px] py-12 flex flex-col justify-center items-center gap-14">

      <section id="conference-tracks" className="py-16 bg-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Conference Tracks</h2>
          <p className="text-lg text-gray-600 mb-8">Explore AI’s role across various disciplines through these focused tracks.</p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">🔬 Basic Sciences & Humanities</h3>
              <p className="text-gray-600">AI applications in scientific research, sustainability, education, and cognitive sciences.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">📈 Business & Management</h3>
              <p className="text-gray-600">AI in business intelligence, decision-making, cybersecurity, and digital ecosystems.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">💻 Computer Applications</h3>
              <p className="text-gray-600">Machine learning, deep learning, blockchain, big data, and generative AI.</p>
            </div>
          </div>
        </div>
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
            <li>✅ Contribute to shaping AI's future with impactful research.</li>
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
              <p className="text-lg text-gray-700"><strong>AI Researchers & Academicians</strong> – Stay updated on the latest AI innovations.</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 text-2xl mr-3">✔</span>
              <p className="text-lg text-gray-700"><strong>Industry Professionals & Innovators</strong> – Discover AI-driven solutions for your field.</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 text-2xl mr-3">✔</span>
              <p className="text-lg text-gray-700"><strong>Policymakers & Government Officials</strong> – Understand AI's impact on governance and policy.</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 text-2xl mr-3">✔</span>
              <p className="text-lg text-gray-700"><strong>Students & AI Enthusiasts</strong> – Explore AI career paths and research opportunities.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
