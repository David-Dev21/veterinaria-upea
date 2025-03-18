"use client";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
/**
 * Componente para mostrar una lista de enlaces importantes.
 * Los enlaces se muestran en una cuadrícula y cada uno tiene una animación de aparición.
 */
const LinksPage = () => {
  return (
    <section className="max-w-screen-2xl h-full pt-24 mx-auto px-6 md:px-10">
      <Header title="Enlaces">
        <FontAwesomeIcon icon={faLink} className="text-secondary" />
      </Header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center mx-auto py-16 gap-12 lg:gap-0">
        <motion.div
          className="w-full px-10 text-sm bg-red-600 rounded-3xl lg:w-72 lg:px-0 mx-auto hover:scale-110 duration-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-3 text-center">
            <a href="https://matriculacion.upea.bo/" target="_blank">
              <div className="relative w-full h-40">
                <Image
                  src="/images/mae.png"
                  alt="m@e"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-lg text-white">
                M@e es el sistema de matriculación académica de la UPEA.
              </p>
            </a>
          </div>
        </motion.div>
        <motion.div
          className="w-full px-10 text-sm bg-orange-400 rounded-3xl lg:w-72 lg:px-0 mx-auto hover:scale-110 duration-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="p-3 text-center">
            <a href="https://inscripciones.upea.bo/" target="_blank">
              <div className="relative w-full h-40">
                <Image
                  src="/images/inscripciones.png"
                  alt="inscripciones"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-lg text-white">
                Sistema de inscripciones para estudiantes antiguos ENFERMERIA
              </p>
            </a>
          </div>
        </motion.div>
        <motion.div
          className="w-full px-10 text-sm bg-blue-900 rounded-3xl lg:w-72 lg:px-0 mx-auto hover:scale-110 duration-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="p-3 text-center">
            <a href="https://virtualveterinaria.upea.bo/" target="_blank">
              <div className="relative w-full h-40">
                <Image
                  src="/images/moodle.png"
                  alt="moodle"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-lg text-white">
                El Campus Virtual es la plataforma de aprendizaje en línea de la
                UPEA.
              </p>
            </a>
          </div>
        </motion.div>
        <motion.div
          className="w-full px-10 text-sm bg-gray-600 rounded-3xl lg:w-72 lg:px-0 mx-auto hover:scale-110 duration-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="p-3 text-center">
            <a
              href="https://biblioteca.upea.bo/cgi-bin/koha/opac-detail.pl?biblionumber=126"
              target="_blank"
            >
              <div className="relative w-full h-40">
                <Image
                  src="/images/upea.png"
                  alt="upea"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-lg text-white">
                La Biblioteca Virtual de la Upea es una colección de recursos
                digitales accesibles en línea.
              </p>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LinksPage;
