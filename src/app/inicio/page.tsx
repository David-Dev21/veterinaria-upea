'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PublicationsPage from './publicaciones/page';

// Constantes para centralizar valores repetidos
const images = [
    "/images/veterinaria-1.jpg",
    "/images/veterinaria-2.jpg",
    "/images/veterinaria-3.jpg"
];

const Welcome = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000); // Cambiar imagen cada 5 segundos
        return () => clearInterval(interval);
    }, []);

    const imageVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 1 } },
        exit: { opacity: 0, transition: { duration: 1 } }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <>
            {/* Fondo gradiente */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-primary via-secondary to-white"></div>

            {/* Contenido principal */}
            <section className="max-w-screen-xl mx-auto mt-12 md:mt-24 px-4 md:px-10 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Texto de bienvenida */}
                    <motion.div
                        className="text-center lg:text-left relative z-10"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.3, // Retraso escalonado entre elementos hijos
                                    delayChildren: 0.3 // Retraso inicial antes de iniciar las animaciones
                                }
                            }
                        }}
                    >
                        {/* Título animado */}
                        <motion.h1
                            className="text-2xl sm:text-3xl font-bold text-tertiary mb-4"
                            variants={textVariants}
                        >
                            Bienvenido a la Carrera de
                        </motion.h1>
                        <motion.h1
                            className="text-4xl sm:text-5xl font-bold text-tertiary mb-4"
                            variants={textVariants}
                        >
                            Medicina Veterinaria y Zootecnia
                        </motion.h1>
                        {/* Descripción animada */}
                        <motion.p
                            className="text-gray-700 text-lg sm:text-xl mt-4"
                            variants={textVariants}
                        >
                            Descubre el mundo de la veterinaria y zootecnia con nosotros. Formamos profesionales comprometidos con la salud animal y el desarrollo sostenible.
                        </motion.p>
                    </motion.div>

                    {/* Carrusel de imágenes */}
                    <motion.div
                        className="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg"
                        key={currentImage}
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <img
                            src={images[currentImage]}
                            alt="Veterinaria"
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay con efecto de transparencia */}
                        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    </motion.div>
                </div>
            </section>

            {/* Sección de publicaciones */}
            <PublicationsPage />
        </>
    );
};

export default Welcome;