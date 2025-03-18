import { faFlag, faRocket } from "@fortawesome/free-solid-svg-icons";
import FlipCard from "@/components/FlipCard";

/**
 * Componente para mostrar la misión y visión de la carrera de enfermería.
 */
const MissionVisionPage = () => {
  return (
    <section className="max-w-screen-lg mx-auto mt-12 md:mt-20 px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {/* Misión */}
        <FlipCard
          frontTitle=""
          frontContent={
            <h2 className="font-bold text-6xl text-white">Misión</h2>
          }
          backTitle="Misión"
          backContent={
            <p>
              Formar profesionales en Medicina Veterinaria y Zootecnia con
              capacidades académico-técnico-científicas, valores éticos y un
              fuerte sentido de responsabilidad social; capaces de desempeñarse
              con eficiencia y calidad en áreas de salud, producción y bienestar
              animal, promoviendo prácticas sostenibles que preserven el medio
              ambiente y contribuyan a la seguridad alimentaria y la salud
              pública, en el ámbito regional, nacional e internacional.
            </p>
          }
          icon={faFlag}
          frontBg="bg-gradient-to-r from-primary to-secondary"
          backBg="bg-gradient-to-tr from-secondary to-primary"
          frontTextColor="text-white"
          backTextColor="text-white"
        />

        {/* Visión */}
        <FlipCard
          frontTitle=""
          frontContent={
            <h2 className="font-bold text-6xl text-white">Visión</h2>
          }
          backTitle="Visión"
          backContent={
            <p>
              Consolidarse en ser una institución, organizada, líder y referente
              en la formación de profesionales con excelencia académica capaces
              de resolver problemáticas en ciencias veterinarias y zootécnicas a
              través de la investigación articulando la actualización
              permanente, conocimientos, tecnologías e innovación para
              satisfacer las necesidades y desarrollo del país y consolidarse en
              el ámbito regional, nacional e internacional.
            </p>
          }
          icon={faRocket}
          frontBg="bg-gradient-to-r from-primary to-secondary"
          backBg="bg-gradient-to-tr from-secondary to-primary"
          frontTextColor="text-white"
          backTextColor="text-white"
        />
      </div>
    </section>
  );
};

export default MissionVisionPage;
