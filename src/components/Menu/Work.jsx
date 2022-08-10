import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import { textAnimate } from "../../hook/Animations";
import jPlayer from "../../img/ProjectImg/jPlayer.png";
import asiTable from "../../img/ProjectImg/asiTable.png";
import white from "../../img/ProjectImg/faqture/white.png";
import awaBW from "../../img/ProjectImg/awaBW.png";

const Work = () => {
  return (
    <>
      <motion.div initial={"offscreen"} whileInView={"onscreen"} viewport={{ once: false, amount: 0.5 }} transition={{ staggerChildren: 0.5 }}>
        <motion.div className="relative flex mb-9 items-center" variants={textAnimate}>
          <span className="flex-shrink font-mono ml-6 text-green-300">
            <svg aria-hidden="true" role="img" width="30" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <path fill="currentColor" d="m10 17l5-5l-5-5v10z"></path>
            </svg>
          </span>
          <span className="flex-shrink text-3xl -mt-1 text-green-300">Proyectos</span>
          <div className="flex-grow ml-4 mr-6 border-t border-gray-800"></div>
        </motion.div>

        <div className="ml-4 mr-4">
          <motion.div className="grid gap-4 sm:grid-cols-3 select-none" variants={textAnimate}>
            <div className="dark:bg-gray-800/30 rounded-lg shadow-2xl transition ease-out hover:-translate-y-2">
              <p className="text-gray-700 dark:text-gray-300 p-4 text-lg text-left font-bold">JarcyPlayer</p>
              <p className="text-sm p-3 -mt-5 font-sans text-justify max-w-xs text-slate-400">
                Mi primera aplicación desarrollada en <span className="text-green-500 dark:text-green-300"> C#</span> en el año 2018, en modo de
                aprendizaje con este increible lenguaje de programación.
              </p>
              <div className="relative pb-36">
                <img src={jPlayer} className="rounded-b-lg select-none absolute h-full w-full object-cover" />
              </div>
            </div>
            <div className="dark:bg-gray-800/30 rounded-lg shadow-2xl transition ease-out hover:-translate-y-2">
              <p className="text-gray-700 dark:text-gray-300 p-4 text-lg text-left font-bold">AsiSoft</p>
              <p className="text-sm p-3 -mt-5 font-sans text-justify max-w-xs text-slate-400">
                Sistema Institucional encargado de controlar las asistencias, materias y notas de los alumnos de un Instituto. Desarrollado en{" "}
                <span className="text-green-500 dark:text-green-300"> C#</span> & <span className="text-green-500 dark:text-green-300">SQL.</span>
              </p>
              <div className="relative pb-36">
                <img src={asiTable} className="rounded-b-lg select-none absolute h-full w-full object-cover" />
              </div>
            </div>
            <div className="dark:bg-gray-800/30 rounded-lg shadow-2xl transition ease-out hover:-translate-y-2">
              <p className="text-gray-700 dark:text-gray-300 p-4 text-lg text-left font-bold">Faqture</p>
              <p className="text-sm p-3 -mt-5 font-sans text-justify max-w-xs text-slate-400">
                Sistema intermediario para controlar los comprobantes de pagos emitidos por empresas comerciales. Desarrollado en
                <span className="text-green-500 dark:text-green-300"> JS</span> & <span className="text-green-500 dark:text-green-300">Node JS.</span>
              </p>
              <div className="relative pb-36">
                <img src={white} className="rounded-b-lg select-none absolute h-full w-full object-cover" />
              </div>
            </div>
            <div className="dark:bg-gray-800/30 rounded-lg shadow-2xl transition ease-out hover:-translate-y-2">
              <p className="text-gray-700 dark:text-gray-300 p-4 text-lg text-left font-bold">Awa</p>
              <p className="text-sm p-3 -mt-5 font-sans text-justify max-w-xs text-slate-400">
                Sistema administrativo de socios y predios, con deudas en el servicio de agua y desagüe. Desarrollado en
                <span className="text-green-500 dark:text-green-300"> JS</span> & <span className="text-green-500 dark:text-green-300">Python.</span>
              </p>
              <div className="relative pb-36">
                <img src={awaBW} className="rounded-b-lg select-none absolute h-full w-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Work;
