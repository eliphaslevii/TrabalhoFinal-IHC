import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ActionButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  variant: "destructive" | "warning" | "primary" | "success" | "info";
  className?: string;
}

const variantStyles = {
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-destructive/30",
  warning: "bg-warning text-warning-foreground hover:bg-warning/90 shadow-warning/30",
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/30",
  success: "bg-success text-success-foreground hover:bg-success/90 shadow-success/30",
  info: "bg-info text-info-foreground hover:bg-info/90 shadow-info/30",
};

const ActionButton = ({ icon: Icon, label, onClick, variant, className }: ActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full py-6 px-6 rounded-2xl font-bold text-xl",
        "flex items-center gap-4 transition-all duration-200",
        "shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
        "focus:outline-none focus:ring-4 focus:ring-foreground/50",
        variantStyles[variant],
        className
      )}
    >
      <Icon className="w-8 h-8 flex-shrink-0" />
      <span className="text-left leading-tight">{label}</span>
    </button>
  );
};

export default ActionButton;
