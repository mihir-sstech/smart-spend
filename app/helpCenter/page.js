import Link from 'next/link';
import Image from 'next/image';
const About = () => {
    return (

        <div className="container mx-auto px-4 mt-10 pt-10" key="help-section-first-12">
            <h1 className="text-3xl font-extrabold mb-4 text-center">Help Center</h1>

            <div className="container flex flex-col md:flex-row justify-center items-center md:p-8" key="help-section-first-13">
                <div className="p-10 mr-4">
                    <Image src="/customer-help-center.png" alt="Image" width={551} height={521} />
                </div>
                <div className="mt-8 md:mt-0" key="help-section-first-14">
                    <h2 className="text-lg font-extrabold">
                        <span className="font-bold text-[#E53A36] text-2xl">S</span>
                        <span className="font-bold text-2xl">mart</span>
                        <span className="font-bold text-[#E53A36] text-2xl">S</span>
                        <span className="font-bold  text-2xl">pend Help Center</span>
                    </h2>
                    <p className="text-md mt-2 font-medium md:mt-4 max-w-sm " key="help-section-first-15">Regular updates and user manuals are readily available for your convenience.</p>
                    <div className="flex mt-4" key="help-section-first-16">
                        <button
                            className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="submit"
                        >
                            HELP CENTER
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;
