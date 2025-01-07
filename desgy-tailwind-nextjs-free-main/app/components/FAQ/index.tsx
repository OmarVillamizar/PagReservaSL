"use client"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const FAQ = () => {
    return (
        <div id="faq-section" className='mx-auto max-w-7xl py-24 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg'>
            <h3 className='text-xl font-normal text-white text-center mb-6'>FAQ</h3>
            <h2 className='text-4xl lg:text-6xl font-semibold text-center text-white'>Preguntas<br /> Frecuentes.</h2>
            <div className="w-full px-4 pt-16">
                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>¿Dónde están ubicados?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-90">
                                    Estamos ubicados en el condominio de Reserva de San Luis, en Cúcuta
                                    <br /> Av. 1 #20-51, San Mateo, Cúcuta, Norte de Santander, Colombia.
                                    <br />
                                    <a href="https://maps.app.goo.gl/Y1AHVzZcQV3d51t1A" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                        https://maps.app.goo.gl/Y1AHVzZcQV3d51t1A
                                    </a>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>¿Con que serivicios cuentan?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-90">
                                Apartamento con acabados de lujos, con excelente ubicación, vigilancia en portería, con Piscina.
                                Habitación principal cama doble 2p con tv, baño privado y Aire acondicionado,
                                Habitación auxiliar con vetilador
                                2 Habitación de dos camas sencillas con ventilador.
                                Baño social y baño en el cuarto Principal
                                Dos TV con parabolica, WiFi gratis.
                                Cocina equipada
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>¿Cómo puedo contactar con el anfitrión?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-90">
                                    A través de la página de AirBnB:
                                    <br />
                                    <a href="https://es-l.airbnb.com/rooms/768044283923462671?guests=1&adults=1&s=67&unique_share_id=a4b9c087-e448-4d78-bc6f-b277516b65a5" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                        https://es-l.airbnb.com/rooms/768044283923462671?guests=1&adults=1&s=67&unique_share_id=a4b9c087-e448-4d78-bc6f-b277516b65a5
                                    </a>
                                    <br />
                                    Y el número de WhatsApp Colombiano: +57 3108824053
                                    <br />
                                    <a href="https://wa.me/573108824053" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                    https://wa.me/573108824053
                                    </a>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

            </div>
        </div>
    )
}

export default FAQ;