import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/product" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed shadow-lg w-full z-50 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 relative">
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/images/logo-akaay.png"
              className="h-8 w-auto sm:h-10 md:h-8"
              alt="Akaay Logo"
            />
          </div>

          {/* Center: Menu (Desktop) */}
          <div className="hidden lg:flex flex-1 justify-center space-x-8 xl:space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-800 hover:text-[#301757] transition-colors duration-200 text-sm xl:text-base font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#301757] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right: Contact Button + Hamburger */}
          <div className="flex items-center space-x-3">
            {/* Contact button - hidden on small screens */}
            <Link
              to="tel:+917302799941"
              className="hidden lg:inline-flex items-center gap-2 bg-[#301757] text-white text-sm font-medium px-5 py-2.5 rounded-full border-2 border-[#301757] hover:bg-white hover:text-[#301757] transition-all duration-300 transform hover:scale-105"
            >
              <i className="ri-phone-fill text-sm"></i>
              <span>Contact Us</span>
            </Link>

            {/* Hamburger - shown on small screens */}
            <button
              className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#301757] focus:ring-opacity-50 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-1 bg-white/95 backdrop-blur-sm border-t border-gray-100">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              className="block text-gray-800 hover:text-[#301757] hover:bg-gray-50 py-3 px-4 rounded-lg font-medium transition-all duration-200 transform hover:translate-x-1"
              onClick={() => setIsOpen(false)}
              style={{
                animationDelay: `${index * 50}ms`,
                animation: isOpen
                  ? "slideInFromLeft 0.3s ease-out forwards"
                  : "none",
              }}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Contact Button */}
          <Link
            to="/contact"
            className="block bg-[#301757] text-white text-center py-3 px-4 rounded-lg font-medium hover:bg-[#472185] transition-all duration-200 mt-4"
            onClick={() => setIsOpen(false)}
          >
            <i className="ri-phone-fill mr-2"></i>
            Contact Us
          </Link>
        </div>
      </div>

      {/* Add custom CSS for animation */}
      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
