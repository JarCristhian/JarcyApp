import { motion } from "framer-motion";
import { imageAnimate, textAnimate } from "../../hook/Animations";
import profile from "../../img/yo.jpg";
import { useEffect, useState } from "react";

const About = () => {
  const [age, setAge] = useState(0);

  const myAge = () => {
    let myYear = 2000;
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let myDay = year - myYear - 1;
    if (month > 4) {
      myDay = year - myYear;
    }
    return myDay;
  };

  useEffect(() => {
    setAge(myAge());
  }, []);
  return (
    <>
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.3 }}
        className="max-w-xl mx-auto md:max-w-3xl mt-44"
      >
        <motion.div className="flex py-4 items-center" variants={textAnimate}>
          <span className="flex-shrink font-mono ml-6 text-green-300">
            <svg aria-hidden="true" role="img" width="30" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <path fill="currentColor" d="m10 17l5-5l-5-5v10z"></path>
            </svg>
          </span>
          <h2 className="flex-shrink text-3xl -mt-1 text-green-300">Sobre Mi</h2>
          <div className="flex-grow ml-4 mr-6 border-t border-gray-300 dark:border-gray-800"></div>
        </motion.div>

        <div className="md:flex">
          <motion.div className="p-6" variants={textAnimate}>
            <div className="flex items-baseline mt-4 pb-2 border-b border-gray-300 dark:border-gray-800">
              <p className="text-sm text-justify max-w-md font-sans text-slate-400">
                Hola, mi nombre es Jar Cristhian Ramos Trigoso, tengo {age} años, proveniente de SanMartin/Perú. Mi pasión por la programación comenzo
                cuando tenia 12 años, fue cuando inicie a usar una computadora y al poco tiempo me propuse a estudiar alguna profesión. Soy egresado
                de la carrera de <span className="text-green-500 dark:text-green-300">Desarrollo de Software</span> en{" "}
                <span className="text-green-500 dark:text-green-300">SENATI. </span>
              </p>
            </div>

            <div>
              <p className="text-green-500 dark:text-green-300 text-base ml-2 mt-2 mb-1">Lenguages y Frameworks</p>
              <div className="flex text-sm mt-2 mb-4 mr-6 pb-4 border-b border-gray-300 dark:border-gray-800">
                <ul className="list-square ml-8">
                  <li className="text-green-400">
                    <p className="text-slate-400">JavaScript (Vue, React)</p>
                  </li>
                  <li className="text-green-400">
                    <p className="text-slate-400">Python (Django, Django Rest)</p>
                  </li>
                  <li className="text-green-400">
                    <p className="text-slate-400">TypeScript</p>
                  </li>
                  <li className="text-green-400">
                    <p className="text-slate-400">C#</p>
                  </li>
                </ul>
                <ul className="list-square ml-20">
                  <li className="text-green-400">
                    <p className="text-slate-400">SQL, MySQL</p>
                  </li>
                  <li className="text-green-400">
                    <p className="text-slate-400">PostgreSQL</p>
                  </li>
                  <li className="text-green-400">
                    <p className="text-slate-400">Tailwind CSS</p>
                  </li>
                  <li className="text-green-400">
                    <p className="text-slate-400">Bootstrap</p>
                  </li>
                </ul>
              </div>

              <p className="text-sm font-sans text-justify max-w-md text-slate-500">
                Disfruto mucho pasar el tiempo diseñando interfaces y experiencias de usuario. Siempre en busqueda de nuevos conocimentos y listo para
                iniciar nuevos retos.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex h-64 w-48 mr-6 mt-12 ml-[23%] relative z-10 before:absolute sm:ml-¨[23%] md:-ml-0 lg:-ml-0 before:top-1.5 before:left-1.5 before:rounded-lg before:w-full before:h-full select-none rounded-lg before:bg-green-300"
            variants={imageAnimate}
          >
            <img
              src={profile}
              draggable={false}
              alt=""
              className="absolute z-10 transition ease-out hover:-translate-y-0.5 inset-0 w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
