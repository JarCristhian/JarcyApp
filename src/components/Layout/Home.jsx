import {Fragment, useRef, useState} from "react";
import {Disclosure, Menu, Transition} from "@headlessui/react";
import {motion, useCycle} from "framer-motion";
import UseDarkMode from "../../hook/UseDarkMode";

const NavBar = () => {
  const [colorTheme, setTheme] = UseDarkMode();

  const modalComponent = window.document.querySelector("#modal-component");
  const modal = window.document.querySelector("#modal-container");

  const openModal = () => {
    showAndHide(modalComponent, ["block", "bg-fadeIn"], ["hidden", "bg-fadeOut"]);
    showAndHide(modal, ["modal-scaleIn"], ["modal-scaleOut"]);
  };

  const closeModal = () => {
    showAndHide(modalComponent, ["bg-fadeOut"], ["bg-fadeIn"]);
    showAndHide(modal, ["modal-scaleOut"], ["modal-scaleIn"]);

    setTimeout(() => {
      showAndHide(modalComponent, ["hidden"], ["block"]);
    }, 300);
  };

  const showAndHide = (element, classtoAdd, classToRemove) => {
    element.classList.remove(...classToRemove);
    element.classList.add(...classtoAdd);
  };

  return (
    <>
      <motion.section
        initial={{y: 150, opacity: [0, 0.3, 0.7, 1]}}
        animate={{y: 0, opacity: [0, 0.3, 0.7, 1]}}
        transition={{opacity: {ease: "linear"}, duration: 0.5}}
        className="text-gray-400 -mt-12"
      >
        <button
          id="open-modal"
          className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
          onClick={() => openModal()}
        >
          Contacto
        </button>

        <div className="container flex flex-wrap lg:w-4/6 sm:mx-auto sm:mb-2 items-center">
          <div className="lg:flex-grow md:w-1/2 flex flex-col items-start text-left px-4 mb-16 md:mb-0">
            <h3 className="ml-2 text-xl text-gray-600 dark:text-white/90">Hola, mi nombre es</h3>
            <h4 className="font-sans font-bold text-7xl text-green-400 mt-2">Jar Cristhian</h4>
            <h4 className="font-sans font-bold text-6xl dark:text-gray-300 mt-2">Frontend Developer</h4>
            <p className="mt-2 mb-6 leading-relaxed">
              Soy Programador de Software apasionado por la programación y adopción de nuevas tecnologías. Creo y diseño{" "}
              <span className="text-green-500 dark:text-green-300">UI</span> & <span className="text-green-500 dark:text-green-300">UX</span> increíbles para el
              usuario. Actualmente enfocado en el desarrollo Web y Móvil.
            </p>
            <div className="flex justify-center ml-2">
              <button className="inline-flex text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg">
                Resumen CV
              </button>
            </div>
          </div>

          <div className="md:w-1/3 items-center">
            <img width={220} className="ml-16 md:-ml-2" src={colorTheme == "dark" ? "../public/logoB.png" : "../public/logoW.png"} />
          </div>

          <div id="modal-component" className="hidden fixed inset-0 ease-in-out duration-300">
            <div className="modal-flex-container flex items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="modal-bg-container fixed inset-0 bg-gray-800 bg-opacity-75"></div>

              <div className="modal-space-container hidden sm:inline-block sm:align-middle sm:h-screen"></div>

              <div
                id="modal-container"
                className="modal-container inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full"
              >
                <div className="modal-wrapper bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ease-in-out duration-300">
                  <div className="modal-wrapper-flex sm:flex sm:items-start">
                    <div className="modal-icon mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-200 sm:mx-0 sm:h-10 sm:w-10"></div>
                    <div className="modal-content">
                      <h3 className="text-xl font-bold text-gray-900 mt-1.5 ml-3">Jarcy Player</h3>
                    </div>
                  </div>
                </div>

                <div className="modal-actions">
                  <button id="close-modal" onClick={() => closeModal()}>
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default NavBar;
