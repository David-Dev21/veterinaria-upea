"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Publication } from "@/interfaces/interfaces";
import {
  faCalendar,
  faNewspaper,
  faTag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "@/components/Header";
import SwiperComponent from "@/components/SwiperComponent";
import LoadingSpinner from "@/components/LoadingSpinner";
import Modal from "@/components/Modal";

const BASE_IMAGE_URL = "https://serviciopagina.upea.bo/Publicaciones/";

/**
 * Componente para mostrar una lista de publicaciones.
 * Realiza una solicitud a la API para obtener las publicaciones y las muestra en un carrusel.
 * Muestra un componente de carga mientras se obtienen los datos y un mensaje de error si ocurre un problema.
 */
const PublicationsPage = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [selectedAttributes, setSelectedAttributes] =
    useState<Publication | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Publication[]>(
          "https://serviciopagina.upea.bo/api/publicacionesAll/20"
        );
        if (!Array.isArray(response.data)) {
          throw new Error("Los datos recibidos no son un array.");
        }
        setPublications(response.data);
      } catch (error) {
        setError(
          `Error: ${
            error instanceof Error
              ? error.message
              : "Ocurrió un error desconocido."
          }`
        );
        console.error("Error al obtener los datos:", error);
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
    return <p className="text-center mt-20 text-red-500">{error}</p>;
  }

  return (
    <section className="max-w-screen-xl h-full mx-auto flex flex-col justify-center items-center px-4 md:px-6">
      <Header title="Publicaciones">
        <FontAwesomeIcon icon={faNewspaper} className="text-secondary" />
      </Header>
      <SwiperComponent
        items={publications}
        onImageClick={(item) => {
          setSelectedImage(`${BASE_IMAGE_URL}${item.publicaciones_imagen}`);
          setSelectedAttributes(item);
        }}
        renderItem={(item) => (
          <div>
            <div className="w-full mx-auto relative z-20 scale-75">
              <img
                src={`${BASE_IMAGE_URL}${item.publicaciones_imagen}`}
                className="object-cover shadow-md cursor-pointer rounded-xl h-100 w-full"
                alt={item.publicaciones_titulo || "Sin título"}
              />
              <div className="absolute top-5 left-5 bg-primary text-white font-bold text-sm p-2 rounded-2xl">
                {item.publicaciones_titulo || "Sin título"}
              </div>
              <div className="absolute bottom-5 right-5 bg-secondary text-white font-bold text-sm p-2 rounded-full">
                {item.publicaciones_fecha
                  ? new Date(item.publicaciones_fecha).toLocaleDateString(
                      "es-ES",
                      { day: "numeric", month: "long" }
                    )
                  : "Sin fecha"}
              </div>
            </div>
            <div className="absolute -inset-2 rounded-2xl blur-sm bg-gradient-to-br from-primary to-secondary z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75"></div>
          </div>
        )}
      />
      <Modal
        isOpen={!!selectedImage}
        onClose={() => {
          setSelectedImage(undefined);
          setSelectedAttributes(null);
        }}
        imageSrc={selectedImage}
        attributes={
          selectedAttributes && (
            <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
              <h4 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-lg text-center font-bold py-2 sm:text-3xl">
                <FontAwesomeIcon
                  icon={faNewspaper}
                  className="text-secondary"
                />{" "}
                {selectedAttributes.publicaciones_titulo || "Sin título"}
              </h4>
              <div
                className="text-tertiary text-xs sm:text-base leading-relaxed mb-6"
                dangerouslySetInnerHTML={{
                  __html: selectedAttributes.publicaciones_descripcion,
                }}
              />
              <div className="flex flex-wrap gap-2">
                <div className="group inline-flex items-center gap-1 px-3 py-1 bg-secondary text-white text-sm font-medium rounded-full relative">
                  <FontAwesomeIcon icon={faCalendar} />
                  {selectedAttributes.publicaciones_fecha
                    ? new Date(
                        selectedAttributes.publicaciones_fecha
                      ).toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })
                    : "Sin fecha"}
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Fecha de publicación
                  </span>
                </div>
                <div className="group inline-flex items-center gap-1 px-3 py-1 bg-primary text-white text-sm font-medium rounded-full relative">
                  <FontAwesomeIcon icon={faTag} />
                  {selectedAttributes.publicaciones_tipo || "Sin tipo"}
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Tipo de publicación
                  </span>
                </div>
                <div className="group inline-flex items-center gap-1 px-3 py-1 bg-tertiary text-white text-sm font-medium rounded-full relative">
                  <FontAwesomeIcon icon={faUser} />
                  {selectedAttributes.publicaciones_autor || "Sin autor"}
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Autor de la publicación
                  </span>
                </div>
              </div>
            </div>
          )
        }
      >
        <></>
      </Modal>
    </section>
  );
};

export default PublicationsPage;
