import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/svg/logo.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-lightBlueBg px-24 py-8 shadow-md">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/diensten">Diensten</Link>
          <Link to="/over">Over mij</Link>
          <Link to="/projecten">Projecten</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-10 bg-lightBlueBg flex flex-col transition-all duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Top bar (logo + close) */}
        <div className="flex items-center justify-between px-6 py-6">
          <img src={logo} alt="logo" className="h-10 w-auto" />

          <button
            className="text-3xl"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center justify-center flex-1 gap-8 text-xl z-10">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/diensten" onClick={() => setIsOpen(false)}>Diensten</Link>
          <Link to="/over" onClick={() => setIsOpen(false)}>Over mij</Link>
          <Link to="/projecten" onClick={() => setIsOpen(false)}>Projecten</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
