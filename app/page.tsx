import Nav from "@/components/core/nav";
import Hero from "@/components/pages/hero";

export default function Home() {
  return (
    <div className="relative w-full flex flex-col min-h-screen bg-white overflow-hidden">
      <Nav />

      <div className="w-full px-6 ">
        <Hero/>
      </div>
    </div>
  );
}
