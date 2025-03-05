import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useInView } from 'react-intersection-observer';

interface HeaderProps {
    children: ReactNode;
    title: string;
}

const Header = ({ title, children }: HeaderProps) => {
    // Configuramos el hook useInView
    const { ref, inView } = useInView({
        triggerOnce: true,  // Solo cuando entre en vista una vez
        threshold: 0.2,     // Se activará cuando el 20% del componente sea visible
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
