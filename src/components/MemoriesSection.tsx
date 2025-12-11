import { useEffect, useState } from "react";

const memories = [
  {
    id: 1,
    placeholder: "Memory 1",
    gradient: "from-rose-light to-lavender-light",
  },
  {
    id: 2,
    placeholder: "Memory 2",
    gradient: "from-lavender-light to-rose-light",
  },
  {
    id: 3,
    placeholder: "Memory 3",
    gradient: "from-rose-light to-gold-light",
  },
  {
    id: 4,
    placeholder: "Memory 4",
    gradient: "from-gold-light to-lavender-light",
  },
];

export const MemoriesSection = () => {
  const [visiblePhotos, setVisiblePhotos] = useState<number[]>([]);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    memories.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisiblePhotos((prev) => [...prev, index]);
      }, index * 400);
      timers.push(timer);
    });

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <section className="py-12 px-4">
      <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-8">
        Our Beautiful Memories ✨
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
        {memories.map((memory, index) => (
          <div
            key={memory.id}
            className={`relative aspect-square rounded-2xl overflow-hidden shadow-soft transition-all duration-700 hover:shadow-glow hover:scale-105 cursor-pointer ${
              visiblePhotos.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${memory.gradient} flex items-center justify-center`}>
              <div className="text-center p-4">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-card/50 flex items-center justify-center">
                  <span className="text-2xl">📷</span>
                </div>
                <p className="font-body text-sm text-muted-foreground">
                  Add your photo here
                </p>
              </div>
            </div>
            
            <div className="absolute inset-0 border-2 border-rose/20 rounded-2xl pointer-events-none" />
          </div>
        ))}
      </div>
      
      <p className="text-center text-muted-foreground mt-6 font-body text-sm">
        Replace these placeholders with your favorite photos of Fiza 💕
      </p>
    </section>
  );
};
