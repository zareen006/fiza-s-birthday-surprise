import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { Navigation } from "@/components/Navigation";
import { MemoriesSection } from "@/components/MemoriesSection";
import { SongSection } from "@/components/SongSection";
import { MessageSection } from "@/components/MessageSection";
import { CakeSection } from "@/components/CakeSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>("memories");

  const renderSection = () => {
    switch (activeSection) {
      case "memories":
        return <MemoriesSection />;
      case "song":
        return <SongSection />;
      case "message":
        return <MessageSection />;
      case "cake":
        return <CakeSection />;
      default:
        return <MemoriesSection />;
    }
  };

  return (
    <div className="min-h-screen bg-hero-gradient">
      <div className="container mx-auto px-4 py-8">
        <HeroSection />
        
        <div className="mb-12">
          <Navigation 
            activeSection={activeSection} 
            onSectionChange={setActiveSection} 
          />
        </div>
        
        <main className="animate-fade-in-up" key={activeSection}>
          {renderSection()}
        </main>
        
        <footer className="text-center py-12 mt-8">
          <p className="font-body text-muted-foreground text-sm">
            Made with 💖 for the most amazing friend
          </p>
          <div className="mt-4 flex justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <span 
                key={i} 
                className="text-lg animate-heart-beat"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                ✨
              </span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
