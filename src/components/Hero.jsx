import { ArrowRight, BookOpen } from "lucide-react";
import AnimateIn from "./AnimateIn";

const FRAMEWORKS = ["scikit-learn", "PyTorch", "TensorFlow/Keras", "ONNX"];

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-30 pb-24">
      <AnimateIn>
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl lg:text-[2.75rem] font-bold tracking-tight text-gray-900 leading-tight">
            Self-host your ML models
          </h1>

          <p className="mt-6 text-base text-gray-500 leading-relaxed max-w-lg mx-auto">
            MLDock is an open-source model serving platform that lets ML
            engineers deploy trained models with automatic API generation,
            authentication, observability, and multi-framework support — all on
            infrastructure they control.
          </p>

          {/* Buttons */}
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
              href="#documentation"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-border hover:border-gray-300 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            >
              <BookOpen className="w-4 h-4" />
              Documentation
            </a>
          </div>

          {/* Framework badges */}
          <div className="mt-8">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
              Supports
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {FRAMEWORKS.map((fw) => (
                <span
                  key={fw}
                  className="px-3 py-1 text-xs font-medium text-gray-600 bg-surface border border-border rounded-md"
                >
                  {fw}
                </span>
              ))}
            </div>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
