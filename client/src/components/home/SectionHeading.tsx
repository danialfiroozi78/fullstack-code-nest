import type { LucideIcon } from "lucide-react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  icon: Icon,
}: SectionHeadingProps) {
  return (
    <div className="min-w-0">
      <p className="mb-3 text-xs font-bold text-primary">{eyebrow}</p>

      <div className="flex items-center gap-3">
        <Icon size={28} className="shrink-0 text-primary" />

        <h2 className="text-xl font-extrabold text-text-primary sm:text-2xl lg:text-3xl">
          {title}
        </h2>
      </div>

      <p className="mt-4 text-xs leading-7 text-text-muted sm:text-sm">
        {description}
      </p>
    </div>
  );
}
