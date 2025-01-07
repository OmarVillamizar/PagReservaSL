import Image from "next/image";
import Button from './Button';

const Banner = () => {
    return (
        <div className='mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                {/* COLUMN-1 */}

                <div className="mx-auto sm:mx-0">
                    <div className="py-3 text-center lg:text-start">
                        <h1 className='text-6xl lg:text-80xl font-bold text-darkpurple'>
                            Cómodo apartamento <br /> en San Luis <br /> Cúcuta.
                        </h1>
                    </div>
                    <div className='my-7 text-center lg:text-start'>
                        <Button />
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className='lg:-m-24 lg:pt-20 lg:block'>
                <a href="https://es-l.airbnb.com/rooms/768044283923462671?guests=1&adults=1&s=67&unique_share_id=a4b9c087-e448-4d78-bc6f-b277516b65a5" target="_blank" rel="noopener noreferrer">
                    <Image src="/images/SanLuis/Puntaje.png" alt="hero-image" width={800} height={642} />
                </a>
                <a href="https://es-l.airbnb.com/rooms/768044283923462671?guests=1&adults=1&s=67&unique_share_id=a4b9c087-e448-4d78-bc6f-b277516b65a5" target="_blank" rel="noopener noreferrer">
                    <Image src="/images/SanLuis/Sala.jpeg" alt="hero-image" width={800} height={642} className='rounded-lg'/>
                </a>
                 </div>
            </div>
        </div>
    );
}

export default Banner;
