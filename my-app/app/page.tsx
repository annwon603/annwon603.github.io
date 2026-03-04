import Image from "next/image";
import HomeSection from "./components/HomeSection";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[rgb(231,227,241)]">
      <main className="flex min-h-screen flex-col container mx-auto py-4 px-4">
        <HomeSection />
      </main>
    </div>
  );
}
