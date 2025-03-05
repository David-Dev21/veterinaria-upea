"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
declare global {
  interface Window {
    $: any;
  }
}
interface FlipCardProps {
  frontTitle: string;
  frontContent: React.ReactNode; // Ahora acepta cualquier contenido en el frente
  backTitle: string;
  backContent: React.ReactNode;
  icon: any;
  frontBg?: string;
  backBg?: string;
  frontTextColor?: string;
  backTextColor?: string;
}
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
  const cardRef = useRef(null);
  useEffect(() => {
    const loadScripts = async () => {
      if (typeof window.$ === "undefined") {
        const jQueryScript = document.createElement("script");
        jQueryScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";
        document.body.appendChild(jQueryScript);
        await new Promise((resolve) => {
          jQueryScript.onload = resolve;
        });
      }
      if (typeof window.$.fn.flip === "undefined") {
        const flipScript = document.createElement("script");
        flipScript.src = "/js/jquery.flip.min.js";
        document.body.appendChild(flipScript);
        await new Promise((resolve) => {
          flipScript.onload = resolve;
        });
      }
      if (cardRef.current) {
        $(cardRef.current).flip({ trigger: "click" });
      }
    };
    loadScripts();
  }, []);
  return (
    <div ref={cardRef} className="relative w-full max-w-xl mt-2">
      <div className="relative w-full h-auto">
        <div
          className={`front absolute inset-0 flex flex-col p-4 rounded-3xl ${frontBg} overflow-hidden min-h-full`}
        >
          <h2
            className={`place-items-center font-bold text-xl text-center ${frontTextColor}`}
          >
            <FontAwesomeIcon icon={icon} className={frontTextColor} />{" "}
            {frontTitle}
          </h2>
          <div className="mt-4 flex-1 overflow-hidden grid place-items-center">
            {frontContent}
          </div>
        </div>
        <div
          className={`back absolute inset-0 flex flex-col p-4 rounded-3xl shadow-md ${backBg} overflow-hidden min-h-full`}
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
