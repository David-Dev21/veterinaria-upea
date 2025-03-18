"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SwiperComponent from "@/components/SwiperComponent";
import Header from "@/components/Header";
import { Courses } from "@/interfaces/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faChalkboardTeacher,
  faPersonChalkboard,
  faMapMarkerAlt,
  faLaptop,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from "@/components/LoadingSpinner";
import Modal from "@/components/Modal";

// Constantes para centralizar valores repetidos
const BASE_IMAGE_URL = "https://serviciopagina.upea.bo/Cursos/";

const LearningPage = () => {
  const [courses, setCourses] = useState<Courses[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [selectedAttributes, setSelectedAttributes] = useState<Courses | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Courses[]>(
          "https://serviciopagina.upea.bo/api/cursosAll/17"
        );
        if (!Array.isArray(response.data)) {
          throw new Error("Los datos recibidos no son un array.");
        }
        setCourses(response.data);
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

  const course = courses.filter((item) => item.det_titulo.includes("CURSO"));
  const seminar = courses.filter((item) =>
    item.det_titulo.includes("SEMINARIO")
  );

  return (
    <>
      {/* Sección de Cursos */}
      <section className="max-w-screen-xl h-full flex flex-col justify-center mx-auto pt-24 px-4 md:px-6">
        <Header title="CURSOS">
          <FontAwesomeIcon
            icon={faChalkboardTeacher}
            className="text-secondary"
          />
        </Header>
        <SwiperComponent
          items={course}
          onImageClick={(item) => {
            setSelectedImage(`${BASE_IMAGE_URL}${item.det_img_portada}`);
            setSelectedAttributes(item);
          }}
          renderItem={(item) => (
            <div>
              <div className="w-full mx-auto relative z-20 scale-75">
                <img
                  src={`${BASE_IMAGE_URL}${item.det_img_portada}`}
                  className="object-cover shadow-md cursor-pointer rounded-2xl h-100 w-full"
                  alt={item.det_titulo || "Sin título"}
                  onError={(e) => (e.currentTarget.src = "/placeholder.png")}
                />
                <div className="absolute top-5 left-5 bg-primary text-white font-bold text-sm p-2 rounded-2xl">
                  {item.det_modalidad || "Sin título"}
                </div>
                <div className="absolute bottom-5 right-5 bg-secondary text-white font-bold text-sm p-2 rounded-full">
                  {item.det_fecha_ini
                    ? new Date(item.det_fecha_ini).toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "long",
                      })
                    : "Sin fecha"}
                </div>
                <div className="absolute bottom-5 left-5 bg-secondary text-white font-bold text-sm p-2 rounded-full">
                  {item.det_fecha_fin
                    ? new Date(item.det_fecha_fin).toLocaleDateString("es-ES", {
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

      {/* Sección de Seminarios */}
      <section className="max-w-screen-xl h-full flex flex-col justify-center mx-auto px-4 md:px-6">
        <Header title="SEMINARIOS">
          <FontAwesomeIcon
            icon={faPersonChalkboard}
            className="text-secondary"
          />
        </Header>
        <SwiperComponent
          items={seminar}
          onImageClick={(item) => {
            setSelectedImage(`${BASE_IMAGE_URL}${item.det_img_portada}`);
            setSelectedAttributes(item);
          }}
          renderItem={(item) => (
            <div>
              <div className="w-full mx-auto relative z-20 scale-75">
                <img
                  src={`${BASE_IMAGE_URL}${item.det_img_portada}`}
                  className="object-cover shadow-md cursor-pointer rounded-2xl h-100 w-full"
                  alt={item.det_titulo || "Sin título"}
                  onError={(e) => (e.currentTarget.src = "/placeholder.png")}
                />
                <div className="absolute top-5 left-5 bg-primary text-white font-bold text-sm p-2 rounded-2xl">
                  {item.det_modalidad || "Sin título"}
                </div>
                <div className="absolute bottom-5 right-5 bg-secondary text-white font-bold text-sm p-2 rounded-full">
                  {item.det_fecha_ini
                    ? new Date(item.det_fecha_ini).toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "long",
                      })
                    : "Sin fecha"}
                </div>
                <div className="absolute bottom-5 left-5 bg-secondary text-white font-bold text-sm p-2 rounded-full">
                  {item.det_fecha_fin
                    ? new Date(item.det_fecha_fin).toLocaleDateString("es-ES", {
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

      {/* Modal de Imagen Ampliada */}
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
                  icon={faChalkboardTeacher}
                  className="text-secondary"
                />{" "}
                {selectedAttributes.det_titulo}
              </h4>
              {/* Descripción */}
              <div
                className="text-tertiary text-xs sm:text-base leading-relaxed mb-6"
                dangerouslySetInnerHTML={{
                  __html: selectedAttributes.det_descripcion,
                }}
              />

              {/* Detalles adicionales con badges e íconos */}
              <div className="flex flex-wrap gap-2">
                {/* Fecha de inicio */}
                <div className="group inline-flex items-center gap-1 px-3 py-1 bg-secondary text-white text-sm font-medium rounded-full relative">
                  <FontAwesomeIcon icon={faCalendarDays} />
                  {selectedAttributes.det_fecha_ini
                    ? new Date(
                        selectedAttributes.det_fecha_ini
                      ).toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })
                    : "Sin fecha"}
                  {/* Tooltip */}
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Fecha de inicio
                  </span>
                </div>

                {/* Fecha de fin */}
                <div className="group inline-flex items-center gap-1 px-3 py-1 bg-primary text-white text-sm font-medium rounded-full relative">
                  <FontAwesomeIcon icon={faCalendarDays} />
                  {selectedAttributes.det_fecha_fin
                    ? new Date(
                        selectedAttributes.det_fecha_fin
                      ).toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })
                    : "Sin fecha"}
                  {/* Tooltip */}
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Fecha de fin
                  </span>
                </div>

                {/* Costo */}
                <div className="group inline-flex items-center gap-1 px-3 py-1 bg-cyan-500 text-white text-sm font-medium rounded-full relative">
                  <FontAwesomeIcon icon={faMoneyBillWave} />
                  {selectedAttributes.det_costo
                    ? `${selectedAttributes.det_costo} Bs`
                    : "Sin costo"}
                  {/* Tooltip */}
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Costo
                  </span>
                </div>

                {/* Lugar */}
                <div className="group inline-flex items-center gap-1 px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full relative">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  {selectedAttributes.det_lugar_curso || "Sin lugar"}
                  {/* Tooltip */}
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Lugar
                  </span>
                </div>

                {/* Modalidad */}
                <div className="group inline-flex items-center gap-1 px-3 py-1 bg-purple-500 text-white text-sm font-medium rounded-full relative">
                  <FontAwesomeIcon icon={faLaptop} />
                  {selectedAttributes.det_modalidad || "Sin modalidad"}
                  {/* Tooltip */}
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Modalidad
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

export default LearningPage;
