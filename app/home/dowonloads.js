import Link from 'next/link';
import Image from 'next/image';

const Download = () => {
    return (
        <div className="w-full md:w-981 flex justify-center h-auto md:h-477" style={{ background: "#EEEEEE" }}>
            <div className="container flex flex-col md:flex-row justify-center items-center">
                <div className="p-5 md:p-10 mr-0 md:mr-4">
                    <Image src="/sadow.png" alt="Image" width={300} height={572} />
                </div>
                <div className="mt-8 md:mt-0">
                    <h2 className="text-lg font-extrabold">
                        <span className="font-bold text-4xl">Download </span>
                        <span className="font-bold text-[#E53A36] text-4xl">S</span>
                        <span className="font-bold text-4xl">mart</span>
                        <span className="font-bold text-[#E53A36] text-4xl">S</span>
                        <span className="font-bold text-4xl">pend</span>
                    </h2>
                    <div className="flex flex-col md:flex-row items-center mt-4">
                        {/* <div className="mr-0 md:mr-4 mb-4 md:mb-0">
                            <Image src="/Google-Play.png" alt="Image" width={250} height={700} className='w-full' />
                        </div> */}
                        {/* Uncomment this block if you want to include the rating section */}
                        {/* <div className="flex flex-col">
                            <div className="mr-2 font-extrabold text-3xl">4.4 Rating</div>
                            <img src="/rating.png" alt="Rating" className="h-auto md:h-12" />
                        </div> */}
                    </div>
                    <div className="flex mt-4" key="store-buttons">
                        <div className="inline-block mr-2" key="download-section-first-6">
                            <a href="https://play.google.com/store/apps/details?id=sstech.com.singleexpense" target="_blank" rel="noopener noreferrer">
                                <Image src="/Google-Play-Store.png" width={250} height={73} alt="Google Play Button" className="h-13 w-auto" style={{ width: "170px" }} />
                            </a>
                        </div>
                        <div className="inline-block" key="download-section-first-7">
                            <a href="https://apps.apple.com/us/app/wallet-income-expense-tracker/id1445995357" target="_blank" rel="noopener noreferrer">
                                <Image src="/Apple-Play-Store.png" width={250} height={73} alt="App Store Button" className="h-14 w-auto" style={{ width: "170px" }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Download;
