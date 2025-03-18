"use client";
import {
  faAddressCard,
  faBriefcase,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "@/components/Header";
import FlipCard from "@/components/FlipCard";
import MissionVisionPage from "./mision-vision/page";
import AuthoritiesPage from "./autoridades/page";
// import { motion } from "framer-motion";

/**
 * Componente para mostrar información sobre la carrera de enfermería.
 * Incluye secciones sobre el perfil profesional, campo de trabajo, misión y visión, y autoridades.
 */
const AboutPage = () => {
  return (
    <>
      <section className="max-w-screen-xl h-full flex flex-col justify-center py-24 mx-auto px-4 md:px-6">
        <Header title="Sobre Nosotros">
          <FontAwesomeIcon icon={faBuilding} className="text-secondary" />
        </Header>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <FlipCard
            frontTitle="PERFIL PROFESIONAL"
            frontContent={
              <img
                src="/images/profesional-veterinaria-1.png"
                alt="Perfil Profesional"
                className="w-full h-full object-cover rounded-3xl"
              />
            }
            backTitle="PERFIL PROFESIONAL"
            icon={faAddressCard}
            frontBg="bg-white"
            backBg="bg-primary"
            frontTextColor="text-black"
            backTextColor="text-white"
            backContent={
              <div className="text-sm">
                <p>
                  El Médico Veterinario Zootecnista, formado en la Universidad
                  Pública de El Alto, es un profesional libre de formación
                  universitaria, cuya labor se sintetiza en los siguientes
                  puntos:
                </p>
                <ul>
                  <li>
                    Diseña, analiza, investiga, ejecuta y evalúa las tecnologías
                    apropiadas del sector agropecuario, para resolver problemas
                    críticos de la seguridad y soberanía alimentaria para
                    contribuir al desarrollo económico y social del país.
                  </li>
                  <li>
                    Previene, diagnostica, prescribe y realiza tratamientos
                    apropiados (físico, quimioterapéutico y quirúrgico) de las
                    enfermedades infecciosas, parasitarias, metabólicas y otras
                    en los animales de especies domésticas y exóticas, como
                    también de las zoonosis.
                  </li>
                  <li>
                    Produce y transforma alimentos de origen animal de alto
                    valor biológico para el consumo humano, velando la inocuidad
                    alimentaria realizando la inspección sanitaria de los
                    productos y subproductos en la actividad pública y privada,
                    local, regional y nacional.
                  </li>
                  <li>
                    Planifica de manera eficiente la producción pecuaria con
                    estrategias en el manejo, alimentación, salud animal,
                    reproducción y mejoramiento genético en animales domésticos,
                    como también en animales exóticos.
                  </li>
                  <li>
                    Participa en programas y proyectos agropecuarios relacionado
                    con la conservación del medio ambiente y recursos naturales,
                    en el marco del desarrollo sostenible, demostrando liderazgo
                    gerencial en la gestión gubernamental multidisciplinario.
                  </li>
                  <li>
                    Desempeña actividades de interacción social, extensión
                    agropecuaria, investigación e innovación y emprendimientos
                    que le permite transferir conocimientos técnico-científicos
                    pertinentes a las demandas sociales y necesidades del
                    desarrollo rural y/o urbano en diferentes ecosistemas.
                  </li>
                  <li>
                    Desempeñará funciones en el ámbito de profesional
                    independiente y emprendedor, en el sector privado, público,
                    instituciones académicas de formación, etc. que estén
                    relacionadas con la medicina veterinaria, producción
                    pecuaria y salud pública, manteniendo una actualización
                    constante siempre enmarcados en los valores éticos y
                    morales.
                  </li>
                </ul>
              </div>
            }
          />

          <div>
            <FlipCard
              frontTitle="CAMPO DE TRABAJO PROFESIONAL"
              frontContent={
                <img
                  src="/images/profesional-veterinaria-2.png"
                  alt="Campo de Trabajo Profesional"
                  className="w-full h-full object-cover rounded-3xl"
                />
              }
              backTitle="CAMPO DE TRABAJO PROFESIONAL"
              icon={faBriefcase}
              frontBg="bg-white"
              backBg="bg-secondary"
              frontTextColor="text-gray-800"
              backTextColor="text-black"
              backContent={
                <div className="text-sm">
                  <p>
                    El profesional Medico Veterinario y Zootecnista, puede
                    desempeñar sus actividades profesionales en los siguientes
                    rubros:
                  </p>
                  <p>
                    <strong>Sector publico</strong>
                  </p>
                  <ul>
                    <li>
                      Ministerio de Agricultura- Ganadería y sus diferentes
                      reparticiones
                    </li>
                    <li>
                      Ministerio de Desarrollo sostenible y de Planificación
                    </li>
                    <li>Prefecturas y Gobiernos municipales</li>
                    <li>Ministerio de Salud y Previsión Social</li>
                    <li>
                      Instituciones y centros de Enseñanza y Aprendizaje como
                      ser Universidades e Institutos agropecuarios.
                    </li>
                  </ul>
                  <p>
                    <strong>Sector privado:</strong>
                  </p>
                  <ul>
                    <li>
                      Instituciones Financieras privadas para el Desarrollo
                      Agropecuario
                    </li>
                    <li>
                      Empresas ganaderas Pecuarias de diferentes sistemas de
                      producción
                    </li>
                    <li>
                      Empresas de elaboración de productos y subproductos
                      animales.
                    </li>
                  </ul>
                </div>
              }
            />
            <FlipCard
              frontTitle="OBJETIVO GENERAL"
              frontContent={
                <img
                  src="/images/profesional-veterinaria-3.png"
                  alt="Campo de Trabajo Profesional"
                  className="w-full h-full object-cover rounded-3xl"
                />
              }
              backTitle="OBJETIVO GENERAL"
              icon={faBriefcase}
              frontBg="bg-white"
              backBg="bg-secondary"
              frontTextColor="text-gray-800"
              backTextColor="text-black"
              backContent={
                <div className="text-sm">
                  <p>
                    Formar profesionales altamente capacitados en Medicina
                    Veterinaria y Zootecnia que, mediante la aplicación de
                    conocimientos científicos y técnicos avanzados, sean capaces
                    de diagnosticar, tratar, prevenir y controlar enfermedades
                    en animales domésticos y silvestres, desarrollar e
                    implementar prácticas de producción pecuaria sostenible,
                    contribuir al desarrollo socioeconómico local, regional y
                    nacional, relacionarse de manera efectiva con los actores
                    del sector pecuario respetando el ecosistema y el bienestar
                    animal, y colaborar en la salud pública mediante la
                    prevención y control de enfermedades zoonóticas y la
                    garantía de calidad e inocuidad alimentaria.
                  </p>
                  <p>
                    Este objetivo es general e integral con la formación en
                    diagnóstico, tratamiento y prevención de enfermedades, así
                    mismo la investigación científica, producción sostenible,
                    relaciones interpersonales en el sector pecuario, y
                    contribución a la salud pública.
                  </p>
                </div>
              }
            />
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl h-full md:h-screen flex flex-col justify-center mx-auto px-4 md:px-6">
        {/* <motion.p
          className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mx-auto py-4"
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 2,
            delay: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          Arte, Ciencia y Sabiduría Adelante Enfermería
        </motion.p> */}
        <MissionVisionPage></MissionVisionPage>

        {/* <div className="max-w-screen-xl mx-auto flex justify-center mt-12 md:mt-24 px-4 md:px-6">
          <a
            href="https://serviciopagina.upea.bo//InstitucionUpea/cf51cb33-2279-40da-8f8a-83915fdf2182.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg hover:from-secondary hover:to-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group"
          >
            <FontAwesomeIcon
              icon={faCloudArrowDown}
              className="w-6 h-6 mr-2 text-white group-hover:scale-110 transition-transform"
            />
            Descargar Plan de Estudios
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity rounded-full"></span>
          </a>
        </div> */}
      </section>
      <AuthoritiesPage></AuthoritiesPage>
    </>
  );
};

export default AboutPage;
