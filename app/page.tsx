import { About } from "@/components/custom/about";
import { Choose } from "@/components/custom/choose";
import { Header } from "@/components/custom/header";
import { Hero } from "@/components/custom/hero";
import { Objectives } from "@/components/custom/mission";
import { Footer } from "@/components/custom/footer";
import Services from "@/components/custom/services";
import KeynoteSpeaker from "@/components/custom/keynoteSpearker";
import { PaperTemplate } from "@/components/custom/paper";

const speakers = [
  {
    name: "Dr. Saley Seetharaman",
    title: "Assistant Professor",
    university: "King Khalid University",
    location: "Abha, Saudi Arabia",
    email: "srami@kku.edu.sa",
    imageSrc: "/speaker.jpeg",
  },
  {
    name: "Sabu Augustine",
    title: "Senior General Manager – Human Resources",
    university: " Plant Lipids",
    location: "Kerala",
    imageSrc: "/speaker2.jpeg",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Objectives />
      <Choose />
      <KeynoteSpeaker speakers={speakers} />

      <Services />
      <PaperTemplate />
      <Footer />
    </>
  );
}
