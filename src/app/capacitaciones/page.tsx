"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SwiperComponent from "@/components/SwiperComponent";
import Header from "@/components/Header";
import { Courses } from "@/interfaces/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faPersonChalkboard,
} from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from "@/components/LoadingSpinner";

// Constantes para centralizar valores repetidos
const BASE_IMAGE_URL = "https://serviciopagina.upea.bo/Cursos/";
const SLIDE_CLASSES = {
  container: "relative m-4 group",
  image: "object-cover shadow-md cursor-pointer rounded-t-2xl h-80 w-full",
  overlay:
    "absolute -inset-2 rounded-2xl blur-sm bg-gradient-to-br from-primary to-secondary z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
  content: "p-4 bg-white rounded-b-2xl",
  title: "text-lg text-gray-800 font-bold",
};

const LearningPage = () => {
  const [courses, setCourses] = useState<Courses[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  const course = courses.filter((item) => item.det_titulo.includes("CURSO"));
  const seminar = courses.filter((item) =>
    item.det_titulo.includes("SEMINARIO")
  );

  return (
    <>
      {/* Sección de Cursos */}
      <section className="max-w-screen-lg mx-auto mt-12 md:mt-24 px-4 md:px-6">
        <Header title="CURSOS">
          <FontAwesomeIcon
            icon={faChalkboardTeacher}
            className="text-secondary"
          />
        </Header>
        <SwiperComponent
          items={course}
          onImageClick={(item) =>
            setSelectedImage(`${BASE_IMAGE_URL}${item.det_img_portada}`)
          }
          renderItem={(item) => (
            <div className={SLIDE_CLASSES.container}>
              <div className="w-full mx-auto relative z-20">
                <img
                  src={`${BASE_IMAGE_URL}${item.det_img_portada}`}
                  className={SLIDE_CLASSES.image}
                  alt={item.det_titulo || "Sin título"}
                  onError={(e) => (e.currentTarget.src = "/placeholder.png")}
                />
                <div className={SLIDE_CLASSES.content}>
                  <p className="text-primary text-xs">
                    Carga Horaria: {item.det_carga_horaria}
                  </p>
                  <p className="text-gray-600 text-xs">
                    Modalidad: {item.det_modalidad}
                  </p>
                </div>
              </div>
              <div className={SLIDE_CLASSES.overlay}></div>
            </div>
          )}
        />
      </section>

      {/* Sección de Seminarios */}
      <section className="max-w-screen-lg mx-auto mt-12 md:mt-20 px-4 md:px-6">
        <Header title="SEMINARIOS">
          <FontAwesomeIcon
            icon={faPersonChalkboard}
            className="text-secondary"
          />
        </Header>
        <SwiperComponent
          items={seminar}
          onImageClick={(item) =>
            setSelectedImage(`${BASE_IMAGE_URL}${item.det_img_portada}`)
          }
          renderItem={(item) => (
            <div className={SLIDE_CLASSES.container}>
              <div className="w-full mx-auto relative z-20">
                <img
                  src={`${BASE_IMAGE_URL}${item.det_img_portada}`}
                  className={SLIDE_CLASSES.image}
                  alt={item.det_titulo || "Sin título"}
                  onError={(e) => (e.currentTarget.src = "/placeholder.png")}
                />
                <div className={SLIDE_CLASSES.content}>
                  <p className="text-primary text-xs">
                    Carga Horaria: {item.det_carga_horaria}
                  </p>
                  <p className="text-gray-600 text-xs">
                    Modalidad: {item.det_modalidad}
                  </p>
                </div>
              </div>
              <div className={SLIDE_CLASSES.overlay}></div>
            </div>
          )}
        />
      </section>

      {/* Modal de Imagen Ampliada */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-full max-h-full"
            alt="Selected"
          />
        </div>
      )}
    </>
  );
};

export default LearningPage;
