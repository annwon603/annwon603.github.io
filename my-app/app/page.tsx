import Image from "next/image";
import HomeSection from "./components/AboutMe";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[rgb(231,227,241)]">
      <Navbar/>
      <main className="flex min-h-screen flex-col mt-24">
        <HeroSection/>
        <div className="w-full bg-[radial-gradient(50%_50%_at_50%_50%,#E1DDEB_70.67%,#C9BFEB_100%)]">
          <HomeSection />
        </div>
      </main>
    </div>
  );
}
