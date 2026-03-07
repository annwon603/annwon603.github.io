import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMe";
import ProjectSection from "./components/ProjectSection";
import MusicSection from "./components/MusicSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFFFFF]">
      <Navbar/>
      <main className="flex min-h-screen flex-col mt-24">
        <HeroSection/>
        <section id="about">
          <div className="w-full bg-[radial-gradient(50%_50%_at_50%_50%,#E1DDEB_70.67%,#C9BFEB_100%)]">
            <AboutMeSection />
          </div>
        </section>
        
        <section id="projects">
          <ProjectSection/>
        </section>

        <section id="music">
          <div className="w-full bg-[#E1DDEB]">
            <MusicSection/>
          </div>
        </section>

        
      </main>
    </div>
  );
}
