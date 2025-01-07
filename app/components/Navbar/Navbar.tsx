'use client';

import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";

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

];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
                    <div className="relative flex h-12 sm:h-20 items-center">
                        <div className="flex flex-1 items-center sm:justify-between">
                            {/* LOGO */}
                            <div className="flex flex-shrink-0 items-center border-right">
                                <Link href="/" className="text-2xl sm:text-4xl font-semibold text-black">
                                    Apartamento Reserva de San Luis
                                </Link>
                            </div>

                            {/* LINKS */}
                            <div className="hidden lg:flex items-center border-right">
                                <div className="flex justify-end space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900' : 'navlinks hover:text-black',
                                                'px-3 py-4 rounded-md text-lg font-normal'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* DRAWER FOR MOBILE VIEW */}
                        <div className="block lg:hidden">
                            <Bars3Icon
                                className="block h-6 w-6"
                                aria-hidden="true"
                                onClick={() => setIsOpen(true)}
                            />
                        </div>
                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>
                    </div>
                </div>
            </>
        </Disclosure>
    );
};

export default Navbar;
