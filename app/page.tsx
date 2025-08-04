import Nav from "@/components/core/nav";

export default function Home() {
  return (
    <div className="relative w-full flex flex-col min-h-screen bg-white overflow-hidden">
      {/* Grid background using pseudo-element */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0"></div>

      <Nav />
      <h1 className="text-blue-600 font-bold text-3xl z-10">KassaGo.uz</h1>
    </div>
  );
}
