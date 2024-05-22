import Link from 'next/link';
import Image from 'next/image';

const Social = () => {
    return (

        <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-981 h-auto md:h-477 bg-gray-200 lg:px-[40px] xl:px-[165px] 2xl:px-[270px] ">
            {/* Left Section */}
            <div className=" md:px-8">
                <div className="container mx-auto">
                    <a href="/smart-spend/privacy-policy" target="_blank" rel="noopener noreferrer">
                        <p className="text-sm max-sm">Privacy Policy</p>
                    </a>
                    <p className="text-sm max-sm">Copyrights © 2024 <a href="https://www.sstechsystem.com/" target="_blank" className="" >SSTech System Solutions Pvt Ltd</a>, India</p>
                </div>
            </div>

            {/* Center Section with Social Media Buttons */}
            <div className="flex justify-center md:justify-start items-center space-x-4 py-4 px-4 md:px-0 md:ml-0 md:w-auto" style={{ marginLeft: '-170px', animation: 'slideIn 1s forwards', display: 'flex', alignItems: 'center' }}>
                <a href="https://www.facebook.com/singleexpense" target="_blank" className="flex items-center justify-center social-icon p-0">
                    <Image src="/faceboook.png" alt="facebook" width={40} height={40} />
                </a>
                <a href="https://www.instagram.com/smartspendofficial/" target="_blank" className="" >
                    <Image src="/instagramm.png" alt="instagram" width={33} height={33} style={{ marginTop: "-5px" }} />
                </a>
            </div>

            {/* Right Section */}
            <div className="flex justify-end items-center py-4 px-4 md:px-8">
                <div className="font-bold px-1">
                    Powerd By
                </div>
                <a href="https://www.sstechsystem.com/" target="_blank" className="" >
                    <Image src="/sslogo_sticky.png" alt="Image" width={100} height={40} />
                </a>
            </div>
        </div>
    );
}

export default Social;
