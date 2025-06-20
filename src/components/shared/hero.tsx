import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full bg-gradient-to-br from-background via-muted/30 to-background py-24 md:py-32 overflow-hidden"
    >
      {/* Decorative floating blob */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl animate-pulse-slow z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[200px] h-[200px] bg-purple-500/10 rounded-full blur-2xl animate-pulse-slow z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-foreground animate-fade-in-up">
          We build <span className="text-primary">scalable</span> web experiences
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-in-up delay-150">
          Devnixa helps startups and businesses craft fast, beautiful, and maintainable digital products using cutting-edge web technologies.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up delay-300">
          <Button
            size="lg"
            className="group transition-all duration-300"
          >
            Get Started
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group transition-all duration-300"
          >
            <PlayCircle className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            Learn More
          </Button>
        </div>

        {/* Hero Illustration */}
        <div className="mt-16 w-full max-w-5xl animate-fade-in-up delay-500">
          <Image
            src="/hero-image.png"
            alt="Devnixa Hero Illustration"
            width={1200}
            height={600}
            className="w-full rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-300"
            priority
          />
        </div>
      </div>
    </section>
  );
}
