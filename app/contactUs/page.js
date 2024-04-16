import Link from 'next/link';

const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-16 pt-10">
            <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
            <div className="md:p-8 max-w-xl mx-auto">
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="firstName">
                                First Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none"
                                id="firstName"
                                type="text"
                                name="firstName"
                                required
                            />
                        </div>
                        <div>
                            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="lastName">
                                Last Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none"
                                id="lastName"
                                type="text"
                                name="lastName"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none"
                            id="email"
                            type="email"
                            name="email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none h-20 resize-none"
                            id="message"
                            name="message"
                            required
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
    )
}

export default Contact;
