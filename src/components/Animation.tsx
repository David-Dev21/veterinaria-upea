import React from "react";
import { motion } from "framer-motion";

// Variantes de animación para las huellas
const pawVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i: number) => ({
    opacity: 0.5,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 2,
      repeat: Infinity,
      repeatType: "loop" as const,
    },
  }),
};

/**
 * Componente que renderiza una animación de huellas de patas.
 * @returns {JSX.Element} Elemento JSX que contiene la animación de huellas.
 */
function PawPrintsAnimation() {
  // Posiciones desordenadas de las huellas
  // Posiciones más esparcidas de las huellas
  const pawPositions = [
    { x: 50, y: 0 },
    { x: 0, y: 250 },
    { x: 120, y: 350 },
    { x: 180, y: 50 },
    { x: 320, y: 20 },
    { x: 320, y: 400 },
    { x: 450, y: 280 },
    { x: 500, y: 10 },
  ];

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0">
      {pawPositions.map((pos, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={pawVariants}
          initial="hidden"
          animate="visible"
          style={{
            position: "absolute",
            left: pos.x,
            top: pos.y,
          }}
          className="flex items-center justify-center"
        >
          {/* Usamos el SVG desde la carpeta public */}
          <img src="/images/huella.svg" alt="Huella" className="w-8 h-8" />
        </motion.div>
      ))}
    </div>
  );
}

export default PawPrintsAnimation;
