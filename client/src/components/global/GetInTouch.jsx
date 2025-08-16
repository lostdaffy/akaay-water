import React, { useState } from "react";
import { motion } from "framer-motion";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Animation variants
  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // FINAL handleSubmit: Only status code is checked!
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formElement = e.target;
      const formDataToSend = new FormData(formElement);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok || response.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: "ri-phone-line", title: "Call Us", info: "+91 7819846375, +91 7055130555", subInfo: "Mon-Sat 9AM-6PM" },
    { icon: "ri-mail-line", title: "Email Us", info: "info@akaaywater.com", subInfo: "24/7 Support Available" },
    { icon: "ri-map-pin-line", title: "Visit Us", info: "Himalayan Beverages, Khasra No 130, Bhagwanpur Road, Village Khanpur, Bhagwanpur,", subInfo: "Haridwar, Uttarakhand - 247661" }
  ];

  return (
    <div className="bg-white py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 bg-[#3c096c] rounded-full opacity-5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-24 h-24 bg-cyan-400 rounded-full opacity-5 blur-2xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.05, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mx-auto pb-12 md:pb-16 lg:pb-20 max-w-4xl"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants}>
          <motion.h4 className="uppercase text-[#3c096c] text-sm sm:text-base lg:text-xl font-semibold mb-3 md:mb-4" variants={fadeInUp}>Contact Us</motion.h4>
          <motion.h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold capitalize mb-4 md:mb-6 text-gray-900" variants={fadeInUp}>
            Get In Touch With Us
          </motion.h1>
          <motion.p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto" variants={fadeInUp}>
            Have questions about our premium mineral water products? We're here to help with orders, deliveries, and any inquiries.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div className="order-2 lg:order-1" initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} variants={slideInLeft}>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 lg:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Send us a Message</h3>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <i className="ri-check-circle-line text-green-500 text-xl mr-3"></i>
                    <div>
                      <p className="text-green-800 font-semibold">Message Sent Successfully!</p>
                      <p className="text-green-600 text-sm">We'll get back to you soon.</p>
                    </div>
                  </div>
                </motion.div>
              )}
              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <i className="ri-error-warning-line text-red-500 text-xl mr-3"></i>
                    <div>
                      <p className="text-red-800 font-semibold">Failed to Send Message</p>
                      <p className="text-red-600 text-sm">Please try again or contact us directly.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="access_key" value="9f4805cc-31e8-4d43-9d4c-aae7002229a1" />
                <input type="hidden" name="subject" value="New Contact Form Submission from Akaay Water Website" />
                {/* <input type="hidden" name="redirect" value="https://web3forms.com/success" /> */}
                {/* DO NOT put redirect input above! */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3c096c] focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Your full name"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3c096c] focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="+91 98765 43210"
                    />
                  </motion.div>
                </div>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3c096c] focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3c096c] focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tell us how we can help you..."
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#3c096c] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? {
                    scale: 1.02,
                    boxShadow: "0 10px 25px rgba(60, 9, 108, 0.3)",
                    backgroundColor: "#240046"
                  } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <motion.span
                        className="text-xl"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        →
                      </motion.span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
          {/* Contact Information */}
          <motion.div className="order-1 lg:order-2 space-y-8" initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} variants={slideInRight}>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Reach Out to Us</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                We're committed to providing exceptional service and the finest mineral water. 
                Contact us for orders, inquiries, or just to say hello!
              </p>
            </div>
            <motion.div className="space-y-6" variants={containerVariants}>
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.02,
                    y: -3,
                    boxShadow: "0 15px 35px rgba(60, 9, 108, 0.1)"
                  }}
                >
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 bg-[#3c096c] rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <i className={`${contact.icon} text-white text-lg`}></i>
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{contact.title}</h4>
                    <p className="text-[#3c096c] font-semibold mb-1">{contact.info}</p>
                    <p className="text-sm text-gray-600">{contact.subInfo}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
