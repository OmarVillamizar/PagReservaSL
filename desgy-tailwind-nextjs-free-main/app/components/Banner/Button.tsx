"use client";

import React from 'react';

const Button = () => {
    const handleClick = () => {
        window.open('https://es-l.airbnb.com/rooms/768044283923462671?guests=1&adults=1&s=67&unique_share_id=a4b9c087-e448-4d78-bc6f-b277516b65a5', '_blank');
    };

    return (
        <button 
            className='text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue'
            onClick={handleClick}
        >
            airbnb
        </button>
    );
};

export default Button;
