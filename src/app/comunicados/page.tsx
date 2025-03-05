'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SwiperComponent from '@/components/SwiperComponent';
import Header from '@/components/Header';
import { Announcement } from '@/interfaces/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBullhorn, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import LoadingSpinner from '@/components/LoadingSpinner';
config.autoAddCss = true;

const BASE_IMAGE_URL = 'https://serviciopagina.upea.bo/Convocatorias/';

const AnnouncementsPage = () => {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get<Announcement[]>('https://serviciopagina.upea.bo/api/convocatoriasAll/17');
                if (!Array.isArray(response.data)) {
                    throw new Error('Los datos recibidos no son un array.');
                }
                setAnnouncements(response.data);
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
        return <LoadingSpinner></LoadingSpinner>
    }

    if (error) {
        return <p className="text-center mt-10 text-red-500">{error}</p>;
    }

    const calls = announcements.filter((item) => item.con_titulo === 'CONVOCATORIA');
    const notices = announcements.filter((item) => item.con_titulo === 'AVISO');
    const communications = announcements.filter((item) => item.con_titulo === 'COMUNICADO');

    return (
        <>
            {/* Convocatorias */}
            <section className="max-w-screen-lg mx-auto mt-12 md:mt-20 px-4 md:px-6">
                <Header title="CONVOCATORIAS">
                    <FontAwesomeIcon icon={faCalendarDays} className="text-secondary" />
                </Header>
                <SwiperComponent
                    items={calls}
                    onImageClick={(item) => setSelectedImage(`${BASE_IMAGE_URL}${item.con_foto_portada}`)}
                    renderItem={(item) => (
                        <div className="relative m-4 group">
                            <div className="w-full mx-auto relative z-20">
                                <img
                                    src={`${BASE_IMAGE_URL}${item.con_foto_portada}`}
                                    className="object-cover shadow-md cursor-pointer rounded-t-2xl h-80 w-full"
                                    alt={item.con_titulo || 'Sin título'}
                                    onError={(e) => (e.currentTarget.src = '/placeholder.png')}
                                />
                                <div className="p-4 bg-white rounded-b-2xl">
                                    <p className="text-center text-gray-500 mt-2">Fecha Inicio: {new Date(item.con_fecha_inicio).toLocaleDateString()}</p>
                                    <p className="text-center text-gray-500">Fecha Fin: {new Date(item.con_fecha_fin).toLocaleDateString()}</p>
                                </div>
                            </div>
                            <div className="absolute -inset-2 rounded-2xl blur-sm bg-gradient-to-br from-primary to-secondary z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    )}
                />
            </section>

            {/* Avisos */}
            <section className="max-w-screen-lg mx-auto mt-12 md:mt-20 px-4 md:px-6">
                <Header title="AVISOS">
                    <FontAwesomeIcon icon={faBell} className="text-secondary" />
                </Header>
                <SwiperComponent
                    items={notices}
                    onImageClick={(item) => setSelectedImage(`${BASE_IMAGE_URL}${item.con_foto_portada}`)}
                    renderItem={(item) => (
                        <div className="relative m-4 group">
                            <div className="w-full mx-auto relative z-20">
                                <img
                                    src={`${BASE_IMAGE_URL}${item.con_foto_portada}`}
                                    className="object-cover shadow-md cursor-pointer rounded-t-2xl h-80 w-full"
                                    alt={item.con_titulo || 'Sin título'}
                                    onError={(e) => (e.currentTarget.src = '/placeholder.png')}
                                />
                                <div className="p-4 bg-white rounded-b-2xl">
                                    <div className="text-center text-gray-500 mt-2" dangerouslySetInnerHTML={{ __html: item.con_descripcion }} />
                                </div>
                            </div>
                            <div className="absolute -inset-2 rounded-2xl blur-sm bg-gradient-to-br from-primary to-secondary z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    )}
                />
            </section>

            {/* Comunicados */}
            <section className="max-w-screen-lg mx-auto mt-12 md:mt-20 px-4 md:px-6">
                <Header title="COMUNICADOS">
                    <FontAwesomeIcon icon={faBullhorn} className="text-secondary" />
                </Header>
                <SwiperComponent
                    items={communications}
                    onImageClick={(item) => setSelectedImage(`${BASE_IMAGE_URL}${item.con_foto_portada}`)}
                    renderItem={(item) => (
                        <div className="relative m-4 group">
                            <div className="w-full mx-auto relative z-20">
                                <img
                                    src={`${BASE_IMAGE_URL}${item.con_foto_portada}`}
                                    className="object-cover shadow-md cursor-pointer rounded-t-2xl h-80 w-full"
                                    alt={item.con_titulo || 'Sin título'}
                                    onError={(e) => (e.currentTarget.src = '/placeholder.png')}
                                />
                                <div className="p-4 bg-white rounded-b-2xl">
                                    <div className="text-center text-gray-500 mt-2" dangerouslySetInnerHTML={{ __html: item.con_descripcion }} />
                                </div>
                            </div>
                            <div className="absolute -inset-2 rounded-2xl blur-sm bg-gradient-to-br from-primary to-secondary z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    )}
                />
            </section>

            {/* Modal para imagen seleccionada */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} className="max-w-full max-h-full" alt="Selected" />
                </div>
            )}
        </>
    );
};

export default AnnouncementsPage;