import React, { useState } from "react";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    setFormStatus("Sending...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "", // <-- Add your access key here
          subject: "New Contact Form Submission from Akaay Water",
          from_name: data.fullName,
          email: data.email,
          phone: data.phone,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus("Message sent! We will contact you soon.");
        e.target.reset();
      } else {
        setFormStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setFormStatus("Something went wrong. Please try again later.");
    }
  };

  // Custom input focus handler
  const handleInputFocus = (e) => {
    e.target.style.borderColor = "#301757";
    e.target.style.boxShadow = "0 0 0 2px rgba(48, 23, 87, 0.2)";
  };

  const handleInputBlur = (e) => {
    e.target.style.borderColor = "#d1d5db";
    e.target.style.boxShadow = "none";
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
            GET IN{" "}
            <span className="text-[#301757] relative">
              TOUCH
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#301757] to-purple-400 rounded-full opacity-20"></div>
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to experience premium hydration? Our team is here to support
            you — reach out today.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#301757] rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                  <i className="ri-message-3-line" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#301757]">
                  Send us a Message
                </h3>
              </div>

              <div className="space-y-6">
                {/* Name and Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-gray-800 mb-3 text-sm font-semibold uppercase tracking-wide"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      placeholder="Your Name"
                      className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-4 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:bg-white hover:border-gray-300"
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-800 mb-3 text-sm font-semibold uppercase tracking-wide"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+91 0123456789"
                      className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-4 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:bg-white hover:border-gray-300"
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-800 mb-3 text-sm font-semibold uppercase tracking-wide"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@email.com"
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-4 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:bg-white hover:border-gray-300"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-800 mb-3 text-sm font-semibold uppercase tracking-wide"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    placeholder="Tell us about your requirements, bulk orders, partnership opportunities..."
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-4 text-gray-900 placeholder-gray-400 resize-none transition-all duration-200 focus:outline-none focus:bg-white hover:border-gray-300"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#301757] text-white font-bold py-4 px-6 rounded-xl  hover:scale-[1.02] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                >
                  <i className="ri-send-plane-2-line text-xl" />
                  Send Message
                </button>

                {/* Form Status Message */}
                {formStatus && (
                  <div className="mt-6">
                    <p
                      className={`text-center font-semibold py-3 px-4 rounded-lg ${
                        formStatus.includes("sent")
                          ? "text-green-700 bg-green-50 border border-green-200"
                          : formStatus.includes("Failed") ||
                            formStatus.includes("wrong")
                          ? "text-red-700 bg-red-50 border border-red-200"
                          : "text-[#301757] bg-purple-50 border border-purple-200"
                      }`}
                    >
                      {formStatus}
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Contact Info Aside */}
          <aside className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-gray-200 h-full">
              {/* Company Info */}
              <div className="flex flex-col items-center text-center mb-10">
                <div className="w-32 h-32">
                  <img
                    src="/images/logo-akaay.png"
                    alt="Akaay Water Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Experience pure, revitalizing hydration with{" "}
                  <span className="font-semibold text-[#301757]">
                    Akaay Water
                  </span>
                  . Our commitment to quality ensures excellence in every drop,
                  delivering a refreshing taste that complements your active
                  lifestyle.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-5 p-5 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-200">
                  <div className="w-14 h-14 bg-[#301757] rounded-full flex items-center justify-center text-white text-xl shadow-lg flex-shrink-0">
                    <i className="ri-phone-fill" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-sm uppercase tracking-wide mb-1">
                      Phone
                    </h4>
                    <a
                      href="tel:+917302799941"
                      className="text-[#301757] font-semibold text-lg transition-colors duration-200"
                    >
                      +91 73027 99941
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5 p-5 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-200">
                  <div className="w-14 h-14 bg-[#301757] rounded-full flex items-center justify-center text-white text-xl shadow-lg flex-shrink-0">
                    <i className="ri-mail-line" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-sm uppercase tracking-wide mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:contact@akaaywater.com"
                      className="text-[#301757] font-semibold text-lg transition-colors duration-200 break-all"
                    >
                      contact@akaaywater.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
