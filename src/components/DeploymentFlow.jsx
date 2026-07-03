import AnimateIn from "./AnimateIn";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    step: 1,
    title: "Train your model",
    description:
      "Use any supported framework — scikit-learn, PyTorch, TensorFlow, or ONNX — and export your trained model.",
  },
  {
    step: 2,
    title: "Upload",
    items: ["Model file (.pkl, .pt, .h5, .onnx)", "metadata.json"],
  },
  {
    step: 3,
    title: "Use",
    items: ["REST endpoint", "API key", "Playground", "Monitoring"],
  },
];

export default function DeploymentFlow() {
  return (
    <section className="py-24" id="deploy">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeading
          title="Deploy in Three Steps"
          subtitle="From trained model to production API in minutes."
        />

        <AnimateIn>
          <div className="max-w-lg mx-auto">
            {STEPS.map((step, i) => (
              <div key={step.step} className="flex gap-4">
                {/* Timeline line + dot */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-semibold shrink-0">
                    {step.step}
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="w-px flex-1 bg-border my-2" />
                  )}
                </div>

                {/* Content */}
                <div className={`pb-10 ${i === STEPS.length - 1 ? "pb-0" : ""}`}>
                  <h3 className="text-base font-semibold text-gray-900 mt-1">
                    {step.title}
                  </h3>
                  {step.description && (
                    <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  )}
                  {step.items && (
                    <ul className="mt-2 space-y-1">
                      {step.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-gray-500 flex items-center gap-2"
                        >
                          <span className="w-1 h-1 bg-gray-400 rounded-full shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
