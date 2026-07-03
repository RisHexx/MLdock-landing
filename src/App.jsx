import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Documentation from "./components/Documentation";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import DeploymentFlow from "./components/DeploymentFlow";
import ApiExample from "./components/ApiExample";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Workflow />
        <Features />
        <DeploymentFlow />
        <Documentation />
        <ApiExample />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
