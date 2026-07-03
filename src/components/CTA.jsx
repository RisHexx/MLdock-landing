import { ArrowRight, ExternalLink } from "lucide-react";
import AnimateIn from "./AnimateIn";

export default function CTA() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
              Build and deploy ML models on your own infrastructure.
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed">
              MLDock is fully open source. Clone it, contribute, or deploy it
              yourself.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="https://github.com/RisHexx/MLdock"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-primary hover:bg-primary-hover rounded-lg transition-colors duration-200"
              >
                View on GitHub
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/rishabhhkanojiya/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-border hover:border-gray-300 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
