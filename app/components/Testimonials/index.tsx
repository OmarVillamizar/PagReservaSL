"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "Gabriel",
        comment: 'El apartamento es tal cual se ve en las fotos. La zona es tranquila, segura y tiene acceso fácil a centros comerciales y supermercados. El anfitrión fue amable y atento en todo momento. Excelente opción para hospedarse. La limpieza estuvo muy bien',
        imgSrc: '/images/testimonial/gabriel.png',
    },
    {
        name: "Vivian",
        comment: 'Excelente anfitrióna con disposición y apoyo en todo lo que se requiere.. MARAVILLOSO ❤️❤️❤️.',
        imgSrc: '/images/testimonial/vivian.png',
    },

    {
        name: "Niray",
        comment: 'Es confortable y tranquilo, la ubicación permite transportarse en pocos minutos a los centros comerciales y supermercados.',
        imgSrc: '/images/testimonial/niray.png',
    },
    {
        name: "Gerardo",
        comment: 'Juliana es una excelente anfitriona, respondió a mis preguntas rápidamente. El apartamento es cómo se ve en las fotos. Un alojamiento limpio, equipado y cerca del aeropuerto y el centro de la ciudad de Cúcuta.',
        imgSrc: '/images/testimonial/gerardo.png',
    },
    {
        name: "Arlette",
        comment: 'Quedarse en el apto de Janndy es un paseo total de principio a fin. Un sitio súper bien ubicado, muy seguro, confiable, con piscina y gym, cosas super necesarias como farmacia y supermercado están cerquita. De volver a Cúcuta volvería sin pensarlo.',
        imgSrc: '/images/testimonial/arlette.png',
    },
    
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="bg-testimonial pt-40 pb-32 lg:py-32" id="testimonial-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">Algunas reseñas</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">Escritas por nuestros huéspedes</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">¡Mira lo que opinan los demás!</h3>
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} className="relative">
                                <div className='bg-white test-sha m-3 p-10 my-20 rounded-3xl'>
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={71} height={71} className="inline-block m-auto absolute test-pos rounded-lg" />
                                    <h4 className='text-base font-medium text-testColor my-4'>{items.comment}</h4>
                                    <hr style={{ color: "lightgrey" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-base font-medium pt-4 pb-2'>{items.name}</h3>

                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}