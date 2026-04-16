import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/svg/logo.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const getMenuLinkClass = (path) => {
    const isActive = location.pathname === path;

    return `group relative inline-flex items-center pb-1 transition-all duration-300 ease-out hover:text-accent hover:font-semibold hover:-translate-y-[1px] ${
      isActive ? "text-accent font-semibold" : "text-inherit"
    }`;
  };
  const getMenuUnderlineClass = (path) =>
    `pointer-events-none absolute left-0 bottom-0 h-[2px] w-full origin-center rounded-full bg-accent transition-transform duration-300 ease-out ${
      location.pathname === path
        ? "scale-x-100"
        : "scale-x-0 group-hover:scale-x-100"
    }`;

  return (
    <header className="sticky top-0 z-40 bg-lightBlueBg px-6 py-8 shadow-md md:px-24">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className={getMenuLinkClass("/")}>
            Home
            <span className={getMenuUnderlineClass("/")} />
          </Link>
          <Link to="/diensten" className={getMenuLinkClass("/diensten")}>
            Diensten
            <span className={getMenuUnderlineClass("/diensten")} />
          </Link>
          <Link to="/projecten" className={getMenuLinkClass("/projecten")}>
            Projecten
            <span className={getMenuUnderlineClass("/projecten")} />
          </Link>
          <Link to="/over" className={getMenuLinkClass("/over")}>
            Over ons
            <span className={getMenuUnderlineClass("/over")} />
          </Link>
          <Link to="/contact" className={getMenuLinkClass("/contact")}>
            Contact
            <span className={getMenuUnderlineClass("/contact")} />
          </Link>
        </div>

        {/* Toggle */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(true)}>
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

          <button className="text-3xl" onClick={() => setIsOpen(false)}>
            ✕
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center justify-center flex-1 gap-8 text-xl z-10">
          <Link
            to="/"
            className={getMenuLinkClass("/")}
            onClick={() => setIsOpen(false)}
          >
            Home
            <span className={getMenuUnderlineClass("/")} />
          </Link>
          <Link
            to="/diensten"
            className={getMenuLinkClass("/diensten")}
            onClick={() => setIsOpen(false)}
          >
            Diensten
            <span className={getMenuUnderlineClass("/diensten")} />
          </Link>

          <Link
            to="/projecten"
            className={getMenuLinkClass("/projecten")}
            onClick={() => setIsOpen(false)}
          >
            Projecten
            <span className={getMenuUnderlineClass("/projecten")} />
          </Link>
          <Link
            to="/over"
            className={getMenuLinkClass("/over")}
            onClick={() => setIsOpen(false)}
          >
            Over ons
            <span className={getMenuUnderlineClass("/over")} />
          </Link>
          <Link
            to="/contact"
            className={getMenuLinkClass("/contact")}
            onClick={() => setIsOpen(false)}
          >
            Contact
            <span className={getMenuUnderlineClass("/contact")} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
