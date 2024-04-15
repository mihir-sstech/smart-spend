import Link from 'next/link';

const About = () => {
    return (
        <div className="w-full md:w-981 h-auto md:h-477" key="about-section" >
            <div className="container w-full " key="about-section-first">
                <h1 className="text-3xl font-bold text-center mb-4 pt-4">About Us</h1>
                <div className='md:p-11' key="about-section-first-half">
                    <div className="container mx-auto">
                        <div className="flex mx-auto px-4" key="about-section-first-half1">
                            <p className="text-xl  font-medium  md:text-base mb-4">
                                SmartSpend - Expense Manager - Simple, Intuitive, and Feature-Rich App for Managing Your Expenditure And Budget
                            </p>
                        </div>
                        <div className="flex mx-auto px-4" key="about-section-first-half2">
                            <p className="text-xl font-medium md:text-base mb-4">
                                Introducing SmartSpend - Expense Manager, your ultimate solution for effortlessly managing your expenses and budget. Whether you&apos;re a meticulous planner or just looking to gain better control over your finances, SmartSpend is the go-to app for all your financial tracking needs.
                            </p>
                        </div>
                        <div className="flex mx-auto px-4" key="about-section-first-half3">
                            <p className="text-xl font-medium md:text-base mb-4">
                                Gone are the days of struggling to keep tabs on where your money goes. With SmartSpend, you can easily record and categorize your personal and business expenses, ensuring that every penny is accounted for. From groceries to utility bills, and from travel expenses to entertainment costs, SmartSpend helps you stay on top of it all with its intuitive interface and robust features.
                            </p>
                        </div>
                        <div className="mx-auto px-4" key="about-section-first-half4">
                            <p className="text-xl font-medium md:text-base mb-4">
                                But SmartSpend isn&apos;t just about tracking expenses—it&apos;s also a powerful financial planning tool. Set budgets for different categories, track your spending against these budgets, and receive insightful reports to help you make informed decisions about your finances. With SmartSpend, you&apos;ll never exceed your budget unknowingly again.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
