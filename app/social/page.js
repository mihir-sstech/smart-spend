import Link from 'next/link';
import Image from 'next/image';
const Social = () => {
    return (
        <div className="flex items-center justify-between w-full md:w-981 h-auto md:h-477" style={{ background: "#EEEEEE" }}>
            {/* Left Section */}
            <div className="flex flex-col justify-center py-4 px-8">
                <div className="container px-4 md:px-0">
                    <a href="https://sstechstudio.com/single_expense/pages/index/privacy-policy" target="_blank" rel="noopener noreferrer">
                        <p className="text-sm max-sm ">Privacy Policy</p>
                    </a>
                    <p className="text-sm max-sm">2024 © Smart Spend Expense Manager.</p>
                </div>
            </div>

            {/* Center Section */}
            <div className="flex justify-center ">
                {/* Social Media Buttons */}
                <a href="https://www.facebook.com/sstechsys/" target="_blank" rel="noopener noreferrer" className="social-icon bg-gradient-to-br  p-1">
                    <Image src="/faceboook.png" alt="Google Play Store" className="" width={40} height={40} />
                </a>
                <a href="https://www.instagram.com/sstech_system/?hl=en" target="_blank" rel="noopener noreferrer" className="social-icon text-white  p-1">
                    <Image src="/instagramm.png" alt="Google Play Store" className="" width={35} height={35} />
                </a>
                <a href="https://www.linkedin.com/company/sstech-system/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="social-icon p-1">
                    <Image src="/linkedinn.png" alt="Google Play Store" className="" width={40} height={40} />
                </a>
            </div>

            <div className="flex justify-end items-center py-4 px-8">
                <Image src="/sslogo_sticky.png" alt="Image" width={100} height={40} />
            </div>
        </div>
    );
}

export default Social;

