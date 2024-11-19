import { AlignJustify } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-gradient-to-r from-white via-gray-700 to-gray-900 text-white p-3">
      <div className="flex items-center justify-between max-w-[1200px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/home">
            <img
              className="h-16 w-20 rounded-md object-cover mix-blend-multiply"
              src={logo}
              alt="Logo"
            />
          </Link>
        </div>

        {/* Title */}
        <h2 className="font-bold text-2xl hidden md:block">
          Bombay Facility Service
        </h2>
        <h2 className="font-bold text-2xl block md:hidden">BFS</h2>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-sm">
          <Link
            className={`font-semibold transition duration-300 ${
              isActive("/home")
                ? "text-yellow-300 underline"
                : "hover:text-yellow-300"
            }`}
            to="/home"
          >
            Home
          </Link>
          <Link
            className={`font-semibold transition duration-300 ${
              isActive("/services")
                ? "text-yellow-300 underline"
                : "hover:text-yellow-300"
            }`}
            to="/services"
          >
            Services
          </Link>
          <Link
            className={`font-semibold transition duration-300 ${
              isActive("/about")
                ? "text-yellow-300 underline"
                : "hover:text-yellow-300"
            }`}
            to="/about"
          >
            About
          </Link>
          <Link
            className={`font-semibold transition duration-300 ${
              isActive("/contact")
                ? "text-yellow-300 underline"
                : "hover:text-yellow-300"
            }`}
            to="/contact"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden relative">
          <button
            className="text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <AlignJustify size={24} />
          </button>
          {open && (
            <div className="flex flex-col gap-1 text-black absolute right-0 bg-slate-50 px-4 py-2 rounded-md shadow-md z-50">
              <Link
                className={`font-semibold transition duration-300 ${
                  isActive("/home") ? "text-gray-900" : "hover:text-gray-700"
                }`}
                to="/home"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <Link
                className={`font-semibold transition duration-300 ${
                  isActive("/services")
                    ? "text-gray-900"
                    : "hover:text-gray-700"
                }`}
                to="/services"
                onClick={() => setOpen(false)}
              >
                Services
              </Link>
              <Link
                className={`font-semibold transition duration-300 ${
                  isActive("/about") ? "text-gray-900" : "hover:text-gray-700"
                }`}
                to="/about"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
              <Link
                className={`font-semibold transition duration-300 ${
                  isActive("/contact") ? "text-gray-900" : "hover:text-gray-700"
                }`}
                to="/contact"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
