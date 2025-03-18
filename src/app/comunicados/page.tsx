"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import SwiperComponent from "@/components/SwiperComponent";
import Header from "@/components/Header";
import { Announcement } from "@/interfaces/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBullhorn,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "@/components/Modal";
import GacetaPage from "./gaceta/page";
import LoadingSpinner from "@/components/LoadingSpinner";

// URL base para las imágenes de los comunicados
const BASE_IMAGE_URL = "https://serviciopagina.upea.bo/Convocatorias/";

/**
 * Componente para mostrar una lista de comunicados, avisos y convocatorias.
 * Realiza una solicitud a la API para obtener los datos y los muestra en un carrusel.
 * Muestra un componente de carga mientras se obtienen los datos y un mensaje de error si ocurre un problema.
 */
const AnnouncementsPage = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [selectedAttributes, setSelectedAttributes] =
    useState<Announcement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Announcement[]>(
          "https://serviciopagina.upea.bo/api/convocatoriasAll/17"
        );
        if (!Array.isArray(response.data)) {
          throw new Error("Los datos recibidos no son un array.");
        }
        setAnnouncements(response.data);
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
    return <p className="text-center my-80 text-red-500">{error}</p>;
  }

  const calls = announcements.filter(
    (item) => item.con_titulo === "CONVOCATORIA"
  );
  const notices = announcements.filter((item) => item.con_titulo === "AVISO");
  const communications = announcements.filter(
    (item) => item.con_titulo === "COMUNICADO"
  );

  return (
    <>
      <section className="max-w-screen-xl h-full  mx-auto flex flex-col justify-center pt-24 px-4 md:px-6">
        <Header title="CONVOCATORIAS">
          <FontAwesomeIcon icon={faCalendarDays} className="text-secondary" />
        </Header>
        <SwiperComponent
          items={calls}
          onImageClick={(item) => {
            setSelectedImage(`${BASE_IMAGE_URL}${item.con_foto_portada}`);
            setSelectedAttributes(item);
          }}
          renderItem={(item) => (
            <div>
              <div className="w-full mx-auto relative z-20 scale-75">
                <img
                  src={`${BASE_IMAGE_URL}${item.con_foto_portada}`}
                  className="object-cover shadow-md cursor-pointer rounded-2xl h-100 w-full"
                  alt={item.con_titulo || "Sin título"}
                  onError={(e) => (e.currentTarget.src = "/placeholder.png")}
                />
                <div className="absolute top-5 left-5 bg-primary text-white font-bold text-sm p-2 rounded-2xl">
                  {item.con_titulo || "Sin título"}
                </div>
                <div className="absolute bottom-5 right-5 bg-secondary text-white font-bold text-sm p-2 rounded-full">
                  {item.con_fecha_inicio
                    ? new Date(item.con_fecha_inicio).toLocaleDateString(
                        "es-ES",
                        { day: "numeric", month: "long" }
                      )
                    : "Sin fecha"}
                </div>
                <div className="absolute bottom-5 left-5 bg-secondary text-white font-bold text-sm p-2 rounded-full">
                  {item.con_fecha_fin
                    ? new Date(item.con_fecha_fin).toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "long",
                      })
                    : "Sin fecha"}
                </div>
              </div>
              <div className="absolute -inset-2 rounded-2xl blur-sm bg-gradient-to-br from-primary to-secondary z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75"></div>
            </div>
          )}
        />
      </section>

      <section className="max-w-screen-xl h-full mx-auto flex flex-col justify-center px-4 md:px-6">
        <Header title="AVISOS">
          <FontAwesomeIcon icon={faBell} className="text-secondary" />
        </Header>
        <SwiperComponent
          items={notices}
          onImageClick={(item) => {
            setSelectedImage(`${BASE_IMAGE_URL}${item.con_foto_portada}`);
            setSelectedAttributes(item);
          }}
          renderItem={(item) => (
            <div>
              <div className="w-full mx-auto relative z-20 scale-75">
                <img
                  src={`${BASE_IMAGE_URL}${item.con_foto_portada}`}
                  className="object-cover shadow-md cursor-pointer rounded-2xl h-100 w-full"
                  alt={item.con_titulo || "Sin título"}
                  onError={(e) => (e.currentTarget.src = "/placeholder.png")}
                />
                <div className="absolute top-5 left-5 bg-primary text-white font-bold text-sm p-2 rounded-2xl">
                  {item.con_titulo || "Sin título"}
                </div>
                <div className="absolute bottom-5 right-5 bg-secondary text-white font-bold text-sm p-2 rounded-full">
                  {item.con_fecha_inicio
                    ? new Date(item.con_fecha_inicio).toLocaleDateString(
                        "es-ES",
                        { day: "numeric", month: "long" }
                      )
                    : "Sin fecha"}
                </div>
                <div className="absolute bottom-5 left-5 bg-secondary text-white font-bold text-sm p-2 rounded-full">
                  {item.con_fecha_fin
                    ? new Date(item.con_fecha_fin).toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "long",
                      })
                    : "Sin fecha"}
                </div>
              </div>
              <div className="absolute -inset-2 rounded-2xl blur-sm bg-gradient-to-br from-primary to-secondary z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75"></div>
            </div>
          )}
        />
      </section>

      <section className="max-w-screen-xl h-full mx-auto flex flex-col justify-center px-4 md:px-6">
        <Header title="COMUNICADOS">
          <FontAwesomeIcon icon={faBullhorn} className="text-secondary" />
        </Header>
        <SwiperComponent
          items={communications}
          onImageClick={(item) => {
            setSelectedImage(`${BASE_IMAGE_URL}${item.con_foto_portada}`);
            setSelectedAttributes(item);
          }}
          renderItem={(item) => (
            <div>
              <div className="w-full mx-auto relative z-20 scale-75">
                <img
                  src={`${BASE_IMAGE_URL}${item.con_foto_portada}`}
                  className="object-cover shadow-md cursor-pointer rounded-2xl h-100 w-full"
                  alt={item.con_titulo || "Sin título"}
                  onError={(e) => (e.currentTarget.src = "/placeholder.png")}
                />
                <div className="absolute top-5 left-5 bg-primary text-white font-bold text-sm p-2 rounded-2xl">
                  {item.con_titulo || "Sin título"}
                </div>
                <div className="absolute bottom-5 right-5 bg-secondary text-white font-bold text-sm p-2 rounded-full">
                  {item.con_fecha_inicio
                    ? new Date(item.con_fecha_inicio).toLocaleDateString(
                        "es-ES",
                        { day: "numeric", month: "long" }
                      )
                    : "Sin fecha"}
                </div>
                <div className="absolute bottom-5 left-5 bg-secondary text-white font-bold text-sm p-2 rounded-full">
                  {item.con_fecha_fin
                    ? new Date(item.con_fecha_fin).toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "long",
                      })
                    : "Sin fecha"}
                </div>
              </div>
              <div className="absolute -inset-2 rounded-2xl blur-sm bg-gradient-to-br from-primary to-secondary z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75"></div>
            </div>
          )}
        />
      </section>
      <GacetaPage></GacetaPage>
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
                <FontAwesomeIcon icon={faBullhorn} className="text-secondary" />{" "}
                {selectedAttributes.con_titulo}
              </h4>
              <div
                className="text-tertiary text-xs sm:text-base leading-relaxed mb-6"
                dangerouslySetInnerHTML={{
                  __html: selectedAttributes.con_descripcion,
                }}
              />
              <div className="flex flex-wrap gap-2">
                <div className="group inline-flex items-center gap-1 px-3 py-1 bg-secondary text-white text-sm font-medium rounded-full relative">
                  <FontAwesomeIcon icon={faCalendarDays} />
                  {selectedAttributes.con_fecha_inicio
                    ? new Date(
                        selectedAttributes.con_fecha_inicio
                      ).toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })
                    : "Sin fecha"}
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Fecha de inicio
                  </span>
                </div>
                <div className="group inline-flex items-center gap-1 px-3 py-1 bg-primary text-white text-sm font-medium rounded-full relative">
                  <FontAwesomeIcon icon={faCalendarDays} />
                  {selectedAttributes.con_fecha_fin
                    ? new Date(
                        selectedAttributes.con_fecha_fin
                      ).toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })
                    : "Sin fecha"}
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Fecha de fin
                  </span>
                </div>
              </div>
            </div>
          )
        }
      >
        <></>
      </Modal>
    </>
  );
};

export default AnnouncementsPage;
