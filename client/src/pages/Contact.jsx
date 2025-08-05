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
      details: ["+91 98765 43210", "+91 87654 32109"],
      description: "Available 24/7 for customer support",
    },
    {
      icon: "ri-mail-line",
      title: "Email Us",
      details: ["info@akaaywater.com", "support@akaaywater.com"],
      description: "We'll respond within 24 hours",
    },
    {
      icon: "ri-map-pin-line",
      title: "Visit Us",
      details: ["123 Business Park", "New Delhi, India 110001"],
      description: "Manufacturing & Corporate Office",
    },
    {
      icon: "ri-time-line",
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      description: "Sunday closed",
    },
  ];

  const offices = [
    {
      city: "New Delhi",
      type: "Head Office & Manufacturing",
      address: "123 Business Park, Sector 18, New Delhi - 110001",
      phone: "+91 98765 43210",
      email: "delhi@akaaywater.com",
    },
    {
      city: "Mumbai",
      type: "Regional Office",
      address: "456 Commercial Complex, Andheri East, Mumbai - 400069",
      phone: "+91 87654 32109",
      email: "mumbai@akaaywater.com",
    },
    {
      city: "Bangalore",
      type: "Distribution Center",
      address: "789 Industrial Area, Electronic City, Bangalore - 560100",
      phone: "+91 76543 21098",
      email: "bangalore@akaaywater.com",
    },
  ];

  const faqs = [
    {
      question: "What is your minimum order quantity?",
      answer:
        "Our minimum order quantity varies by location and product type. Please contact our sales team for specific details.",
    },
    {
      question: "Do you provide home delivery?",
      answer:
        "Yes, we offer home delivery services in major cities. Delivery charges may apply based on location and order value.",
    },
    {
      question: "What are your water quality certifications?",
      answer:
        "We are ISO 22000 certified, HACCP compliant, and BIS approved. All our products undergo rigorous quality testing.",
    },
    {
      question: "How can I become a distributor?",
      answer:
        "We welcome partnership inquiries. Please fill out the contact form or call our business development team for distributor opportunities.",
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

      {/* Office Locations - Enhanced Responsiveness */}
      <div className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Our <span className="text-[#301757]">Locations</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto px-4">
              Visit us at any of our offices across India for personalized
              service and support
            </p>
          </div>

          {/* Office Cards - Fully Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2"
              >
                <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#301757] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-building-line text-white text-lg sm:text-xl"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg xs:text-xl font-bold text-gray-900">
                      {office.city}
                    </h3>
                    <p className="text-[#301757] text-xs sm:text-sm font-semibold">
                      {office.type}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3">
                    <i className="ri-map-pin-line text-[#301757] text-lg mt-0.5 flex-shrink-0"></i>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {office.address}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-phone-line text-[#301757] text-lg mt-0.5 flex-shrink-0"></i>
                    <p className="text-gray-700 text-sm sm:text-base">
                      {office.phone}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-mail-line text-[#301757] text-lg mt-0.5 flex-shrink-0"></i>
                    <p className="text-gray-700 text-sm sm:text-base break-words">
                      {office.email}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section - Enhanced Responsiveness */}
      <div className="w-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Frequently Asked <span className="text-[#301757]">Questions</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 px-4">
              Quick answers to common questions about our products and services
            </p>
          </div>

          {/* FAQ List - Fully Responsive */}
          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-md sm:shadow-lg"
              >
                <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-start gap-3 leading-relaxed">
                  <span className="text-[#301757] flex-shrink-0">Q:</span>
                  <span className="flex-1">{faq.question}</span>
                </h3>
                <div className="text-gray-700 text-sm xs:text-base sm:text-base leading-relaxed flex items-start gap-3">
                  <span className="text-[#301757] font-bold flex-shrink-0">
                    A:
                  </span>
                  <span className="flex-1">{faq.answer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Get in Touch */}
      <GetInTouch />
    </>
  );
};

export default Contact;
