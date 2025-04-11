import { About } from "@/components/custom/about";
import { Choose } from "@/components/custom/choose";
import { Header } from "@/components/custom/header";
import { Hero } from "@/components/custom/hero";
import { Mission } from "@/components/custom/mission";
import { Footer } from "@/components/custom/footer";
import Services from "@/components/custom/services";
import KeynoteSpeaker from "@/components/custom/keynoteSpearker";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Mission />
      <Choose />
      <KeynoteSpeaker
        name="Dr. Saley Seetharaman"
        title="Assistant Professor"
        university="King Khalid University"
        location="Abha, Saudi Arabia"
        poBox="61321"
        email="srami@kku.edu.sa"
        phone="+966 556339575"
        imageSrc="/speaker.jpeg" // Replace with the actual path to the image
      />

      <Services />
      <Footer />
    </>
  );
}
