import React from "react";
import Header from "../components/Header";
import CreateAccLeftSection from "../components/CreateAccLeftSection";
import CreateAccRightSection from "../components/CreateAccRightSection";

const CreateAccount = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row items-center justify-center flex-grow px-4">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl bg-white rounded-lg shadow-md overflow-hidden">
          {/* Left Section */}
          <CreateAccLeftSection />

          {/* Right Section */}
          <CreateAccRightSection />
        </div>
      </main>
    </div>
  );
};

export default CreateAccount;
