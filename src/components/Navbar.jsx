import { useState, useEffect } from "react";
import { navLinks } from "../constants";
import Button from "../layouts/Button";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi"; // Hamburger + Close icons

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner flex items-center justify-between w-full px-4 py-3">
        <a className="logo" href="#hero">
          <img src="/images/logo_trasparente.png" className="w-16" />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button title="Contattami" />
        </div>

        {/* Hamburger icon - visible on mobile only */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? (
              <HiX size={28} className="text-white" />
            ) : (
              <HiOutlineMenuAlt3 size={28} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black text-white z-50 px-6 py-4">
          <ul className="space-y-4">
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                <a
                  href={link}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-lg hover:text-yellow-100 transition-all"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Button title="Contattami" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
