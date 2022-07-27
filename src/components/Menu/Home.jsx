import { Fragment, useRef, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { motion, useCycle } from "framer-motion";
import UseDarkMode from "../../hook/UseDarkMode";

const NavBar = () => {
  const [colorTheme, setTheme] = UseDarkMode();
  return (
    <>
      <motion.section
        initial={{ y: 150, opacity: [0, 0.3, 0.7, 1] }}
        animate={{ y: 0, opacity: [0, 0.3, 0.7, 1] }}
        transition={{ opacity: { ease: "linear" }, duration: 0.5 }}
        className="text-gray-400 -mt-12"
      >
        <div className="container flex flex-wrap lg:w-4/6 sm:mx-auto sm:mb-2 items-center">
          <div className="lg:flex-grow md:w-1/2 flex flex-col items-start text-left px-4 mb-16 md:mb-0">
            <h3 className="ml-2 text-xl text-gray-600 dark:text-white/90">Hola, mi nombre es</h3>
            <h4 className="font-sans font-bold text-7xl text-green-400 mt-2">Jar Cristhian</h4>
            <h4 className="font-sans font-bold text-6xl dark:text-gray-300 mt-2">Frontend Developer</h4>
            <p className="mt-2 mb-6 leading-relaxed">
              Soy Programador de Software apasionado por la programación y adopción de nuevas tecnologías. Creo y diseño{" "}
              <span className="text-green-500 dark:text-green-300">UI</span> & <span className="text-green-500 dark:text-green-300">UX</span>{" "}
              increíbles para el usuario. Actualmente enfocado en el desarrollo Web y Móvil.
            </p>
            <div className="flex justify-center ml-2">
              <button className="inline-flex text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg">
                Resumen CV
              </button>
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Contacto
              </button>
            </div>
          </div>

          <div className="md:w-1/3 items-center">
            <img width={220} className="ml-16 md:-ml-2" src={colorTheme == "dark" ? "../public/logoB.png" : "../public/logoW.png"} />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default NavBar;
