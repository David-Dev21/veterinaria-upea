import { ButtonProps } from "@/types/type";

/**
 * Componente que renderiza un enlace con estilo de botón.
 * @param {ReactNode} children - Contenido del botón.
 * @param {string} href - URL a la que apunta el enlace.
 * @returns {JSX.Element} Elemento JSX que contiene el enlace con estilo de botón.
 */
const ButtonLink = ({ children, href }: ButtonProps) => {
  return (
    <a
      className="bg-primary shadow-lg hover:bg-secondary text-white text-center mx-auto font-bold py-3 px-4 rounded-2xl
        transform hover:scale-105 transition-transform duration-500"
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
};

export default ButtonLink;
