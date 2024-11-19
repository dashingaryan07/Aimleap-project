import React from "react";
import Header from "../components/Header";
import usa from "../assets/usa.svg"
import canada from "../assets/canada.svg"
import india from "../assets/india.svg"
import australia from "../assets/australia.svg"
import ContactUsTopSection from "../components/ContactUsTopSection";

const ContactUs = () => {

const locationImages = [usa, canada,india,australia];
  
return (
    <div className="font-poppins">
      {/* Header */}
      <Header />

      {/* Top Section */}
     <ContactUsTopSection />

      {/* Locations Section */}
      <div className="text-center mb-12 mt-12">
        <p className="text-sm text-orange-500 font-semibold">Find us</p>
        <h2 className="text-3xl font-bold mt-3">Our Locations</h2>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-36 px-6 md:px-16">
        {locationImages.map((image, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={image}
              alt={`Location ${index + 1}`}
              className="w-full h-auto aspect-[3/4] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
