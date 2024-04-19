import Link from 'next/link';
import React, { useEffect, useState } from 'react';
const About = () => {
    const [marginLeft, setMarginLeft] = useState('-95px');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMarginLeft('-95px');
            } else {
                setMarginLeft('0px');
            }
        };

        handleResize(); // Call once initially to set the correct margin on page load

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div
            className="w-full h-auto flex justify-center items-center"

            key="about-section"
        >
            <div className="max-w-4xl px-4" key="about-section-first">
                <h1 className="text-4xl font-extrabold text-center pt-10 mb-1">About Us</h1>
                <div className='md:p-8' style={{ marginLeft, animation: 'slideIn 1s forwards' }}>
                    <div className="flex flex-col mx-auto" key="about-section-first-half">
                        <p className="text-xl font-medium md:text-base mb-4">
                            SmartSpend - Expense Manager - Simple, Intuitive, and Feature-Rich App for Managing Your Expenditure And Budget
                        </p>
                        <p className="text-xl font-medium md:text-base mb-4">
                            Introducing SmartSpend - Expense Manager, your ultimate solution for effortlessly managing your expenses and budget. Whether you&apos;re a meticulous planner or just looking to gain better control over your finances, SmartSpend is the go-to app for all your financial tracking needs.
                        </p>
                        <p className="text-xl font-medium md:text-base mb-4">
                            Gone are the days of struggling to keep tabs on where your money goes. With SmartSpend, you can easily record and categorize your personal and business expenses, ensuring that every penny is accounted for. From groceries to utility bills, and from travel expenses to entertainment costs, SmartSpend helps you stay on top of it all with its intuitive interface and robust features.
                        </p>
                        <p className="text-xl font-medium md:text-base mb-4">
                            But SmartSpend isn&apos;t just about tracking expenses—it&apos;s also a powerful financial planning tool. Set budgets for different categories, track your spending against these budgets, and receive insightful reports to help you make informed decisions about your finances. With SmartSpend, you&apos;ll never exceed your budget unknowingly again.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
