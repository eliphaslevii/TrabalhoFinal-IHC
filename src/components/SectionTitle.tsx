import { LucideIcon } from "lucide-react";

interface SectionTitleProps {
  icon: LucideIcon;
  title: string;
}

const SectionTitle = ({ icon: Icon, title }: SectionTitleProps) => {
  return (
    <div className="flex items-center gap-3 mt-8 mb-4">
      <Icon className="w-6 h-6 text-primary" />
      <h2 className="text-lg font-black uppercase tracking-wide text-foreground">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
