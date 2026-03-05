import Image from "next/image";
import HomeSection from "./components/AboutMe";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[rgb(231,227,241)]">
      <Navbar/>
      <main className="flex min-h-screen flex-col container mt-24 mx-auto py-4 px-4">
        <HeroSection/>
        <HomeSection />
      </main>
    </div>
  );
}
