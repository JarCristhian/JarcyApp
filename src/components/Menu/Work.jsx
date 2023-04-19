import { useState } from "react";
import { motion } from "framer-motion";
import { textAnimate } from "../../hook/Animations";
import Modal from "../Layout/Modal";
import zenda from "../../img/projects/zenda/purchase.jpg";
import asiSoft from "../../img/projects/asiSoft/asiSoft.png";
import empiria from "../../img/projects/empiria/empiria.png";
import faqture from "../../img/projects/faqture/faqture.png";
import awa from "../../img/projects/awa/awa.png";

const Work = () => {
  const [open, setopen] = useState(false);
  const [projectName, setProjectName] = useState("");

  const showModal = (name) => {
    setProjectName(name);
    setopen(!open);
  };

  return (
    <>
      <motion.div initial={"offscreen"} whileInView={"onscreen"} viewport={{ once: true, amount: 0.3 }} transition={{ staggerChildren: 0.5 }}>
        <motion.div className="flex mb-9 items-center" variants={textAnimate}>
          <span className="flex-shrink font-mono ml-6 text-green-300">
            <svg aria-hidden="true" role="img" width="30" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <path fill="currentColor" d="m10 17l5-5l-5-5v10z"></path>
            </svg>
          </span>
          <span className="flex-shrink text-3xl -mt-1 text-green-300">Proyectos</span>
          <div className="flex-grow ml-4 mr-6 border-t border-gray-300 dark:border-gray-800"></div>
        </motion.div>

        <div className="ml-4 mr-4">
          <motion.div className="grid gap-4 sm:grid-cols-3" variants={textAnimate}>
            <div className="bg-white dark:bg-gray-800/30 rounded-lg shadow-2xl transition ease-out hover:-translate-y-2">
              <p className="text-gray-600 dark:text-gray-300 p-4 text-lg text-left font-semibold tracking-widest">AsiSoft</p>
              <p className="text-sm p-3 -mt-5 font-sans text-justify max-w-xs text-slate-400">
                Sistema Institucional encargado de controlar las asistencias, materias y notas de los alumnos de un Instituto. Desarrollado en{" "}
                <span className="text-green-500 dark:text-green-300"> C#</span> & <span className="text-green-500 dark:text-green-300">SQL.</span>
              </p>
              <div className="relative pb-36" onClick={() => showModal("AsiSoft")}>
                <img src={asiSoft} draggable={false} className="rounded-b-lg cursor-pointer select-none absolute h-full w-full object-cover" />
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800/30 rounded-lg shadow-2xl transition ease-out hover:-translate-y-2">
              <p className="text-gray-600 dark:text-gray-300 p-4 text-lg text-left font-semibold tracking-widest">Empiria</p>
              <p className="text-sm p-3 -mt-5 font-sans text-justify max-w-xs text-slate-400">
                Sistema de Laboratorio Clinico especializado en controlar comprobantes de pago y resultados de examenes. Desarrollado en
                <span className="text-green-500 dark:text-green-300"> JS</span> & <span className="text-green-500 dark:text-green-300">Python.</span>
              </p>
              <div className="relative pb-36" onClick={() => showModal("Empiria")}>
                <img src={empiria} draggable={false} className="rounded-b-lg cursor-pointer  select-none absolute h-full w-full object-cover" />
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800/30 rounded-lg shadow-2xl transition ease-out hover:-translate-y-2">
              <p className="text-gray-600 dark:text-gray-300 p-4 text-lg text-left font-semibold tracking-widest">Faqture</p>
              <p className="text-sm p-3 -mt-5 font-sans text-justify max-w-xs text-slate-400">
                Sistema intermediario para controlar los comprobantes de pagos emitidos por empresas comerciales. Desarrollado en
                <span className="text-green-500 dark:text-green-300"> JS</span> & <span className="text-green-500 dark:text-green-300">Node JS.</span>
              </p>
              <div className="relative pb-36" onClick={() => showModal("Faqture")}>
                <img src={faqture} draggable={false} className="rounded-b-lg cursor-pointer  select-none absolute h-full w-full object-cover" />
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800/30 rounded-lg shadow-2xl transition ease-out hover:-translate-y-2">
              <p className="text-gray-600 dark:text-gray-300 p-4 text-lg text-left font-semibold tracking-widest">Awa</p>
              <p className="text-sm p-3 -mt-5 font-sans text-justify max-w-xs text-slate-400">
                Sistema administrativo de socios y predios, con deudas en el servicio de agua y desagüe. Desarrollado en
                <span className="text-green-500 dark:text-green-300"> JS</span> & <span className="text-green-500 dark:text-green-300">Python.</span>
              </p>
              <div className="relative pb-36" onClick={() => showModal("Awa")}>
                <img src={awa} draggable={false} className="rounded-b-lg cursor-pointer  select-none absolute h-full w-full object-cover" />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800/30 rounded-lg shadow-2xl transition ease-out hover:-translate-y-2">
              <p className="text-gray-600 dark:text-gray-300 p-4 text-lg text-left font-semibold tracking-widest">Zenda</p>
              <p className="text-sm p-3 -mt-5 font-sans text-justify max-w-xs text-slate-400">
                Sistema Comercial encargado de generar/administrar comprobantes electronicos, y administrar almacen. Desarrollado en
                <span className="text-green-500 dark:text-green-300"> JS</span> & <span className="text-green-500 dark:text-green-300">Python.</span>
              </p>
              <div className="relative pb-36" onClick={() => showModal("Zenda")}>
                <img src={zenda} draggable={false} className="rounded-b-lg cursor-pointer  select-none absolute h-full w-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {open && <Modal name={projectName} show={showModal} />}
    </>
  );
};

export default Work;
