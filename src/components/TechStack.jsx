import AnimateIn from "./AnimateIn";
import SectionHeading from "./SectionHeading";

const CATEGORIES = [
  {
    label: "Backend",
    items: ["FastAPI", "SQLAlchemy", "PostgreSQL"],
  },
  {
    label: "Frontend",
    items: ["React", "Redux Toolkit", "Tailwind CSS", "Vite"],
  },
  {
    label: "Machine Learning",
    items: ["scikit-learn", "PyTorch", "TensorFlow", "ONNX Runtime"],
  },
  {
    label: "Security",
    items: ["JWT", "bcrypt", "python-jose", "Docker"],
  },
];

export default function TechStack() {
  return (
    <section className="py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeading
          title="Tech Stack"
          subtitle="Built with modern, production-grade technologies."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {CATEGORIES.map((cat, i) => (
            <AnimateIn key={cat.label} delay={i * 0.06}>
              <div className="bg-white border border-border rounded-[10px] p-5 shadow-sm h-full">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  {cat.label}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-xs font-medium text-gray-600 bg-surface border border-border rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
