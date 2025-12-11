import { Button } from "@/components/ui/button";
import { Camera, Music, Heart, Cake } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const navItems = [
    { id: "memories", label: "Memories", icon: Camera },
    { id: "song", label: "Song", icon: Music },
    { id: "message", label: "Message", icon: Heart },
    { id: "cake", label: "Cake", icon: Cake },
  ];

  return (
    <nav className="flex flex-wrap justify-center gap-3 md:gap-4">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <Button
            key={item.id}
            variant={activeSection === item.id ? "magical" : "soft"}
            size="lg"
            onClick={() => onSectionChange(item.id)}
            className="group"
          >
            <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>{item.label}</span>
          </Button>
        );
      })}
    </nav>
  );
};
