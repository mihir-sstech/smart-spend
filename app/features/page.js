import Link from 'next/link';
import Image from 'next/image';
const Feature = () => {
    // Define an array of card data
    const cards = [
        {
            icon: "card1.png",
            title: "Month Wise Comparison",
            description: "SmartSpend - Expense Manager lets you make monthly comparisons of spending, earnings,and expenses. "
        },
        {
            icon: "security.png",
            title: "Access From Anywhere",
            description: "Installing the Income Tracker App lets you access the cloud-based database anytime. "
        },
        {
            icon: "data-security.png",
            title: "Data Security",
            description: "It will be a suitable option for avoiding data loss of any kind. Receipt and bill data can be easily extracted, even behind the scenes. "
        },
        {
            icon: "payment-receipt.png",
            title: "360-Degree Expense Summary",
            description: "Installing the Expense Tracker App helps get 360-degree expense summaries with intuitive graphs of spending."
        },
        {
            icon: "budget-calculation.png",
            title: "Build Daily and Monthly Budgets",
            description: "Making monthly financial planning easier by installing the SmartSpend - Expense Manager."
        },
        {
            icon: "saving.png",
            title: "Money Saving Track Feature",
            description: "Grow your wealth by simply keeping monthly financial planning using the SmartSpend - Expense Manager. "
        },
        // Add more card objects as needed
    ];
    return (

        <div className="container mx-auto px-4 mt-10">
            <h1 className="text-3xl font-bold text-center mb-4">App Features</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 xs:grid-cols-1  gap-4 "> {/* Change grid-cols-2 to grid-cols-3 */}
                {cards.map((card, index) => (
                    <div
                        key={`feature-${index}`}
                        className="w-670 flex flex-col border border-solid border-gray-300 px-3 py-4">
                        <div className="w-full flex justify-center mb-4">
                            <Image
                                src={`/${card.icon}`}
                                alt={card.title} // Use title for alt text
                                width={80}
                                height={80}
                            />
                        </div>
                        <h2 className="text-xl text-center font-bold mb-2">{card.title}</h2>
                        <p className="text-gray-700 text-center">{card.description}</p>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default Feature;