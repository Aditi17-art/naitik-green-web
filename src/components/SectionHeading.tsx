interface Props {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeading = ({ label, title, description, center = true }: Props) => (
  <div className={`mb-12 ${center ? "text-center" : ""}`}>
    {label && (
      <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
        {label}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
    {description && (
      <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
