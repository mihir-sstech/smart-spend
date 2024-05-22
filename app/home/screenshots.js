import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Screenshots = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="max-w-1170 mx-auto ">
            <div className="container mx-auto lg:px-4 pt-10 lg:px-[40px] xl:px-[165px] 2xl:px-[270px] ">
                {/* lg:pl-[40px] xl:pl-[165px] 2xl:pl-[270px] */}
                <div className="flex flex-row">
                    <div className="w-full">
                        <h1 className="text-4xl font-extrabold text-center mb-2">Screenshots</h1>
                        <Slider {...settings} className="pt-8">
                            <div>
                                <Image src="/Screenshot-01.png" alt="Screenshot 1" width={400} height={200} />
                            </div>
                            <div>
                                <Image src="/Screenshot-02.png" alt="Screenshot 2" width={400} height={200} />
                            </div>
                            <div>
                                <Image src="/Screenshot-03.png" alt="Screenshot 3" width={400} height={200} />
                            </div>
                            <div>
                                <Image src="/Screenshot-04.png" alt="Screenshot 4" width={400} height={200} />
                            </div>
                            <div>
                                <Image src="/Screenshot-05.png" alt="Screenshot 5" width={400} height={200} />
                            </div>
                            <div>
                                <Image src="/Screenshot-06.png" alt="Screenshot 6" width={400} height={200} />
                            </div>
                            <div>
                                <Image src="/Screenshot-07.png" alt="Screenshot 7" width={400} height={200} />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Screenshots;

// import Link from 'next/link';
// import Image from 'next/image';
// const Screenshots = () => {

//     return (
//         <div className="max-w-1170 mx-auto mt-10">
//             <div className="container mx-auto px-4">
//                 <div className="flex flex-row"> {/* Create a flexbox for layout */}
//                     <div className="w-4/4"> {/* Allocate 4/4 width for screenshots */}
//                         <h1 className="text-4xl font-extrabold text-center mb-4 pt-4">Screenshots</h1>
//                         <div className="grid grid-cols-2 gap-1 md:grid-cols-4 pt-8"> {/* Grid for responsive image layout */}
//                             <Image src="/Screenshot-01.png" alt="Screenshot 1" width={400} height={200} />
//                             <Image src="/Screenshot-02.png" alt="Screenshot 2" width={400} height={200} />
//                             <Image src="/Screenshot-03.png" alt="Screenshot 3" width={400} height={200} />
//                             <Image src="/Screenshot-04.png" alt="Screenshot 4" width={400} height={200} />
//                             <Image src="/Screenshot-05.png" alt="Screenshot 4" width={400} height={200} />
//                             <Image src="/Screenshot-06.png" alt="Screenshot 4" width={400} height={200} />
//                             <Image src="/Screenshot-07.png" alt="Screenshot 4" width={400} height={200} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Screenshots;