import Link from 'next/link';
import Image from 'next/image';
const Screenshots = () => {

    return (
        <div className="max-w-1170 mx-auto mt-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-row"> {/* Create a flexbox for layout */}
                    <div className="w-4/4"> {/* Allocate 4/4 width for screenshots */}
                        <h1 className="text-4xl font-extrabold text-center mb-4 pt-4">Screenshots</h1>
                        <div className="grid grid-cols-2 gap-1 md:grid-cols-4 pt-8"> {/* Grid for responsive image layout */}
                            <Image src="/Screenshot-01.png" alt="Screenshot 1" width={400} height={200} />
                            <Image src="/Screenshot-02.png" alt="Screenshot 2" width={400} height={200} />
                            <Image src="/Screenshot-03.png" alt="Screenshot 3" width={400} height={200} />
                            <Image src="/Screenshot-04.png" alt="Screenshot 4" width={400} height={200} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Screenshots;