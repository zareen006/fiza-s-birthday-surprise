import { Heart } from "lucide-react";

export const MessageSection = () => {
  const message = [
    "Happy Birthday Fiza! 🎉",
    "From the very first day of school until now, you have been my best friend, my support, and my laughter in every moment.",
    "We have shared countless memories and grown together through all adventures.",
    "I am so grateful for your love, friendship, and endless kindness.",
    "May your birthday be filled with happiness, love, and sweet surprises.",
    "Thank you for being my person, my confidant, and my joy.",
    "Here's to many more memories together! 💖",
  ];

  return (
    <section className="py-12 px-4">
      <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-8">
        A Message From My Heart 💌
      </h2>
      
      <div className="max-w-2xl mx-auto">
        <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-soft border border-rose/10 bg-card-gradient">
          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-rose/30 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-rose/30 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-rose/30 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-rose/30 rounded-br-lg" />
          
          <div className="space-y-4 text-center">
            {message.map((line, index) => (
              <p
                key={index}
                className={`font-body leading-relaxed animate-fade-in-up ${
                  index === 0
                    ? "font-display text-2xl md:text-3xl text-foreground font-semibold"
                    : "text-base md:text-lg text-muted-foreground"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {line}
              </p>
            ))}
          </div>
          
          <div className="mt-8 flex justify-center">
            <Heart className="w-8 h-8 text-rose animate-heart-beat" fill="currentColor" />
          </div>
        </div>
      </div>
    </section>
  );
};
