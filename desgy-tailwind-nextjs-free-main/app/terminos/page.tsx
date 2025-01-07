'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Terminos = () => {
    const [language, setLanguage] = useState<'es' | 'en'>('es');

    const handleLanguageSwitch = (lang: 'es' | 'en') => {
        setLanguage(lang);
    };

    const content = {
        es: {
            title: 'Términos y Condiciones',
            paragraphs: [
                'Apreciados Huéspedes,',
                'Les damos la bienvenida a nuestro alojamiento. A continuación, se detallan las normas y condiciones que rigen el uso de nuestros apartamentos. Por favor, lea atentamente cada sección.',
            ],
            sections: [
                {
                    subtitle: 'Reglas Generales',
                    text: [
                        '• Las horas de silencio comienzan a partir de las 10:00 p.m.',
                        '• No está permitido realizar fiestas dentro del apartamento.',
                        '• No está permitida la música a alto volumen.',
                        '• Estamos en contra de la explotación sexual comercial de niños, niñas y adolescentes. Todo menor de edad debe estar autorizado y/o acompañado por su padre o responsable.',
                        '• No está permitido subarrendar nuestras habitaciones ni hacer cobros por el uso del apartamento por parte del arrendatario.',
                        'Estas normas son imprescindibles para garantizar el buen uso de nuestras instalaciones. En caso de queja o uso indebido del apartamento, nos veremos obligados a cancelar su reserva sin derecho a reembolso, ya que esto acarrea una multa administrativa.',
                    ]
                },
                {
                    subtitle: 'Servicios Disponibles',
                    text: [
                        'Nuestro alojamiento cuenta con los siguientes servicios disponibles para su disfrute:',
                        '• Piscina (Disponible de jueves a domingo, de 8:00 a 11:00 a.m. y de 3:00 a 5:00 p.m. Uso obligatorio de traje de baño y gorro).',
                        '• Gimnasio (Disponible todos los días desde las 8:00 a.m.).',
                        '• Juegos infantiles.',
                        'Las manillas para ingresar a la piscina se venden en la Oficina de Administración del condominio, en horario de oficina, por un valor de $3.000 pesos cada una.',
                        'Los domicilios están permitidos hasta la puerta del apartamento hasta las 8:00 p.m. Pasada esa hora, deben ser reclamados en la portería.'
                    ]
                },
                {
                    subtitle: 'Tratamiento de Datos Personales',
                    text: [
                        'En cumplimiento de la Ley 2068 de 2020, se requerirán ciertos datos personales como el tipo y número de documento de identificación, los cuales serán procesados y registrados en la Tarjeta de Registro de Alojamiento –TRA–.',
                        'Este registro es obligatorio para todos los prestadores de servicios de alojamiento turístico (PSAT), y se realiza de acuerdo con el artículo 22 de la Ley 2068 de 2020. El objetivo de este sistema es fortalecer los análisis estadísticos del sector y mejorar la seguridad tanto para los prestadores de servicios turísticos como para los turistas.',
                        'La ley busca, entre otros, contribuir al fortalecimiento del sector turístico, mejorar la seguridad y facilitar la toma de decisiones de política pública en relación con el turismo en Colombia.',
                    ]
                }
            ]
        },
        en: {
            title: 'Terms and Conditions',
            paragraphs: [
                'Dear Guests,',
                'Welcome to our accommodation. Below are the rules and conditions that govern the use of our apartments. Please read each section carefully.',
            ],
            sections: [
                {
                    subtitle: 'General Rules',
                    text: [
                        '• Quiet hours begin at 10:00 p.m.',
                        '• Parties are not allowed in the apartment.',
                        '• Loud music is not permitted.',
                        '• We oppose the commercial sexual exploitation of children and adolescents. Any minor must be authorized and/or accompanied by their parent or responsible guardian.',
                        '• Subletting rooms or charging for apartment use by the tenant is prohibited.',
                        'These rules are crucial to ensuring the proper use of our facilities. In case of any complaints or improper use of the apartment, we will be forced to cancel your reservation without refund, as it incurs an administrative fine.',
                    ]
                },
                {
                    subtitle: 'Available Services',
                    text: [
                        'Our accommodation offers the following services for your enjoyment:',
                        '• Pool (Available Thursday to Sunday, from 8:00 to 11:00 a.m. and from 3:00 to 5:00 p.m. Bathing suit and pool cap are mandatory).',
                        '• Gym (Available daily from 8:00 a.m.).',
                        '• Children’s playground.',
                        'Pool entry wristbands are sold at the Condominium Administration Office during  Office during office hours for a price of 3,000 COP (approximately $0.70 USD) each.',
                        'Deliveries are allowed to the apartment door until 8:00 p.m. After this time, they must be collected at the front desk.'
                    ]
                },
                {
                    subtitle: 'Personal Data Processing',
                    text: [
                        'In compliance with Law 2068 of 2020, certain personal data, such as the type and number of identification document, will be required and processed under the Accommodation Registration Card –TRA– system.',
                        'This registration is mandatory for all providers of tourist accommodation services (PSAT) and is carried out in accordance with Article 22 of Law 2068 of 2020. The purpose of this system is to strengthen statistical analysis of the sector and enhance security for both service providers and tourists.',
                        'The law aims, among other things, to contribute to the strengthening of the tourism sector, improve security, and assist in making public policy decisions related to tourism in Colombia.',
                    ]
                }
            ]
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-16 pb-40">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    {/* Language Tabs */}
                    <div className="flex border-b border-gray-200">
                        <button
                            onClick={() => handleLanguageSwitch('es')}
                            className={`relative flex items-center justify-center gap-2 flex-1 py-4 px-4 text-sm font-medium transition-all duration-200 ${
                                language === 'es' 
                                    ? 'text-blue-600 bg-blue-50'
                                    : 'text-gray-500 hover:text-blue-600 hover:bg-gray-50'
                            }`}
                        >
                            Español
                            {language === 'es' && (
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600" />
                            )}
                        </button>
                        <button
                            onClick={() => handleLanguageSwitch('en')}
                            className={`relative flex items-center justify-center gap-2 flex-1 py-4 px-4 text-sm font-medium transition-all duration-200 ${
                                language === 'en'
                                    ? 'text-blue-600 bg-blue-50'
                                    : 'text-gray-500 hover:text-blue-600 hover:bg-gray-50'
                            }`}
                        >
                            <Image
                                src="/images/banderas/estados-unidos.png"
                                alt="English"
                                width={20}
                                height={15}
                                className="object-cover"
                            />
                            English
                            {language === 'en' && (
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600" />
                            )}
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-8 sm:p-10">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
                            {content[language].title}
                        </h1>
                        
                        <div className="space-y-6 mb-12">
                            {content[language].paragraphs.map((paragraph, index) => (
                                <p key={index} className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="space-y-12">
                            {content[language].sections.map((section, index) => (
                                <section key={index} className="bg-gray-50 rounded-xl p-6 sm:p-8">
                                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
                                        {section.subtitle}
                                    </h2>
                                    <div className="space-y-4">
                                        {section.text.map((text, idx) => (
                                            <p key={idx} className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                                {text}
                                            </p>
                                        ))}
                                    </div>
                                </section>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Terminos;