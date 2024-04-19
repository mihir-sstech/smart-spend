'use client'
import { About } from './about';
import { Feature } from './features';
import { Screenshots } from './screenshots';
// import HelpCenter from './../helpCenter/page';
import { Download } from './dowonloads';
import { Contact } from './contactUs';
import { Social } from './social';
import { Image } from 'next/image';

const Header = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='' key="hom-section-first-11" >
            <header className="bg-slate-100 text-black" key="header12">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4" key="container">
                    <div className="flex items-center mb-4 md:mb-0" key="logo">
                        <Image src="/Smar-SpendLogo-.svg" alt="Icon" className="mr-2" width={80} height={80} />
                        <Image src="/Rectangle.png" alt="Icon" className="mr-2" width={230} height={54} />
                    </div>
                    <nav className="flex flex-col md:flex-row" key="nav">
                        <button className="mx-2 mb-2 md:mb-0 font-medium font-semibold" onClick={() => scrollToSection('features')} key="features-button">Features</button>
                        <button className="mx-2 mb-2 md:mb-0 font-body font-semibold" onClick={() => scrollToSection('screenshots')} key="screenshots-button">Screenshots</button>
                        <a href="https://sstechstudio.com/single_expense/pages/index/privacy-policy" target="_blank" rel="noopener noreferrer" className="mx-2 mb-2 md:mb-0">
                            <button className="font-body font-semibold">Privacy Policy</button>
                        </a>
                        <button className="mx-2 mb-2 md:mb-0 font-body font-semibold" onClick={() => scrollToSection('contact-us')} key="contact-us">Contact Us</button>
                    </nav>

                </div >
            </header >

            <div className="bg-slate-100 max-w-full container flex flex-col md:flex-row justify-center items-center  mx-auto" key="content">
                <div className="p-10 mr-4" key="image">
                    <Image src="/homeone.png" alt="Image" width={551} height={521} />
                </div>
                <div className="mt-8 md:mt-0" key="text">
                    <h2 className="text-lg font-extrabold" key="title">
                        <span className="font-extrabold text-[#E53A36] text-4xl">Track.</span>
                        <span className="font-extrabold text-[#1380E7] text-4xl">Budget.</span>
                        <span className="font-extrabold  text-[#009852] text-4xl">Thrive</span>
                    </h2>
                    <p className="text-xl mt-2 md:mt-4 max-w-md font-medium " key="description">Smartspend Expense Manager: Your Daily Companion for Financial Success.</p>
                    <div className="flex mt-4" key="store-buttons">
                        <div className="inline-block mr-4" key="download-section-first-6">
                            <a href="https://play.google.com/store/apps/details?id=sstech.com.singleexpense" target="_blank" rel="noopener noreferrer">
                                <Image src="/Google-Play-Store.png" width={250} height={73} alt="Google Play Button" className="h-11 w-auto" style={{ width: "150px" }} />
                            </a>
                        </div>
                        <div className="inline-block" key="download-section-first-7">
                            <a href="https://apps.apple.com/us/app/wallet-income-expense-tracker/id1445995357" target="_blank" rel="noopener noreferrer">
                                <Image src="/Apple-Play-Store.png" width={250} height={73} alt="App Store Button" className="h-11 w-auto" style={{ width: "150px" }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="about" className="container max-w-full mx-auto" key="about-section">
                <About key="about-content" />
            </div>
            <div id="features" className="bg-slate-100 container max-w-full  mx-auto" key="features-section">
                <Feature key="features-content" />
            </div>
            <div id="screenshots" className=" container max-w-full mx-auto" key="screenshots-section">
                <Screenshots key="screenshots-content" />
            </div>
            <div id="heltcenter" className="bg-slate-100 container max-w-full mx-auto" key="helpcenter-section">
                <div className="container mx-auto px-4 mt-10 pt-10" key="help-section-first-12">
                    <h1 className="text-3xl font-extrabold mb-4 text-center">Help Center</h1>

                    <div className="container flex flex-col md:flex-row justify-center items-center md:p-8" key="help-section-first-13">
                        <div className="p-10 mr-4">
                            <Image src="/customer-help-center.png" alt="Image" width={551} height={521} />
                        </div>
                        <div className="mt-8 md:mt-0" key="help-section-first-14">
                            <h2 className="text-lg font-extrabold">
                                <span className="font-bold text-[#E53A36] text-4xl">S</span>
                                <span className="font-bold text-4xl">mart</span>
                                <span className="font-bold text-[#E53A36] text-4xl">S</span>
                                <span className="font-bold  text-4xl">pend Help Center</span>
                            </h2>
                            <p className="text-md mt-2 font-medium md:mt-4 max-w-sm " key="help-section-first-15">Regular updates and user manuals are readily available for your convenience.</p>
                            <div className="flex mt-4" key="help-section-first-16">
                                <button
                                    className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    type="submit"
                                    onClick={() => scrollToSection('contact-us')} key="contact-us"
                                >
                                    HELP CENTER
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Download key="downloads-content" />
            </div>
            <div id="contact-us" className="bg-slate-100 container max-w-full mx-auto" key="helpcenter-section">
                <Contact key="contactus" />
            </div>
            <div className="container max-w-full mx-auto" key="social-section">
                <Social key="social-content" />
            </div>
        </div >
    );
};

export default Header;

