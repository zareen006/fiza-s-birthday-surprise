import { Music } from "lucide-react";
import { useEffect, useRef } from "react";
import { getAssetPath } from "@/lib/assetPath";

export const SongSection = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Auto-play audio when component mounts
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        // Browsers may block auto-play, fail silently
      });
    }
  }, []);

  return (
    <section className="py-12 px-4">
      <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-4">
        A Song For You 🎵
      </h2>
      
      <p className="text-center text-muted-foreground mb-8 font-body max-w-md mx-auto">
        This melody reminds me of our friendship and all the beautiful moments we've shared together.
      </p>
      
      <div className="max-w-2xl mx-auto">
        <div className="relative bg-card rounded-3xl p-6 md:p-8 shadow-soft border border-rose/10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-rose to-lavender flex items-center justify-center shadow-glow">
              <Music className="w-6 h-6 text-card" />
            </div>
          </div>
          
          <div className="mt-4">
            <h3 className="font-display text-xl text-center text-foreground mb-4">
              Kyon – Barfi
            </h3>

            {/* Audio Player */}
            <audio
              ref={audioRef}
              controls
              loop
              className="w-full mb-6 rounded-lg"
            >
              <source src={getAssetPath("audio/audio.mp3")} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            
          </div>
          
          <div className="mt-6 flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-gradient-to-t from-rose to-lavender rounded-full animate-pulse"
                style={{
                  height: `${Math.random() * 20 + 10}px`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};