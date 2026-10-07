import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../logos/logo-horizontal.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Training", href: "#training" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img
            src={logo}
            alt="GCALEKA Projects and Training"
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-[#C9A227]"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-lg bg-[#0B1F33] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#C9A227] hover:text-[#0B1F33]"
          >
            Request a Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-[#0B1F33] md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-slate-700 hover:text-[#C9A227]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-lg bg-[#0B1F33] px-5 py-3 text-center font-semibold text-white"
            >
              Request a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;