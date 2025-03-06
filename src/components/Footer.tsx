import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type FooterNavItem = {
  href: string;
  name: string;
};

type FooterNav = {
  label: string;
  items: FooterNavItem[];
};

const Footer = () => {
  const footerNavs: FooterNav[] = [
    {
      label: "Enlaces Rápidos",
      items: [
        {
          href: "/nuestra-carrera",
          name: "Nuestra Carrera",
        },
        {
          href: "/comunicados",
          name: "Comunicados",
        },
        {
          href: "/capacitaciones",
          name: "Capacitaciones",
        },
        {
          href: "/contactos",
          name: "Contactos",
        },
        {
          href: "/enlaces",
          name: "Enlaces",
        },
      ],
    },
  ];

  return (
    <footer className="bg-tertiary mt-10 ">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 pt-4 md:grid-cols-3 gap-8">
          <div className="flex flex-col my-4 text-center justify-center">
            <a href="#" className="flex justify-center">
              <Image
                src="/images/logo-veterinaria.png"
                alt="logo"
                width={80}
                height={80}
              />
            </a>
            <div className="mt-6 text-sm">
              <a
                href="https://www.google.com/maps/place/Universidad+P%C3%BAblica+de+El+Alto/@-16.4921601,-68.1957242,16.85z/data=!4m6!3m5!1s0x915ede3378ea9d6d:0x26cac4a2caefcb29!8m2!3d-16.4918116!4d-68.1937045!16s%2Fg%2F12301wft?entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="hover:text-cyan-500"
              >
                <FontAwesomeIcon icon={faLocationDot} /> Av. Sucre Z. Villa
                Esperanza,Upea Bloque B Piso 3
              </a>
              <br />
              <a
                href="mailto:institutoagronomia@gmail.com"
                className="hover:text-cyan-500"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                institutoagronomia@gmail.com
              </a>
            </div>
          </div>
          {footerNavs.map((item, idx) => (
            <div key={idx} className="text-center">
              <h4 className="text-gray-200 font-semibold mb-4">{item.label}</h4>
              <ul className="space-y-4 text-gray-300">
                {item.items.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="duration-150 hover:text-cyan-500"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col my-4 text-center justify-center">
            <a
              href="https://utic.upea.bo/"
              className="flex justify-center"
              target="_blank"
            >
              <Image
                src="/images/utic-logo.jpg"
                alt="logo"
                width={80}
                height={80}
                className="rounded-full"
              />
            </a>
            <div className="text-sm mt-6">
              <a
                href="https://www.google.com/maps/place/Edificio+Tecnol%C3%B3gico+Torre+A+(Carrera+de+Ingenier%C3%ADa+de+Sistemas)/@-16.493577,-68.1944837,17.57z/data=!4m14!1m7!3m6!1s0x915edf2ef2781625:0x50e28825b5c88bcc!2sCarrera+de+Enfermer%C3%ADa+-+UPEA!8m2!3d-16.4893164!4d-68.1931985!16s%2Fg%2F11gmzvxy2x!3m5!1s0x915edf53a9c8ea57:0x1a3fe3118e4703f8!8m2!3d-16.4933015!4d-68.1937855!16s%2Fg%2F11l22gx212?entry=ttu&g_ep=EgoyMDI1MDIxOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="hover:text-cyan-500"
              >
                <FontAwesomeIcon icon={faLocationDot} /> Villa Esperanza Av.
                Sucre A - Edificio Torre A Piso 2
              </a>
              <br />
              <a href="mailto:U-TIC@gmail.com" className="hover:text-cyan-500">
                <FontAwesomeIcon icon={faEnvelope} /> U-TIC@gmail.com
              </a>
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-center mt-2">
          ©U-TIC 2025 | Desarrollado por
          <a
            href="https://www.linkedin.com/in/david-mamani-a3b745352/"
            target="_blank"
            className="hover:text-cyan-500"
          >
            {" "}
            RubenDavidMA
          </a>
          <span className="hidden">G</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
