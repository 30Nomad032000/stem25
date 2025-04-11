interface KeynoteSpeakerProps {
  name: string;
  title: string;
  university: string;
  location: string;
  poBox: string;
  email: string;
  phone: string;
  imageSrc: string;
}

export default function KeynoteSpeaker({
  name,
  title,
  university,
  location,
  poBox,
  email,
  phone,
  imageSrc,
}: KeynoteSpeakerProps) {
  return (
    <section className="py-20 bg-[#172540] text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-[#FFFFFF] mb-10 tracking-tight">
          Keynote Speaker
        </h2>

        <div className="group bg-gray-900 rounded-3xl shadow-xl p-8 md:p-10 transition transform hover:scale-105 hover:shadow-2xl flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
          <div className="relative">
            <img
              src={imageSrc}
              alt={name}
              className="w-36 h-36 object-cover rounded-full border-4 border-[#00CCFF] group-hover:border-white transition duration-300"
            />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-gray-900 rounded-full shadow-md"></div>
          </div>

          <div className="text-left space-y-2">
            <h3 className="text-2xl font-semibold text-[#00CCFF]">{name}</h3>
            <p className="text-gray-300">
              {title}
              <br />
              {university}
              <br />
              {location}
              <br />
              <span className="text-sm text-gray-400">P.O. Box: {poBox}</span>
            </p>
            <p className="text-sm text-gray-400">
              📧{" "}
              <a
                href={`mailto:${email}`}
                className="text-[#00CCFF] underline hover:text-white transition"
              >
                {email}
              </a>
            </p>
            <p className="text-sm text-gray-400">📞 {phone}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
