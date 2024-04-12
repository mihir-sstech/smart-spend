'use client'
import About from './../about/page';
import Feature from './../features/page';
import Screenshots from './../screenshots/page';
import HelpCenter from './../helpCenter/page';
import Dowonloads from './../dowonloads/page';
import ContactUs from './../contactUs/page';
import Social from './../social/page';
import Image from 'next/image';

const Header = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='bg-white' key="hom-section-first-11">
            <header className="bg-slate-100 text-black" key="header12">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4" key="container">
                    <div className="flex items-center mb-4 md:mb-0" key="logo">
                        <Image src="/Smar-SpendLogo-.svg" alt="Icon" className="mr-2" width={80} height={80} />
                        <Image src="/Rectangle.png" alt="Icon" className="mr-2" width={230} height={54} />
                    </div>
                    <nav className="flex flex-col md:flex-row" key="nav">
                        <button className="mx-2 mb-2 md:mb-0 font-body font-semibold" onClick={() => scrollToSection('about')} key="about-button">About</button>
                        <button className="mx-2 mb-2 md:mb-0 font-medium font-semibold" onClick={() => scrollToSection('features')} key="features-button">Features</button>
                        <button className="mx-2 mb-2 md:mb-0 font-body font-semibold" onClick={() => scrollToSection('screenshots')} key="screenshots-button">Screenshots</button>
                        <button className="mx-2 mb-2 md:mb-0 font-body font-semibold" onClick={() => scrollToSection('heltcenter')} key="policy-button">Privacy Policy</button>
                    </nav>
                </div>
            </header>

            <div className="container flex flex-col md:flex-row justify-center items-center  mx-auto" key="content">
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

            <div id="about" className="container mx-auto" key="about-section">
                <About key="about-content" />
            </div>
            <div id="features" className="container mx-auto" key="features-section">
                <Feature key="features-content" />
            </div>
            <div id="screenshots" className="container mx-auto" key="screenshots-section">
                <Screenshots key="screenshots-content" />
            </div>
            <div id="heltcenter" className="container mx-auto" key="helpcenter-section">
                <HelpCenter key="helpcenter-content" />
                <Dowonloads key="downloads-content" />
                <ContactUs key="contact-content" />
            </div>
            <div className="container mx-auto" key="social-section">
                <Social key="social-content" />
            </div>
        </div>
    );
};

export default Header;
