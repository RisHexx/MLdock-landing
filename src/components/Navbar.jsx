import { useState } from "react";
import { Database, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Workflow", href: "#workflow" },
  { label: "Features", href: "#features" },
  { label: "Deploy", href: "#deploy" },
  { label: "Docs", href: "#documentation" }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-primary">
          <Database className="w-6 h-6" />
          <span className="text-xl font-bold tracking-tight text-gray-900">
            MLdock
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="https://github.com/RisHexx/MLdock"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-hover rounded-lg transition-colors duration-200"
        >
          View on GitHub
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white px-6 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/RisHexx/MLdock"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-hover rounded-lg transition-colors duration-200"
          >
            View on GitHub
          </a>
        </div>
      )}
    </header>
  );
}
