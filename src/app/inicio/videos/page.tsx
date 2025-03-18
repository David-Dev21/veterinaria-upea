"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Video } from "@/interfaces/interfaces";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "@/components/Header";
import LoadingSpinner from "@/components/LoadingSpinner";

/**
 * Componente para mostrar una lista de videos.
 * Realiza una solicitud a la API para obtener los videos y los muestra en una cuadrícula.
 * Muestra un componente de carga mientras se obtienen los datos y un mensaje de error si ocurre un problema.
 */
const VideosPage = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Video[]>(
          "https://serviciopagina.upea.bo/api/VideosAll/20"
        );
        if (!Array.isArray(response.data)) {
          throw new Error("Los datos recibidos no son un array.");
        }
        setVideos(response.data);
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
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  return (
    <section className="max-w-screen-xl h-full mx-auto flex flex-col justify-center items-center px-4 md:px-6">
      <Header title="Videos">
        <FontAwesomeIcon icon={faVideo} className="text-secondary" />
      </Header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div
            key={video.video_id}
            className="bg-white shadow-md rounded-lg p-4"
          >
            <iframe
              width="100%"
              height="200"
              src={video.video_enlace}
              title={video.video_titulo}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
            <h2 className="text-lg text-gray-800 font-bold mt-2 text-center">
              {video.video_titulo}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideosPage;
