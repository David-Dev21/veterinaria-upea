import { CardProps } from "@/types/type";

/**
 * Componente que renderiza una tarjeta con estilo.
 * @param {ReactNode} children - Contenido de la tarjeta.
 * @param {string} [className] - Clases adicionales para el estilo de la tarjeta.
 * @returns {JSX.Element} Elemento JSX que contiene la tarjeta.
 */
export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={`bg-white border-b-4 border-primary rounded-t-2xl shadow-lg bg-opacity-90 transition-transform transform hover:scale-105 hover:border-secondary flex flex-col ${className}`}
    >
      {children}
    </div>
  );
};

/**
 * Componente que renderiza el contenido de una tarjeta.
 * @param {ReactNode} children - Contenido del cuerpo de la tarjeta.
 * @param {string} [className] - Clases adicionales para el estilo del contenido.
 * @returns {JSX.Element} Elemento JSX que contiene el contenido de la tarjeta.
 */
export const CardContent = ({ children, className }: CardProps) => {
  return (
    <div
      className={`p-4 text-black text-sm sm:text-md flex-grow w-full ${className}`}
    >
      {children}
    </div>
  );
};
