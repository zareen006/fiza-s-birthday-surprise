import { useEffect, useState } from "react";

interface Confetti {
  id: number;
  x: number;
  delay: number;
  color: string;
  size: number;
}

export const CakeSection = () => {
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);

  const colors = [
    "hsl(340 60% 75%)", // rose
    "hsl(280 40% 85%)", // lavender
    "hsl(45 80% 60%)",  // gold
    "hsl(340 70% 92%)", // rose-light
  ];

  const triggerConfetti = () => {
    setShowConfetti(true);
    const newConfetti: Confetti[] = [];
    
    for (let i = 0; i < 50; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
      });
    }
    
    setConfetti(newConfetti);
    
    setTimeout(() => {
      setShowConfetti(false);
      setConfetti([]);
    }, 4000);
  };

  useEffect(() => {
    const timer = setTimeout(triggerConfetti, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-12 px-4 relative overflow-hidden">
      {/* Confetti */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {confetti.map((piece) => (
            <div
              key={piece.id}
              className="absolute rounded-full"
              style={{
                left: `${piece.x}%`,
                top: "-20px",
                width: `${piece.size}px`,
                height: `${piece.size}px`,
                backgroundColor: piece.color,
                animation: `confetti-fall 3s ease-out forwards`,
                animationDelay: `${piece.delay}s`,
              }}
            />
          ))}
        </div>
      )}

      <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-8">
        Make a Wish! 🎂
      </h2>
      
      <div className="max-w-md mx-auto">
        {/* Cake Container */}
        <div 
          className="relative cursor-pointer group"
          onClick={triggerConfetti}
        >
          {/* Cake */}
          <div className="relative">
            {/* Top tier */}
            <div className="mx-auto w-32 h-20 bg-gradient-to-b from-rose-light to-rose rounded-t-3xl relative">
              {/* Frosting drips */}
              <div className="absolute -bottom-2 left-2 w-4 h-6 bg-card rounded-b-full" />
              <div className="absolute -bottom-3 left-8 w-3 h-8 bg-card rounded-b-full" />
              <div className="absolute -bottom-2 right-2 w-4 h-6 bg-card rounded-b-full" />
              <div className="absolute -bottom-4 right-8 w-3 h-10 bg-card rounded-b-full" />
              
              {/* Candles */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex gap-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="relative">
                    {/* Candle stick */}
                    <div className="w-2 h-8 bg-gradient-to-b from-lavender to-lavender-light rounded-full" />
                    {/* Flame */}
                    <div 
                      className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-5 bg-gradient-to-t from-gold via-gold-light to-card rounded-full animate-flicker"
                      style={{ 
                        boxShadow: "0 0 10px hsl(45 80% 60% / 0.8), 0 0 20px hsl(45 80% 60% / 0.4)",
                        animationDelay: `${i * 0.1}s`
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Middle tier */}
            <div className="mx-auto w-44 h-16 bg-gradient-to-b from-lavender-light to-lavender -mt-1 relative">
              <div className="absolute top-1/2 -translate-y-1/2 left-4 w-2 h-2 rounded-full bg-rose" />
              <div className="absolute top-1/2 -translate-y-1/2 left-10 w-2 h-2 rounded-full bg-gold" />
              <div className="absolute top-1/2 -translate-y-1/2 right-4 w-2 h-2 rounded-full bg-rose" />
              <div className="absolute top-1/2 -translate-y-1/2 right-10 w-2 h-2 rounded-full bg-gold" />
            </div>
            
            {/* Bottom tier */}
            <div className="mx-auto w-56 h-20 bg-gradient-to-b from-rose to-rose-light rounded-b-lg relative">
              {/* Decorative line */}
              <div className="absolute top-3 left-4 right-4 h-2 border-t-2 border-b-2 border-card/30 rounded-full" />
              {/* Bottom decoration */}
              <div className="absolute bottom-2 left-4 right-4 flex justify-around">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-3 h-3 rounded-full bg-gold-light" />
                ))}
              </div>
            </div>
            
            {/* Plate */}
            <div className="mx-auto w-64 h-4 bg-gradient-to-b from-muted to-border rounded-full shadow-soft" />
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-gold/10 blur-3xl group-hover:bg-gold/20 transition-all duration-500" />
        </div>
        
        <p className="text-center text-muted-foreground mt-8 font-body">
          Click the cake for more confetti! 🎊
        </p>
        
        <div className="text-center mt-6">
          <p className="font-display text-xl text-foreground">
            Wishing you the sweetest year ahead! 🌟
          </p>
        </div>
      </div>

      <style>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};
