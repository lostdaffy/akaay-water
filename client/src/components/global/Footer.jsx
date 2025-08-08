import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="bg-[#34495e] text-white relative overflow-hidden border-t-2"
      style={{ borderColor: "#301757" }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(48, 23, 87, 0.05), transparent)",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block group">
              <img
                src="/images/akaay-logo.webp"
                alt="Akaay Water Logo"
                className="w-48"
              />
            </Link>

            <p className="mt-4 text-gray-300 leading-relaxed max-w-md">
              At{" "}
              <span className="font-semibold" style={{ color: "#301757" }}>
                Akaay Water
              </span>
              , hydration is the foundation of life and wellness. Pure,
              revitalizing water designed to support your active and modern
              lifestyle.
            </p>

            {/* Social Media Links */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-3">Follow Us</p>
              <div className="flex gap-3">
                <Link
                  to="https://www.instagram.com/akaaywater/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 bg-gray-600 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="Follow us on Instagram"
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#301757";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#4b5563";
                  }}
                >
                  <i className="ri-instagram-line text-white"></i>
                </Link>
                <Link
                  to="https://www.facebook.com/akaaywater"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 bg-gray-600 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="Follow us on Facebook"
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#301757";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#4b5563";
                  }}
                >
                  <i className="ri-facebook-fill text-white"></i>
                </Link>

                <Link
                  to="https://wa.me/917302799941"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 bg-gray-600 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="Chat with us on WhatsApp"
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#301757";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#4b5563";
                  }}
                >
                  <i className="ri-whatsapp-line text-white"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick Links" className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-500 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/home", label: "Home" },
                { to: "/product", label: "Product" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact Us" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="group flex items-center text-gray-300 transition-all duration-200"
                    onMouseEnter={(e) => {
                      e.target.style.color = "#301757";
                      const span = e.target.querySelector("span");
                      if (span) {
                        span.style.width = "8px";
                        span.style.marginRight = "8px";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#d1d5db";
                      const span = e.target.querySelector("span");
                      if (span) {
                        span.style.width = "0px";
                        span.style.marginRight = "0px";
                      }
                    }}
                  >
                    <span
                      className="h-px transition-all duration-200"
                      style={{
                        backgroundColor: "#301757",
                        width: "0px",
                        marginRight: "0px",
                      }}
                    ></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-500 pb-2">
              Get In Touch
            </h3>

            <div className="space-y-4 text-sm text-gray-300">
              {/* Address */}
              <div className="group">
                <div className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-5 h-5 mt-0.5"
                    style={{ color: "#301757" }}
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-full h-full"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white mb-1">Our Location</p>
                    <address className="not-italic leading-relaxed">
                      Himalayan Beverages, Khasra No 130, Bhagwanpur Road,{" "}
                      <br /> Village Khanpur, Bhagwanpur, <br /> Haridwar,
                      Uttarakhand - 247661
                    </address>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="group">
                <div className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-5 h-5 mt-0.5"
                    style={{ color: "#301757" }}
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-full h-full"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white mb-2">Email Us</p>
                    <Link
                      to="mailto:info@akaaywater.com"
                      className="block text-gray-300 transition-colors duration-200"
                      onMouseEnter={(e) => {
                        e.target.style.color = "#301757";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "#d1d5db";
                      }}
                    >
                      info@akaaywater.com
                    </Link>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group">
                <div className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-5 h-5 mt-0.5"
                    style={{ color: "#301757" }}
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-full h-full"
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white mb-2">Call Us</p>
                    <Link
                      to="tel:+917302799941"
                      className="block text-gray-300 transition-colors duration-200"
                      onMouseEnter={(e) => {
                        e.target.style.color = "#301757";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "#d1d5db";
                      }}
                    >
                      +91 73027 99941
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t" style={{ borderColor: "#301757" }}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2015-{new Date().getFullYear()} All Rights Reserved —
              <Link
                to="/"
                className="ml-1 hover:underline"
                style={{ color: "#301757" }}
              >
                Akaay Water
              </Link>
            </p>

            <div className="flex items-center gap-4 text-xs text-gray-400">
              <Link
                to="/privacy"
                className="hover:text-gray-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <span>•</span>
              <Link
                to="/terms"
                className="hover:text-gray-300 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
