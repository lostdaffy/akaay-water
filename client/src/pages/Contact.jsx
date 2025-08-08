import React, { useState } from "react";
import { Link } from "react-router-dom";
import GetInTouch from "../components/global/GetInTouch";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: "ri-phone-line",
      title: "Call Us",
      details: ["+91 73027 99941"],
      description: "Available 24/7 for customer support",
    },
    {
      icon: "ri-mail-line",
      title: "Email Us",
      details: ["info@akaaywater.com"],
      description: "We'll respond within 24 hours",
    },
    {
      icon: "ri-map-pin-line",
      title: "Visit Us",
      details: ["Himalayan Beverages, Khasra No 130, Bhagwanpur Road, Village Khanpur, Bhagwanpur, Haridwar, Uttarakhand - 247661"],
      description: "",
    },
    {
      icon: "ri-time-line",
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM"],
      description: "",
    },
  ];




  return (
    <>
      {/* Hero Section - Enhanced Responsiveness */}
      <div
        className="w-full h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[400px] relative overflow-hidden flex items-center pt-16 sm:pt-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(/images/56688.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left space-y-4 sm:space-y-6">
              <h1 className="text-gray-900 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold uppercase leading-tight tracking-wide">
                Contact <br />
                <span className="text-[#301757] block">Akaay Water</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Cards - Enhanced Responsiveness */}
      <div className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              How to <span className="text-[#301757]">Reach Us</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto px-4">
              Multiple ways to connect with our team for all your queries and
              requirements
            </p>
          </div>

          {/* Contact Info Grid - Fully Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#301757] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <i
                    className={`${info.icon} text-white text-xl sm:text-2xl`}
                  ></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {info.title}
                </h3>
                <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                  {info.details.map((detail, idx) => (
                    <p
                      key={idx}
                      className="text-[#301757] font-semibold text-sm sm:text-base break-words"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form & Map Section - Enhanced Responsiveness */}
      <div className="w-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.828211044117!2d77.99785367535469!3d30.28555647480305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092bc892dc339f%3A0x5c28296af812b2e1!2sC-9%2F66%2C%20Turner%20Rd%2C%20Morowala%2C%20Clement%20Town%2C%20Dehradun%2C%20Uttarakhand%20248002!5e1!3m2!1sen!2sin!4v1754422747869!5m2!1sen!2sin"
              width="100%"
              height="350"
              className="sm:h-[400px] md:h-[450px]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Akaay Water Location"
            />
          </div>
        </div>
      </div>

     
      {/* Get in Touch */}
      <GetInTouch />
    </>
  );
};

export default Contact;
