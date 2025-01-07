import Image from "next/image";
import Link from "next/link";

const Insta = () => {
    return (
        <div className="mx-auto max-w-2xl pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-24 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                    {
                        src: "/images/insta/insta1.png",
                        alt: "instaOne",
                        link: "https://es-l.airbnb.com/rooms/768044283923462671?guests=1&adults=1&s=67&unique_share_id=a4b9c087-e448-4d78-bc6f-b277516b65a5"
                    },
                    {
                        src: "/images/insta/insta2.png",
                        alt: "instaTwo",
                        link: "https://es-l.airbnb.com/rooms/768044283923462671?guests=1&adults=1&s=67&unique_share_id=a4b9c087-e448-4d78-bc6f-b277516b65a5"
                    },
                    {
                        src: "/images/insta/insta3.png",
                        alt: "instaThree",
                        link: "https://es-l.airbnb.com/rooms/768044283923462671?guests=1&adults=1&s=67&unique_share_id=a4b9c087-e448-4d78-bc6f-b277516b65a5"
                    },
                    {
                        src: "/images/insta/insta4.png",
                        alt: "instaFour",
                        link: "https://es-l.airbnb.com/rooms/768044283923462671?guests=1&adults=1&s=67&unique_share_id=a4b9c087-e448-4d78-bc6f-b277516b65a5"
                    }
                ].map((item, index) => (
                    <div 
                        key={index} 
                        className="relative group aspect-square w-full overflow-hidden rounded-lg bg-gray-200"
                    >
                        <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            className="object-cover transition-opacity group-hover:opacity-75"
                            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        />
                        <Link 
                            href={item.link} 
                            target="_blank"
                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <Image 
                                src="/images/insta/Airbnb.png" 
                                alt="instagram" 
                                width={180} 
                                height={70} 
                                className="drop-shadow-lg"
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Insta;