"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/Header";
import LoadingSpinner from "@/components/LoadingSpinner";
import SwiperComponent from "@/components/SwiperComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { Gaceta } from "@/interfaces/interfaces";

const BASE_PDF_URL = "https://serviciopagina.upea.bo/Gaceta/";

/**
 * Componente para mostrar una lista de gacetas.
 * Realiza una solicitud a la API para obtener las gacetas y las muestra en un carrusel.
 * Muestra un componente de carga mientras se obtienen los datos y un mensaje de error si ocurre un problema.
 */
function GacetaPage() {
  const [gacetas, setGacetas] = useState<Gaceta[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Gaceta[]>(
          "https://serviciopagina.upea.bo/api/gacetaunivAll/20"
        );
        if (!Array.isArray(response.data)) {
          throw new Error("Los datos recibidos no son un array.");
        }
        setGacetas(response.data);
      } catch (error) {
        setError(
          `Error: ${
            error instanceof Error
              ? error.message
              : "Ocurrió un error desconocido."
          }`
        );
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p className="text-center my-80 text-red-500">{error}</p>;
  }

  return (
    <section className="max-w-screen-xl h-full mx-auto flex flex-col justify-center pt-24 px-4 md:px-6">
      <Header title="GACETA">
        <FontAwesomeIcon icon={faFilePdf} className="text-secondary" />
      </Header>
      <SwiperComponent
        items={gacetas}
        renderItem={(item) => (
          <div>
            <div className="w-full mx-auto relative z-20 scale-75">
              <iframe
                src={`${BASE_PDF_URL}${item.gaceta_documento}`}
                width="100%"
                height="400px"
                className="border-0 rounded-2xl"
              ></iframe>
              <div className="absolute top-5 left-5 bg-primary text-white font-bold text-sm p-2 rounded-2xl">
                {item.gaceta_titulo || "Sin título"}
              </div>
              <div className="absolute bottom-16 right-5 bg-secondary text-white font-bold text-sm p-2 rounded-full">
                {item.gaceta_fecha
                  ? new Date(item.gaceta_fecha).toLocaleDateString("es-ES", {
                      day: "numeric",
                      month: "long",
                    })
                  : "Sin fecha"}
              </div>
              <a
                href={`${BASE_PDF_URL}${item.gaceta_documento}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-primary p-2 hover:bg-secondary rounded-xl mt-2 block text-center"
              >
                Descargar PDF
              </a>
            </div>
            <div className="absolute -inset-2 rounded-2xl blur-sm bg-gradient-to-br from-primary to-secondary z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75"></div>
          </div>
        )}
      />
    </section>
  );
}

export default GacetaPage;
