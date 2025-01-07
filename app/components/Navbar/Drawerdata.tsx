import React from "react";
import Link from "next/link";
import Contactusform from "./Contactus";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'AirBnB', href: 'https://www.airbnb.com.co/rooms/768044283923462671?guests=1&adults=1&viralityEntryPoint=1&s=76&unique_share_id=f2e786b1-ad69-4311-9886-8936361ff748&_set_bev_on_new_domain=1735160243_EAYjA2ZDY2MzAwY2&source_impression_id=p3_1735160627_P3P_uzUJTtunOQj7', current: false },
    { name: 'Términos y condiciones', href: '/terminos', current: false },
    { name: 'Reseñas', href: '/#testimonial-section', current: false },
    { name: 'FAQ', href: '/#faq-section', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Data = () => {
    return (
        <div className="rounded-md max-w-sm w-full mx-auto">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-1 px-5 pt-2 pb-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple',
                                    'block  py-2 rounded-md text-base font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-4"></div>
                        <button
                        className="bg-navyblue w-full hover:text-white text-white border border-purple font-medium py-2 px-4 rounded"
                        onClick={() => window.location.href='https://wa.me/573108824053'}
                    >
                        Contáctanos
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
