import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "header" | "footer";
};

export function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[1280px] px-[20px] md:px-[64px]",
        className
      )}
    >
      {children}
    </Tag>
  );
}

type SectionProps = ContainerProps & {
  border?: boolean;
};

export function Section({ children, className, border, as: Tag = "section" }: SectionProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[1280px] px-[20px] md:px-[64px] py-[96px]",
        border && "border-t border-outline-variant",
        className
      )}
    >
      {children}
    </Tag>
  );
}

type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  centered?: boolean;
};

export function SectionHeader({ label, title, description, className, centered }: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12 md:mb-16", className)}>
      {label && (
        <span className="mb-2 block text-[14px] font-semibold uppercase tracking-[0.05em] text-primary">
          {label}
        </span>
      )}
      <h2 className="text-[28px] font-semibold leading-[1.3] tracking-[-0.01em] text-on-surface md:text-[36px] md:leading-[1.2]">
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 max-w-2xl text-[18px] leading-[1.6] text-on-surface-variant", centered && "mx-auto")}>
          {description}
        </p>
      )}
    </div>
  );
}
