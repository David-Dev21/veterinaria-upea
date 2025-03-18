"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import { FlipCardProps } from "@/types/type";

declare global {
  interface Window {
    $: JQueryStatic;
  }
}

/**
 * Componente que renderiza una tarjeta que se puede voltear para mostrar contenido adicional.
 * @param {FlipCardProps} props - Propiedades del componente.
 * @returns {JSX.Element} Elemento JSX que contiene la tarjeta volteable.
 */
const FlipCard = ({
  frontTitle,
  frontContent,
  backTitle,
  backContent,
  icon,
  frontBg = "bg-white",
  backBg = "bg-blue-900",
  frontTextColor = "text-black",
  backTextColor = "text-white",
}: FlipCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Copiamos el valor de cardRef.current a una variable local
    const card = cardRef.current;

    const loadScripts = async () => {
      try {
        if (typeof window.$ === "undefined") {
          const jQueryScript = document.createElement("script");
          jQueryScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";
          jQueryScript.async = true;
          document.body.appendChild(jQueryScript);
          await new Promise((resolve) => (jQueryScript.onload = resolve));
        }

        if (typeof window.$.fn.flip === "undefined") {
          const flipScript = document.createElement("script");
          flipScript.src = "/js/jquery.flip.min.js";
          flipScript.async = true;
          document.body.appendChild(flipScript);
          await new Promise((resolve) => (flipScript.onload = resolve));
        }

        // Usamos la variable local 'card' en lugar de 'cardRef.current'
        if (card) {
          window.$(card).flip({ trigger: "click" });
        }
      } catch (error) {
        console.error("Error cargando scripts:", error);
      }
    };

    loadScripts();

    // Función de limpieza usando la variable local 'card'
    return () => {
      if (card) {
        window.$(card).off();
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative w-full max-w-xl my-auto cursor-pointer"
    >
      <div className="relative w-full h-auto">
        <div
          className={`front absolute inset-0 flex flex-col p-4 rounded-3xl ${frontBg} overflow-hidden min-h-full`}
        >
          <h2 className={`font-bold text-xl text-center ${frontTextColor}`}>
            <FontAwesomeIcon icon={icon} className={frontTextColor} />{" "}
            {frontTitle}
          </h2>
          <div className="flex-1 overflow-hidden place-content-center">
            {frontContent}
          </div>
        </div>

        <div
          className={`back absolute inset-0 flex flex-col items-center p-4 rounded-3xl shadow-md ${backBg} overflow-hidden min-h-full`}
        >
          <h2 className={`font-bold text-xl text-center mb-4 ${backTextColor}`}>
            <FontAwesomeIcon icon={icon} className={backTextColor} />{" "}
            {backTitle}
          </h2>
          <div className={`text-sm flex-1 overflow-auto ${backTextColor}`}>
            {backContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
