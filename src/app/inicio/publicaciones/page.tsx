'use client'; // Asegúrate de incluir este comentario para usar hooks de React
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Publication } from '@/interfaces/interfaces';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '@/components/Header';
import SwiperComponent from '@/components/SwiperComponent';

const BASE_IMAGE_URL = 'https://serviciopagina.upea.bo/Publicaciones/';

const PublicationsPage = () => {
    const [publications, setPublications] = useState<Publication[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get<Publication[]>('https://serviciopagina.upea.bo/api/publicacionesAll/20');
                if (!Array.isArray(response.data)) {
                    throw new Error('Los datos recibidos no son un array.');
                }
                setPublications(response.data);
            } catch (error) {
                setError(`Error: ${error instanceof Error ? error.message : 'Ocurrió un error desconocido.'}`);
                console.error('Error al obtener los datos:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <p className="text-center mt-10">Cargando publicaciones...</p>;
    }

    if (error) {
        return <p className="text-center mt-10 text-red-500">{error}</p>;
    }

    return (
        <>
            <section className="max-w-screen-lg mx-auto mt-12 md:mt-28 px-4 md:px-6">
                <Header title='Publicaciones'>
                    <FontAwesomeIcon icon={faNewspaper} className="text-secondary" />
                </Header>
                <SwiperComponent
                    items={publications}
                    onImageClick={(item) => setSelectedImage(`${BASE_IMAGE_URL}${item.publicaciones_imagen}`)}
                    renderItem={(item) => (
                        <div>
                            <div className="w-full mx-auto relative z-20">
                                <img
                                    src={`${BASE_IMAGE_URL}${item.publicaciones_imagen}`}
                                    className="object-cover shadow-md cursor-pointer rounded-t-2xl h-96 w-full"
                                    alt={item.publicaciones_titulo || 'Sin título'}
                                    onError={(e) => (e.currentTarget.src = '/placeholder.png')}
                                />
                                <div className="p-4 bg-white rounded-b-2xl">
                                    <h2 className="text-lg text-gray-800 font-bold">{item.publicaciones_titulo || 'Sin título'}</h2>
                                </div>
                            </div>
                            <div className="absolute -inset-2 rounded-2xl blur-sm bg-gradient-to-br from-primary to-secondary z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    )}
                />
            </section>
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} className="max-w-full max-h-full" alt="Selected" />
                </div>
            )}
        </>
    );
};

export default PublicationsPage;