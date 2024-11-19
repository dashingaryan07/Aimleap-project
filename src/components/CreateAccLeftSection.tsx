import React from 'react'
import google from "../assets/google.svg"
import mainPageVec from "../assets/mainPageVec.svg"

export default function CreateAccLeftSection() {
  return (
    <div className="flex-1 bg-gradient-to-br from-purple-500 to-pink-500 text-white p-8 md:p-12 flex flex-col justify-center items-center font-poppins">
            <p className="text-xs md:text-xl  mb-6 text-center ">
              Quote related to user
            </p>
            <div className="bg-white p-4 md:p-6 rounded-lg">
              <img
                src={mainPageVec}
                alt="Illustration"
                className="max-w-full"
              />
            </div>
            <div className="mt-6 text-sm">Trusted By</div>
            <div className="flex gap-4 mt-2">
              <img src={google} alt="Google" className="w-12 md:w-16" />
              <img src={google} alt="Google" className="w-12 md:w-16" />
              <img src={google} alt="Google" className="w-12 md:w-16" />
              <img src={google} alt="Google" className="w-12 md:w-16" />
            </div>
          </div>
  )
}
