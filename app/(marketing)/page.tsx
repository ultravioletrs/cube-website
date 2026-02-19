import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Architecture from "@/components/sections/Architecture";
import Gateway from "@/components/sections/Gateway";
import UseCases from "@/components/sections/UseCases";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <Architecture />
      <Gateway />
      <UseCases />
    </div>
  );
}
