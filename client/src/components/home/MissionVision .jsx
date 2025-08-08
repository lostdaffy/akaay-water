import React from "react";
import { Link } from "react-router-dom";

const MissionVision = () => {
  return (
    <>
      {/* Vision Section */}
      <section id="vision" className="mb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           
             {/* Right Content - Image */}
            <div className="flex justify-center items-center">
              <div className="relative">
                <img
                  src="images/545454.jpg"
                  alt="Akaay Water Vision - Pure Water for All"
                  className="rounded-3xl shadow-2xl max-w-lg h-auto hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
           
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Our <span style={{ color: "#301757" }}>Vision</span>
                </h2>

                <p className="text-xl text-gray-700 leading-relaxed">
                  To become the leading provider of premium mineral water
                  globally - delivering pure, healthy, and naturally enriched
                  water that enhances well-being while protecting our planet for
                  future generations.
                </p>
              </div>

              {/* Vision Values */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                <div className="text-center group">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: "rgba(57, 154, 140, 0.1)" }}
                  >
                    <i
                      className="ri-drop-line text-2xl"
                      style={{ color: "#301757" }}
                    ></i>
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2">Pure</h5>
                  <p className="text-gray-600 text-sm">
                    100% natural mineral water from pristine sources
                  </p>
                </div>

                <div className="text-center group">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: "rgba(57, 154, 140, 0.1)" }}
                  >
                    <i
                      className="ri-leaf-line text-2xl"
                      style={{ color: "#301757" }}
                    ></i>
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2">Sustainable</h5>
                  <p className="text-gray-600 text-sm">
                    Eco-friendly practices protecting our environment
                  </p>
                </div>

                <div className="text-center group">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: "rgba(57, 154, 140, 0.1)" }}
                  >
                    <i
                      className="ri-heart-pulse-line text-2xl"
                      style={{ color: "#301757" }}
                    ></i>
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2">Healthy</h5>
                  <p className="text-gray-600 text-sm">
                    Rich in essential minerals for optimal wellness
                  </p>
                </div>
              </div>
            </div>

          
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-20 text-center">
            <div
              className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 rounded-2xl shadow-lg"
              style={{ backgroundColor: "rgba(57, 154, 140, 0.05)" }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: "#301757" }}
                >
                  <i className="ri-water-flash-line text-white text-2xl"></i>
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-900 text-lg">
                    Experience Pure Hydration
                  </h4>
                  <p className="text-gray-600">
                    Discover the difference of naturally enriched mineral water
                  </p>
                </div>
              </div>

              <Link
                to="/products"
                className="px-8 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{ backgroundColor: "#301757" }}
              >
                <i className="ri-arrow-right-line mr-2"></i>
                Explore Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionVision;
