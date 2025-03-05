"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/Card";
import { Authority } from "@/interfaces/interfaces";
import Header from "@/components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from "@/components/LoadingSpinner";

const AuthoritiesPage = () => {
  const [autoridades, setAutoridades] = useState<Authority[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Authority[]>(
          "https://serviciopagina.upea.bo/api/AutoridadAll/20"
        );

        // Validar que los datos sean un array
        if (!Array.isArray(response.data)) {
          throw new Error("Datos obtenidos no son un array.");
        }

        setAutoridades(response.data);
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

  return (
    <section className="max-w-screen-xl mx-auto mt-12 md:mt-24 px-4 md:px-10">
      <Header title="Nuestras Autoridades">
        <FontAwesomeIcon icon={faUsers} className="text-secondary" />
      </Header>
      <ul className="grid gap-8 mx-5 sm:grid-cols-2 md:grid-cols-3">
        {autoridades.map((item) => (
          <li key={item.id_autoridad} className="flex flex-col items-center">
            <Card className="w-full">
              <img
                src={`https://serviciopagina.upea.bo/InstitucionUpea/Autoridad/${item.foto_autoridad}`}
                className="w-full h-60 sm:h-52 md:h-56 object-contain shadow-md"
                alt={item.nombre_autoridad}
              />
              <CardContent>
                <p className="text-primary">{item.nombre_autoridad}</p>
                <p className="text-gray-500">{item.cargo_autoridad}</p>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AuthoritiesPage;
