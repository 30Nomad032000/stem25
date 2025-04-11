interface Speaker {
  name: string;
  title?: string;
  university?: string;
  location?: string;
  poBox?: string;
  email?: string;
  phone?: string;
  imageSrc: string;
}

interface KeynoteSpeakerProps {
  speakers: Speaker[];
}

export default function KeynoteSpeakers({ speakers }: KeynoteSpeakerProps) {
  return (
    <section className="py-20 bg-[#172540] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-white mb-14 tracking-tight">
          Keynote Speakers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-3xl shadow-xl p-8 md:p-10 transition transform hover:scale-105 hover:shadow-2xl flex flex-col md:flex-row items-center gap-8"
            >
              <div className="relative">
                <img
                  src={speaker.imageSrc}
                  alt={speaker.name}
                  className="w-36 h-36 object-cover rounded-full border-4 border-[#00CCFF] group-hover:border-white transition duration-300"
                />
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-gray-900 rounded-full shadow-md"></div>
              </div>

              <div className="text-left space-y-2">
                <h3 className="text-2xl font-semibold text-[#00CCFF]">
                  {speaker.name}
                </h3>

                {(speaker.title ||
                  speaker.university ||
                  speaker.location ||
                  speaker.poBox) && (
                  <p className="text-gray-300">
                    {speaker.title && (
                      <>
                        {speaker.title}
                        <br />
                      </>
                    )}
                    {speaker.university && (
                      <>
                        {speaker.university}
                        <br />
                      </>
                    )}
                    {speaker.location && (
                      <>
                        {speaker.location}
                        <br />
                      </>
                    )}
                    {speaker.poBox && (
                      <span className="text-sm text-gray-400">
                        P.O. Box: {speaker.poBox}
                      </span>
                    )}
                  </p>
                )}

                {speaker.email && (
                  <p className="text-sm text-gray-400">
                    📧{" "}
                    <a
                      href={`mailto:${speaker.email}`}
                      className="text-[#00CCFF] underline hover:text-white transition"
                    >
                      {speaker.email}
                    </a>
                  </p>
                )}

                {speaker.phone && (
                  <p className="text-sm text-gray-400">📞 {speaker.phone}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
