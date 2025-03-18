import { HeaderProps } from "@/types/type";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * Componente que renderiza un encabezado animado.
 * @param {string} title - Título del encabezado.
 * @param {ReactNode} children - Contenido adicional del encabezado.
 * @returns {JSX.Element} Elemento JSX que contiene el encabezado animado.
 */
const Header = ({ title, children }: HeaderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="max-w-xl p-4 sm:mx-auto">
      <motion.h3
        className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-3xl text-center font-bold sm:text-4xl"
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
        ref={ref}
      >
        {children} {title}
      </motion.h3>
      <motion.p
        className="text-gray-900 text-center font-semibold"
        initial={{ opacity: 0, x: 100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Medicina Veterinaria y Zootecnia
      </motion.p>
    </div>
  );
};

export default Header;
