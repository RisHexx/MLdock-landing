import { Database } from "lucide-react";

const LINKS = [
  {
    label: "Personal GitHub",
    href: "https://github.com/rishexx",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rishabhhkanojiya/",
  },
  {
    label: "Product GitHub",
    href: "https://github.com/RisHexx/MLdock",
  },
  {
    label: "License",
    href: "https://github.com/RisHexx/MLdock/blob/main/LICENSE",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-primary">
            <Database className="w-5 h-5" />
            <span className="text-lg font-bold tracking-tight text-gray-900">
              MlDock
            </span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-6">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-gray-400">
            Made with <span className="text-red-500">&hearts;</span> for ML
            Engineers.
          </p>
        </div>
      </div>
    </footer>
  );
}
