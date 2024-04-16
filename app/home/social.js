import Link from 'next/link';
import Image from 'next/image';

const Social = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-981 h-auto md:h-477 bg-gray-200">
            {/* Left Section */}
            <div className=" md:px-8">
                <div className="container mx-auto">
                    <a href="https://sstechstudio.com/single_expense/pages/index/privacy-policy" target="_blank" rel="noopener noreferrer">
                        <p className="text-sm max-sm">Privacy Policy</p>
                    </a>
                    <p className="text-sm max-sm">2024 © Smart Spend Expense Manager.</p>
                </div>
            </div>

            {/* Center Section with Social Media Buttons */}
            <div className="flex justify-center md:justify-start items-center space-x-4 py-4 px-4 md:px-0 md:ml-0 md:w-auto" style={{ marginLeft: '-125px', animation: 'slideIn 1s forwards' }}>
                <a href="https://www.facebook.com/singleexpense" target="_blank" rel="noopener noreferrer" className="social-icon bg-gradient-to-br p-1">
                    <Image src="/faceboook.png" alt="facebook" width={40} height={40} />
                </a>
                <a href="https://www.instagram.com/smartspendofficial/" target="_blank" rel="noopener noreferrer" className="social-icon text-white p-1">
                    <Image src="/instagramm.png" alt="instagram" width={35} height={35} />
                </a>
            </div>

            {/* Right Section */}
            <div className="flex justify-end items-center py-4 px-4 md:px-8">
                <Image src="/sslogo_sticky.png" alt="Image" width={100} height={40} />
            </div>
        </div>
    );
}

export default Social;
