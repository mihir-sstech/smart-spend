import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Set headers
      const headers = {
        API_KEY: "YS0HWEKQJG",
        API_PASSWORD: "QJGYSAHWEK",
        "Content-Type": "application/json",
      };

      // Send POST request with headers
      console.log("formData: ", formData);
      await axios.post(
        "http://lsdemoserver.com/single_expense/app_api/frontrequest",
        formData,
        { headers }
      );

      toast.success("Message sent successfully!");
      // Clear form data
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        message: "",
      });

      // Show success message
    } catch (error) {
      console.error("Error sending message:", error);
      // Show error message
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 pt-10 ">
      <ToastContainer />
      <h1 className="text-4xl font-extrabold text-center mb-8">Contact Us</h1>
      <div className="md:p-8 max-w-xl mx-auto">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block tracking-wide text-xs font-bold mb-2"
                htmlFor="first_name"
              >
                First Name*
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none"
                id="first_name"
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block tracking-wide text-xs font-bold mb-2"
                htmlFor="last_name"
              >
                Last Name*
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none"
                id="last_name"
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label
              className="block tracking-wide text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email*
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              className="block  tracking-wide text-xs font-bold mb-2"
              htmlFor="message"
            >
              Message*
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none h-20 resize-none"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex justify-center mt-4" key="help-section-first-16">
            <button
              className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              style={{ fontSize: "1rem" }}
              type="submit"
            >
              Send Now
            </button>
          </div>

          {/* <button
                        className="mx-auto block pt-10 flex justify-center items-center bg-blue-500 hover:bg-blue-700"
                        style={{
                            //backgroundColor: ' #4299e1',
                            color: 'white',
                            fontWeight: 'bold',
                            padding: '0.5rem 1rem',
                            border: 'none',
                            borderRadius: '0.5rem',
                            cursor: 'pointer',
                            width: '340px',
                            height: '33px',
                            fontSize: '1.25rem',
                        }}
                        type="submit"
                    >
                        Send Now
                    </button> */}
        </form>
      </div>
    </div>
  );
};

export default Contact;
