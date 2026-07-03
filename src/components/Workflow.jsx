import { ArrowDown } from "lucide-react";
import AnimateIn from "./AnimateIn";
import SectionHeading from "./SectionHeading";

const FLOW_STEPS = [
  { label: "Train Model" },
  { label: "Upload Model + metadata.json" },
  {
    label: "MLDock",
    sub: ["Validation", "Authentication", "API Generation"],
  },
  { label: "REST API Endpoint" },
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Workflow"
          subtitle="A straightforward pipeline from trained model to API."
        />

        <AnimateIn>
          <div className="flex flex-col items-center gap-0 mb-16">
            {FLOW_STEPS.map((step, i) => (
              <div key={step.label} className="flex flex-col items-center">
                {i > 0 && (
                  <div className="flex flex-col items-center py-2">
                    <div className="w-px h-6 bg-gray-300" />
                    <ArrowDown className="w-4 h-4 text-gray-400 -mt-1" />
                  </div>
                )}

                <div
                  className={`border border-border rounded-[10px] px-6 py-3 bg-white shadow-sm text-sm font-medium text-gray-900 text-center ${
                    step.sub ? "min-w-65" : ""
                  }`}
                >
                  {step.label}
                  {step.sub && (
                    <div className="mt-3 pt-3 border-t border-border space-y-1.5">
                      {step.sub.map((s) => (
                        <div
                          key={s}
                          className="text-xs text-gray-500 font-normal"
                        >
                          {s}
                        </div>
                      ))}
                    </div>
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