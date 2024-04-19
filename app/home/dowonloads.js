import Link from 'next/link';
import Image from 'next/image';

const Download = () => {
    return (
        <div className="w-full md:w-981 h-auto md:h-477" key="download1" style={{ background: "#EEEEEE" }}>
            <div className="container flex flex-col md:flex-row justify-center items-center" key="download-section-first-21">
                <div className="p-10 mr-4" key="download-section-first-11">
                    <Image src="/sadow.png" alt="Image" width={300} height={572} />
                </div>
                <div className="mt-8 md:mt-0" key="download-section-first">
                    <h2 className="text-lg font-extrabold">
                        <span className="font-bold text-4xl">Download </span>
                        <span className="font-bold text-[#E53A36] text-4xl">S</span>
                        <span className="font-bold text-4xl">mart</span>
                        <span className="font-bold text-[#E53A36] text-4xl">S</span>
                        <span className="font-bold text-4xl">pend</span>
                    </h2>
                    <div className="flex items-center mt-4">
                        <div className="inline-block mr-4">
                            <img src="/Google-Play.png" alt="Google Play" className='flex h-12 p-1 mt-0' />
                        </div>
                        <div className="flex flex-col">
                            <div className="mr-2 font-extrabold text-3xl">4.4 Rating</div>
                            <img src="/rating.png" alt="Rating" style={{ height: "30px", width: "145px" }} />
                        </div>
                    </div>
                    <div className="flex mt-4" key="download-section-first-5">
                        <div className="inline-block mr-2" key="download-section-first-6">
                            <a href="https://play.google.com/store/apps/details?id=sstech.com.singleexpense" target="_blank" rel="noopener noreferrer">
                                <Image src="/Google-Play-Store.png" width={150} height={75} alt="Google Play Button" className="w-auto" style={{ width: "175px", height: "58px" }} />
                            </a>
                        </div>
                        <div className="inline-block" key="download-section-first-7">
                            <a href="https://apps.apple.com/us/app/wallet-income-expense-tracker/id1445995357" target="_blank" rel="noopener noreferrer">
                                <Image src="/Apple-Play-Store.png" width={150} height={75} alt="App Store Button" className=" w-auto" style={{ width: "180px", height: "58px" }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Download;
