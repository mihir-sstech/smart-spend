import Link from 'next/link';
import Image from 'next/image';
const Feature = () => {
    // Define an array of card data
    const cards = [
        {
            icon: "Month-wise-Comparison.png",
            title: "Month Wise Comparison",
            description: "SmartSpend - Expense Manager lets you make monthly comparisons of spending, earnings,and expenses. "
        },
        {
            icon: "Access.png",
            title: "Access From Anywhere",
            description: "Installing the Income Tracker App lets you access the cloud-based database anytime. "
        },
        {
            icon: "Data-Security.png",
            title: "Data Security",
            description: "It will be a suitable option for avoiding data loss of any kind. Receipt and bill data can be easily extracted, even behind the scenes. "
        },
        {
            icon: "Expense-Summery.png",
            title: "360-Degree Expense Summary",
            description: "Installing the Expense Tracker App helps get 360-degree expense summaries with intuitive graphs of spending."
        },
        {
            icon: "budget.png",
            title: "Build Daily and Monthly Budgets",
            description: "Making monthly financial planning easier by installing the SmartSpend - Expense Manager."
        },
        {
            icon: "Money-Saving.png",
            title: "Money Saving Track Feature",
            description: "Grow your wealth by simply keeping monthly financial planning using the SmartSpend - Expense Manager. "
        },
        // Add more card objects as needed
    ];
    return (
            //lg:pl-[40px] xl:pl-[165px] 2xl:pl-[270px]
        <div className="lg:container mx-auto px-10 lg:px-4 mt-10 py-10 lg:px-[40px] xl:px-[165px] 2xl:px-[270px]">
            <h1 className="text-4xl font-extrabold text-center mb-10">App Features</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 mb-20"> {/* Change grid-cols-2 to grid-cols-3 */}

                {cards.map((card, index) => (
                    <div
                        key={`feature-${index}`}
                        className="flex flex-col border border-gray-300 hover:ring-4 hover:blue-300 hover:shadow-lg hover:shadow-current">
                        <div className="w-full h-28 flex justify-center mt-5  " >
                            <Image
                                src={`/${card.icon}`}
                                alt={card.title} // Use title for alt text
                                width={120}
                                height={150}
                                style={{ maxHeight: '200px' }} // Adjust the value as needed
                            />
                        </div>
                        <h2 className="text-xl text-center mt-6 font-bold mb-1">{card.title}</h2>
                        <p className="text-gray-700 text-center mt-0 p-5">{card.description}</p>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default Feature;