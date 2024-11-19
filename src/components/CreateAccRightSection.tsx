import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateAccRightSection: React.FC = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });
  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      /* const err = await response.json()
      console.log(err)
      if (response?.status === 400) {
        toast.error(err?.message, {
            position: 'top-right',
            autoClose: 5000, 
          });
     }  */
    const data = await response.json();

    if (response?.status === 400) {
        toast.error(data?.message, {
            position: 'top-right',
            autoClose: 5000, 
          });
     } 

      if (!response.ok) {
        throw new Error('Failed to create account');
      }

      console.log('Account created successfully:', data);
    
      // Success toast
      toast.success('Account created successfully! Redirecting to Contact Us...', {
        position: 'top-right',
        autoClose: 5000, // auto close after 5 seconds
      });

      // Redirect to ContactUs page after successful account creation
      setTimeout(() => {
        navigate('/contact');
      }, 2000); // Wait 2 seconds before navigating to allow the toast to show

    } catch (err: any) {
      console.error('Error:', err);

      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 p-8 md:p-12">
      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <div className="mb-4 font-jakarta">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full mt-1 p-2 border rounded focus:ring-purple-500 focus:border-purple-500"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-4 font-jakarta">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full mt-1 p-2 border rounded focus:ring-purple-500 focus:border-purple-500"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* First Name Input */}
        <div className="mb-4 font-jakarta">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full mt-1 p-2 border rounded focus:ring-purple-500 focus:border-purple-500"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Last Name Input */}
        <div className="mb-4 font-jakarta">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full mt-1 p-2 border rounded focus:ring-purple-500 focus:border-purple-500"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Privacy Policy and Terms */}
        <div className="text-sm mb-6 font-poppins">
          By creating an account, you agree to the{' '}
          <a href="/privacy-policy" className="text-blue-500 underline">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="/terms" className="text-blue-500 underline">
            Terms of Use
          </a>
          .
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 font-jakarta"
          disabled={loading}
        >
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>

      </form>

      {/* Error Message */}
      {/* Sign In Link */}
      <p className="mt-4 text-center text-sm text-gray-600 font-poppins">
        Already have an account?{' '}
        <a href="/sign-in" className="text-blue-500 underline">
          Sign In
        </a>
      </p>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default CreateAccRightSection;
