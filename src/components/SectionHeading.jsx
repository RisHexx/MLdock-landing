import AnimateIn from "./AnimateIn";

export default function SectionHeading({ title, subtitle, align = "center" }) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <AnimateIn className={`mb-12 ${alignment}`}>
      <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </AnimateIn>
  );
}
