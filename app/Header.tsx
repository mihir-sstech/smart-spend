import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}


const scrollToSection = (sectionId: any) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  return (
    <div>
      <header className="bg-#FFFFFF text-black lg:px-[40px] xl:px-[165px] 2xl:px-[270px]" key="header12" style={{ backgroundColor: 'white' }}>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center bg-#FFFFFF" key="container">
          <div className="flex items-center" key="logo">
            <Link href="#">
              <Image src="/smart-spend/Smart-Expesne--01.svg" alt="Icon" width={280} height={80} />
            </Link>
          </div>
          <nav className="flex flex-col md:flex-row" key="nav">
            <button className="mx-4 mb-2 md:mb-0 font-body font-semibold" onClick={() => scrollToSection('about')} key="about-button">About</button>
            <button className="mx-4 mb-2 md:mb-0 font-medium font-semibold" onClick={() => scrollToSection('features')} key="features-button">Features</button>
            <button className="mx-4 mb-2 md:mb-0 font-body font-semibold" onClick={() => scrollToSection('screenshots')} key="screenshots-button">Screenshots</button>
            <Link href="/smart-spend/privacy-policy" className="mx-4 mb-2 md:mb-0 font-body font-semibold">
              Privacy Policy
            </Link>
            <button className="mx-0 mb-2 md:mb-0 font-body font-semibold" onClick={() => scrollToSection('contact-us')} key="contact-us"></button>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
