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
            className="w-full h-auto flex justify-center items-center lg:px-[40px] xl:px-[165px] 2xl:px-[270px] "
            // className="w-full h-auto flex justify-start items-start"

            key="about-section"
        >
            <div className="max-w-4xl px-4"  key="about-section-first" 
            //style={{ marginRight: "155px" }}
            >
                <h1 className="text-4xl font-extrabold text-center pt-10 mb-1" 
                //</div>style={{ marginLeft: "90px" }}
                >About</h1>
                <div className='md:p-8 ' style={{ animation: 'slideIn 1s forwards' }}>
                    <div className="flex flex-col mx-auto "  key="about-section-first-half"
                    //style={{ marginRight: "-200px" }}
                    >
                        <div>
                        <p className="text-xl   md:text-base mb-4">
                            <b>SmartSpend: Expense Manager - Simple, Intuitive and Feature-Rich App for Managing Your Expenditure and Budget</b>
                        </p>
                        <p className="text-xl  md:text-base mb-4" >
                            SmartSpend: Expense Manager is the #1 Financial Planning, Expense Tracking, and Reviewing App. SmartSpend is one of the highly efficient personal asset management app on Android. Are you finding it difficult to track your expenses? This app is the ultimate option for maintaining the complete statement of your financial records. These are also helpful for avoiding losing any data on the bills and tickets.
                        </p>
                        <p className="text-xl    md:text-base mb-4">
                            SmartSpend: Expense Manager is a reliable option for recording personal as well as business financial transactions. You have a better way to easily review your daily, weekly as well as monthly financial data by using a simple app.
                        </p>
                        </div>
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold mb-4">All-In-One Expense and Budget App:</h2>
                            <p>Are you looking to manage your expenses and budget wisely? SmartSpend: Expense Manager is an intuitive and simple feature-rich app allowing you to record every expense. These also allow you to make perfect planning with your budget for your life. Choosing the daily expense manager app is the best option for having everything at your fingertip with managing the budget, checkbook as well as expenditures. Installing the expense tracker app is quite an efficient option for easily tracking spending as well as budget planning. All the data is saved on the personal cloud account or phone. You have absolute control of your data.</p>
                        </div>
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold mb-4">Why Use SmartSpend: Expense Manager?</h2>
                            <p>In our busy schedule, it is quite important to keep a financial record of our daily spending. SmartSpend: Expense Manager is the perfect app for providing all your requirements.</p><br></br>
                            <p>Below are some of the reasons for using the daily expense manager:</p><br></br>

                            <ul className="list-disc pl-6">
                                <li><b>Making Intelligent Financial Decisions:</b></li>
                                <p>Better planning in life automatically increases savings. It is quite important to refrain from unnecessary spending by recording finances. Making careful decisions for financial life is quite helpful with a monthly expense planner.</p>
                                <li><b>Month Wise Comparison:</b></li>
                                <p>SmartSpend: Expense Manager lets you make monthly comparisons of spending, earnings, and expenses. Every financial data will be well organized to the extent. The budget planner is helpful for generating spending reports and managing your assets.</p>
                                <li><b>Access Anywhere and Anytime:</b></li>
                                <p>Installing the SmartSpend: Expense Manager App lets you access the cloud-based database anytime. Your data will be stored in the Cloud to get quick access to expense reports from anywhere across the world. You will require an internet connection to access tasks like the expense submission.</p>
                                <li><b>No More Data Loss:</b></li>
                                <p>SmartSpend allows you to easily scan receipts in real time. It will be a suitable option for avoiding data loss of any kind. Receipt and bill data can be easily extracted, even behind the scenes. All the data of financial expenses and budget are recorded safely and backed up on the Cloud.</p>
                                <li><b>360-Degree Expense Summary:</b></li>
                                <p>Installing the this Expense Manager App is helpful for getting 360-degree expense summaries with intuitive graphs of spending. The monthly expense tracker helps to sharpen the finances.</p>
                                <li><b>Build Daily and Monthly Budgets:</b></li>
                                <p>When you are aware of how much you are spending, then you can maintain an appropriate budget. Making monthly financial planning is easier by installing the daily expense manager. The app lets you build an accurate monthly budget for making pre-planned expenditures.</p>
                            </ul>
                        </div>
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold mb-4">Features Of SmartSpend: Expense Manager App:</h2>
                            <p>SmartSpend: Expense Manager uses advanced technology to automatically categorize and provide you with a 360-degree view of income and expenses. The expense manager user guide gives you a complete detailed report on the transactions of money and helps to easily plan the budget accordingly. SmartSpend: Expense Manager app is a brilliant step for your futuristic approach to financial planning and strategy.</p><br></br>

                            <ul className="list-disc pl-6">
                                <li><b>Daily Expense Tracker:</b></li>
                                <p>SmartSpend: Expense Manager App lets you manage the expenses for consolidating the outgoing and incoming transactions.</p>
                                <li><b>Track The Finances:</b></li>
                                <p>Track the Finances feature is added in SmartSpend: Expense Manager, which allows you to get a customized report on spending and expenses.</p>
                                <li><b>Money Saving Track Feature:</b></li>
                                <p>Grow your wealth by simply keeping monthly financial planning using the daily expense manager. The tracker calculates the expenses along with your savings.</p>
                                <li><b>Expenditure Summary:</b></li>
                                <p>The SmartSpend: Expense Manager app is a perfect option for getting an accurate daily, weekly, and monthly summary of the budget. It lets you easily achieve your financial goal for your future.</p>
                            </ul>
                        </div>
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold mb-4">Short Description</h2>
                            <p>SmartSpend: Expense Manager is a top-rated app for tracking daily, weekly, and monthly expenses.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
