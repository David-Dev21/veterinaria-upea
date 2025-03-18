"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PublicationsPage from "./publicaciones/page";
import VideosPage from "./videos/page";
import Image from "next/image";
import PawPrintsAnimation from "@/components/Animation";

const images = [
  "/images/veterinaria-1.jpg",
  "/images/veterinaria-2.jpg",
  "/images/veterinaria-3.jpg",
];

/**
 * Componente principal de la página de inicio.
 * Muestra una animación de bienvenida, un carrusel de imágenes y secciones de publicaciones y videos.
 */
const Welcome = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: {
      scale: 0.8,
      opacity: 0,
    },
    center: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    exit: {
      scale: 1.2,
      opacity: 0,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-gradient-to-r from-secondary via-secondary to-primary"></div>
      <section className="max-w-screen-xl h-screen flex items-center justify-center mx-auto px-2 md:px-10 xl:text-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
          <PawPrintsAnimation></PawPrintsAnimation>
          <div className="w-full">
            <motion.h3
              className="text-tertiary text-start md:mt-10 mt-0 lg:text-center text-2xl font-semibold p-4 sm:text-5xl"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.1 }}
            >
              Bienvenido a la <br /> Carrera de Medicina Veterinaria y Zootecnia
            </motion.h3>
            <motion.p
              className="text-primary text-start lg:text-center font-bold text-xl p-4 sm:text-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Carrera Acreditada
            </motion.p>
          </div>
          <motion.div
            className="relative w-72 h-56 place-self-center shadow-md md:w-full md:h-96 rounded-3xl md:mt-10 mt-0"
            key={currentImage}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              scale: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 2 },
            }}
          >
            <Image
              src={images[currentImage]}
              alt="Enfermería"
              objectFit="cover"
              className="rounded-3xl"
              layout="fill"
            />
          </motion.div>
        </div>
      </section>
      <PublicationsPage />
      <VideosPage />
    </>
  );
};

export default Welcome;
