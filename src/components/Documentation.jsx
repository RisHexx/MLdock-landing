import AnimateIn from "./AnimateIn";
import SectionHeading from "./SectionHeading";

const SAD_CAT = String.raw` /\_/\\
( o.o )
 > ^ <`;

export default function Documentation() {
  return (
    <section id="documentation" className="py-24 bg-surface/60">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Documentation"
          subtitle="Documnetation is still being prepared."
        />

        <AnimateIn delay={0.05}>
          <div className="max-w-2xl mx-auto rounded-2xl border border-border bg-white shadow-sm p-8 text-center">
            <p className="text-sm text-gray-500 leading-relaxed">
              The full documentation is still being put together. Thanks for your patience!
            </p>

            <pre
              className="mt-8 inline-block text-left text-sm leading-4 text-gray-700 bg-surface border border-border rounded-xl px-6 py-5"
              aria-label="Sad cat pixel art"
            >
              {SAD_CAT}
            </pre>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}