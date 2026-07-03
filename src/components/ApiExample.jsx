import AnimateIn from "./AnimateIn";
import SectionHeading from "./SectionHeading";

const REQUEST = `{
  "year": 2020,
  "km_driven": 25000,
  "fuel": "Petrol",
  "transmission": "Manual"
}`;

const RESPONSE = `{
  "prediction": 742500.13
}`;

export default function ApiExample() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeading
          title="Example API"
          subtitle="Send a request, get a prediction."
        />

        <AnimateIn>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Request */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 text-xs font-semibold text-green-700 bg-green-50 border border-green-200 rounded">
                  POST
                </span>
                <span className="text-sm text-gray-500 font-mono">
                  /api/predict/car-price
                </span>
              </div>
              <div className="bg-gray-900 rounded-[10px] p-5 overflow-x-auto">
                <pre className="text-sm text-gray-100 font-mono leading-relaxed">
                  {REQUEST}
                </pre>
              </div>
            </div>

            {/* Response */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 text-xs font-semibold text-primary bg-blue-50 border border-blue-200 rounded">
                  200
                </span>
                <span className="text-sm text-gray-500 font-mono">
                  Response
                </span>
              </div>
              <div className="bg-gray-900 rounded-[10px] p-5 overflow-x-auto">
                <pre className="text-sm text-gray-100 font-mono leading-relaxed">
                  {RESPONSE}
                </pre>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-6 max-w-md mx-auto">
            MLDock automatically validates requests using the uploaded metadata
            schema.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
