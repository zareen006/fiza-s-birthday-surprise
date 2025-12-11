import { Sparkles } from "./Sparkles";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[50vh] flex flex-col items-center justify-center text-center px-4 py-12">
      <Sparkles />
      
      <div className="relative z-10 animate-fade-in-up">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 leading-tight">
          Something special is waiting for you…
        </h1>
        
        <div className="flex items-center justify-center gap-3 mt-8">
          <span className="text-3xl md:text-4xl text-rose animate-heart-beat">❤️</span>
          <span className="font-display text-3xl md:text-5xl font-bold text-gradient glow-text">
            Fiza
          </span>
        </div>
        
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
};
