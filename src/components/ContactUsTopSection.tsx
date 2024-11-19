import React from 'react'
import tabler_mail from "../assets/tabler_mail.svg"
import phone from "../assets/phone.svg"
import location from "../assets/location.svg"
import linkedin from "../assets/linkedin.svg"
import instagram from "../assets/instagram.svg"
import TwitterX from "../assets/TwitterX.svg"
import Facebook from "../assets/Facebook.svg"

export default function ContactUsTopSection() {

    
  return (
    <div className="bg-primary text-white py-12 px-6 lg:px-24 flex flex-wrap lg:flex-nowrap justify-between items-start">
        {/* Left Section */}
        <div className="max-w-md my-10">
          <h1 className="text-4xl font-bold leading-relaxed">
            Contact Us – <br />
            Your Feedback Shapes <br />
            Our <span className="text-secondary">Excellence</span>
          </h1>
          <div className="mt-20 space-y-4">
            <div className="flex items-center space-x-4">
            <img src={tabler_mail} alt="mail" />
              <span>andreaDesign@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <img src={phone} alt="phone" />
              <span>+34 123 456 789</span>
            </div>
            <div className="flex items-center space-x-4">
            <img src={location} alt="phone" />
              <span>123 Street 487 House</span>
            </div>
          </div>
          <div className="flex space-x-10 mt-16 text-2xl">
          <img src={linkedin} alt="phone" />
          <img src={instagram} alt="phone" />
          <img  src={TwitterX} alt="phone" />
          <img src={Facebook} alt="phone" />
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white text-gray-800 rounded-xl p-8 shadow-lg w-full max-w-lg mx-auto border-2 border-purple-800">
  {/* Header */}
  <h2 className="text-lg font-semibold text-orange-600 mb-6">I’m interested in:</h2>

  {/* Options Buttons */}
  <div className="flex flex-wrap gap-3 mb-8">
    {['Sales', 'Get Demo', 'User Support', 'Vendor Support', 'Other'].map((option, index) => (
      <button
        key={option}
        className={`px-6 py-2 rounded-full border text-sm ${
          index === 0
            ? 'bg-orange-500 text-white border-orange-500'
            : 'border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500'
        }`}
      >
        {option}
      </button>
    ))}
  </div>

  {/* Form */}
  <form className="space-y-6">
    {/* First Row */}
    <div className="grid grid-cols-2 gap-6">
      <div>
        <label className="block text-sm text-orange-600 mb-1">Your name</label>
        <input
          type="text"
          placeholder="Jhon Smith"
          className="border-b-2 border-orange-500 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-500 w-full"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Your email</label>
        <input
          type="email"
          placeholder="Jhon Smith"
          className="border-b-2 border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-500 w-full"
        />
      </div>
    </div>

    {/* Second Row */}
    <div className="grid grid-cols-2 gap-6">
      <div>
        <label className="block text-sm text-gray-400 mb-1">Phone</label>
        <input
          type="text"
          placeholder="email@gmail.com"
          className="border-b-2 border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-500 w-full"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Country</label>
        <input
          type="text"
          placeholder="Jhon Smith"
          className="border-b-2 border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-500 w-full"
        />
      </div>
    </div>

    {/* Link Input */}
    <div>
      <label className="block text-sm text-gray-400 mb-1">Link</label>
      <input
        type="text"
        placeholder="https"
        className="border-b-2 border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-500 w-full"
      />
    </div>

    {/* Textarea */}
    <div>
      <label className="block text-sm text-gray-400 mb-1">Your message</label>
      <textarea
        placeholder=""
        className="border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-500 w-full rounded p-3 h-24 resize-none"
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="bg-orange-500 text-white w-full py-3 rounded-full text-sm font-semibold hover:bg-orange-600 transition"
    >
      Send message
    </button>
  </form>
</div>

      </div>
  )
}
