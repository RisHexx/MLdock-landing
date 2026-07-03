import { motion } from "framer-motion";
import {
  Zap,
  Layers,
  Shield,
  Brain,
  Activity,
  Play,
} from "lucide-react";
import AnimateIn from "./AnimateIn";
import SectionHeading from "./SectionHeading";

const FEATURES = [
  {
    icon: Zap,
    title: "Automated API Generation",
    description:
      "Upload a trained model and metadata schema to instantly generate a validated REST endpoint.",
  },
  {
    icon: Layers,
    title: "Multi-Framework Support",
    description:
      "Serve scikit-learn, PyTorch, TensorFlow/Keras, and ONNX models through a unified deployment workflow.",
  },
  {
    icon: Shield,
    title: "Secure Authentication",
    description:
      "JWT-protected dashboard with HMAC-hashed API keys for inference endpoints.",
  },
  {
    icon: Brain,
    title: "Intelligent Model Loading",
    description:
      "Lazy-load models into memory on first request to reduce startup time and optimize memory usage.",
  },
  {
    icon: Activity,
    title: "Observability",
    description:
      "Track latency, request status, and memory usage for every deployed model.",
  },
  {
    icon: Play,
    title: "Interactive Playground",
    description:
      "Validate requests and test predictions directly from the dashboard before integrating.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-surface">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeading
          title="Features"
          subtitle="Everything you need to deploy and manage machine learning models in production."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <AnimateIn key={feature.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-border rounded-[10px] p-6 shadow-sm hover:shadow-md transition-shadow duration-200 h-full"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
