"use client"; // Añade esta línea al principio del archivo
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import ButtonLink from './ButtonLink';


export default function NavBar() {
    const [state, setState] = useState(false);
    const pathname = usePathname();

    const navigation = [
        { title: "Inicio", path: "/" },
        { title: "Nuestra Carrera", path: "/nuestra-carrera" },
        { title: "Comunicados", path: "/comunicados" },
        { title: "Contactos", path: "/contactos" },
        { title: "Capacitaciones", path: "/capacitaciones" },
        { title: "Enlaces", path: "/enlaces" }
    ];

    return (
        <nav className="bg-white bg-opacity-90 w-3/4 fixed top-4 left-1/2 transform -translate-x-1/2 z-50 border-b shadow-lg rounded-lg mx-4">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between md:py-3 md:block">
                    <a href="/" className="flex items-center h-full">
                        <img src="/images/logo-veterinaria.png" alt="logo" className="h-full max-h-12" />
                    </a>
                    <div className="md:hidden">
                        <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => (
                                <li key={idx} className={`text-gray-600 hover:text-primary hover:border-b-4 hover:border-secondary  ${pathname === item.path ? 'bg-secondary text-terciary p-2 rounded-2xl hover:border-none' : ''}`}>
                                    <a href={item.path}>
                                        {item.title}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="hidden md:inline-block">
                    <ButtonLink href={"https://administracionpaginas.upea.edu.bo/login"}>
                        Iniciar Sesion
                    </ButtonLink>
                </div>
            </div>
        </nav>
    );
}