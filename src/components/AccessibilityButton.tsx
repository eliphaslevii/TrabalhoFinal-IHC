import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface AccessibilityButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  active?: boolean;
}

const AccessibilityButton = ({ icon: Icon, label, onClick, active }: AccessibilityButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full py-5 px-5 rounded-xl font-bold text-lg",
        "flex items-center gap-4 transition-all duration-200",
        "border-2 focus:outline-none focus:ring-4 focus:ring-primary/50",
        active 
          ? "bg-primary text-primary-foreground border-primary" 
          : "bg-card text-card-foreground border-border hover:border-primary hover:bg-secondary"
      )}
    >
      <Icon className="w-7 h-7 flex-shrink-0" />
      <span className="text-left">{label}</span>
    </button>
  );
};

export default AccessibilityButton;
