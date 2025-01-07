'use client'; // Habilita el comportamiento cliente

import React from 'react';

const UbicacionMapa = () => {
    return (
        <div className="w-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-full w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <h2 className="text-3xl font-semibold text-gray-900 text-center mb-6">Ubicación</h2>
                <div className="relative w-full h-96">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.080125728257!2d-72.48854998941535!3d7.886685892103082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6645a7fbd1446d%3A0x873180ad16d6ddbb!2sReserva%20de%20San%20Luis!5e0!3m2!1ses!2sco!4v1736281360146!5m2!1ses!2sco"
                        className="w-full h-full"
                        style={{ border: '0' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default UbicacionMapa;
