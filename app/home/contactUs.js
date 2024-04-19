import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Set headers
            const headers = {
                'API_KEY': 'YS0HWEKQJG',
                'API_PASSWORD': 'QJGYSAHWEK',
                'Content-Type': 'application/json'
            };

            // Send POST request with headers
            console.log('formData: ', formData);
            await axios.post('http://lsdemoserver.com/single_expense/app_api/frontrequest', formData, { headers });

            toast.success('Message sent successfully!');
            // Clear form data
            setFormData({
                first_name: '',
                last_name: '',
                email: '',
                message: ''
            });

            // Show success message
        } catch (error) {
            console.error('Error sending message:', error);
            // Show error message
            toast.error('Failed to send message. Please try again later.');
        }
    };

    return (
        <div className="container mx-auto px-4 py-16 pt-10">
            <ToastContainer />
            <h1 className="text-4xl font-extrabold text-center mb-8">Contact Us</h1>
            <div className="md:p-8 max-w-xl mx-auto">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block tracking-wide text-xs font-bold mb-2" htmlFor="first_name">
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
                            <label className="block tracking-wide text-xs font-bold mb-2" htmlFor="last_name">
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
                        <label className="block tracking-wide text-xs font-bold mb-2" htmlFor="email">
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
                        <label className="block  tracking-wide text-xs font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none h-20 resize-none"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button
                        className="text-center mx-auto block pt-10"
                        style={{
                            backgroundColor: '#2098C7',
                            color: 'white',
                            fontWeight: 'bold',
                            padding: '0.5rem 1rem',
                            border: 'none',
                            borderRadius: '1.25rem',
                            cursor: 'pointer',
                            width: '350px',
                            height: '42px'
                        }}
                        type="submit"
                    >
                        Send Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
