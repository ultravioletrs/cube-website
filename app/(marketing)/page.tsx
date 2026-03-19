import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Integrations from "@/components/sections/Integrations";
import Gateway from "@/components/sections/Gateway";
import UseCases from "@/components/sections/UseCases";
import Partners from "@/components/sections/Partners";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Partners />
      <Features />
      <Integrations />
      <Gateway />
      <UseCases />
    </div>
  );
}
