import Link from 'next/link';

const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
            <form >
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="firstName">
                            First Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            id="firstName"
                            type="text"
                            name="firstName"

                            required
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="lastName">
                            Last Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            id="lastName"
                            type="text"
                            name="lastName"

                            required
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        id="email"
                        type="email"
                        name="email"

                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white h-20 resize-none"
                        id="message"
                        name="message"

                        required
                    ></textarea>
                </div>
                <button
                    className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="submit"
                >
                    Send Now
                </button>
            </form>
        </div>
    )
}

export default Contact;
