import { motion } from "framer-motion";
import logo from "../../img/logo.png";

const NavBar = () => {
  return (
    <>
      <motion.section
        initial={{ y: 150, opacity: [0, 0.3, 0.7, 1] }}
        animate={{ y: 0, opacity: [0, 0.3, 0.7, 1] }}
        transition={{ opacity: { ease: "linear" }, duration: 0.5 }}
        className="text-gray-400"
      >
        <div className="container flex flex-wrap lg:mr-40 lg:w-4/6 sm:mx-auto items-center">
          <div className="lg:flex-grow md:w-1/2 flex flex-col items-start text-left px-4 mb-16 md:mb-0">
            <h3 className="ml-2 text-xl text-gray-400 dark:text-white/90 select-none">Hola, mi nombre es</h3>
            <h4 className="font-sans font-bold text-7xl text-green-400 select-none mt-2">Jar Cristhian</h4>
            <h4 className="font-sans font-bold text-6xl dark:text-gray-300 select-none mt-2">Frontend Developer</h4>
            <p className="mt-2 mb-6 leading-relaxed">
              Soy Programador de Software apasionado por la programación y adopción de nuevas tecnologías. Creo y diseño{" "}
              <span className="text-green-500 dark:text-green-300">UI</span> & <span className="text-green-500 dark:text-green-300">UX</span>{" "}
              increíbles para el usuario. Actualmente enfocado en el desarrollo Web y Móvil.
            </p>
            <div className="flex justify-center ml-2">
              <button className="inline-flex text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg">
                Resumen
                <svg className="ml-1 mt-1" width="22" height="22" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 15.575q-.2 0-.375-.063q-.175-.062-.325-.212l-3.6-3.6q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.712-.288q.438-.012.713.263L11 12.15V5q0-.425.288-.713Q11.575 4 12 4t.713.287Q13 4.575 13 5v7.15l1.875-1.875q.275-.275.713-.263q.437.013.712.288q.275.275.275.7q0 .425-.275.7l-3.6 3.6q-.15.15-.325.212q-.175.063-.375.063ZM6 20q-.825 0-1.412-.587Q4 18.825 4 18v-2q0-.425.287-.713Q4.575 15 5 15t.713.287Q6 15.575 6 16v2h12v-2q0-.425.288-.713Q18.575 15 19 15t.712.287Q20 15.575 20 16v2q0 .825-.587 1.413Q18.825 20 18 20Z"
                  />
                </svg>
              </button>
              <a
                href="#contact"
                draggable={false}
                className="ml-4 inline-flex text-white bg-gray-400 dark:bg-gray-800/80 border-0 py-2 px-6 focus:outline-none select-none dark:hover:bg-gray-800/90 hover:text-white rounded text-lg"
              >
                Contacto
              </a>
            </div>
          </div>

          <div className="md:w-1/3 items-center select-none">
            <img width={220} draggable={false} className="ml-16 md:-ml-2" src={logo} />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default NavBar;
