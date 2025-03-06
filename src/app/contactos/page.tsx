"use client";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/Card";
import {
  faFacebook,
  faTiktok,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAddressBook,
  faClock,
  faEnvelope,
  faIdCardClip,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactsPage = () => {
  return (
    <section className="max-w-screen-xl mt-24 mx-auto px-4 md:px-10">
      <Header title="Contactate con Nosotros">
        <FontAwesomeIcon icon={faIdCardClip} className="text-secondary" />
      </Header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="w-full text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="w-2/3 mx-auto">
            <CardContent className="text-primary hover:text-secondary">
              <h2 className="text-center text-2xl font-semibold mb-2">
                <FontAwesomeIcon icon={faClock} /> Horarios de Atención
              </h2>
              <div className="text-center text-lg text-gray-600 ">
                <p>Lunes a Viernes</p>
                <p>8:30 AM - 12:30 PM</p>
                <p>14:00 PM - 5:30 PM</p>
              </div>
            </CardContent>
          </Card>
          <Card className="w-2/3 mx-auto mt-4">
            <CardContent className="text-primary hover:text-secondary">
              <h2 className="text-center text-2xl font-semibold mb-2">
                <FontAwesomeIcon icon={faAddressBook} /> Contactos
              </h2>
              <div className="text-center text-lg text-gray-600 ">
                <p>
                  <FontAwesomeIcon icon={faPhone} /> 71932405 -
                  <FontAwesomeIcon icon={faPhone} /> 71932405
                </p>
                <p></p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} />
                  institutoagronomia@gmail.com
                </p>
              </div>
            </CardContent>
          </Card>
          <motion.div
            className="flex justify-around mt-4 w-2/3 mx-auto text-3xl"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <a
              href="https://www.facebook.com/profile.php?id=100083148521221&locale=es_LA"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=59171932405"
              target="_blank"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-green-600" />
            </a>
            <a
              href="https://www.tiktok.com/@medicinaveterina_upea"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTiktok} className="text-gray-600" />
            </a>
          </motion.div>
        </motion.div>
        <div className="max-w-xl w-full text-sm">
          <iframe
            title="Google Maps"
            className="w-full h-96 rounded-3xl shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.678553338397!2d-68.19589318451965!3d-16.491806444888784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915ede3378ea9d6d%3A0x26cac4a2caefcb29!2sUniversidad%20P%C3%BAblica%20de%20El%20Alto!5e0!3m2!1ses!2sbo!4v1621349240107!5m2!1ses!2sbo"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactsPage;
