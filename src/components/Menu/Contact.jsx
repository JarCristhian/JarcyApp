import { motion } from "framer-motion";
import { textAnimate } from "../../hook/Animations";

const Contact = () => {
  return (
    <>
      <motion.div
        id="contact"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.3 }}
        className="max-w-xl mx-auto md:max-w-3xl mt-44"
      >
        <motion.div className="max-w-xl mx-auto md:max-w-3xl" variants={textAnimate}>
          <div className="flex justify-center items-center">
            <span className="font-mono text-green-300">
              <svg aria-hidden="true" role="img" width="30" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <path fill="currentColor" d="m10 17l5-5l-5-5v10z"></path>
              </svg>
            </span>
            <span className="text-3xl text-green-300">Contacto</span>
          </div>
        </motion.div>

        <div className="md:flex">
          <motion.div className="p-6" variants={textAnimate}>
            <div className="flex justify-center items-center mt-12 ml-2">
              <div className="w-screen max-w-xl md:max-w-3xl px-8">
                <div className="mb-6">
                  <label className="text-gray-400 block mb-3 text-xl">Correo Electrónico</label>
                  <input className="w-full text-gray-600 dark:text-white/80 bg-white/5 dark:bg-gray-800/30 border border-gray-400 dark:border-gray-600 shadow-md focus:outline-none focus:border-green-400 dark:focus:border-green-400  px-4 py-4 h-12 rounded" />
                </div>
                <div className="mb-6">
                  <label className="text-gray-400 block mb-3 text-xl">Mensaje</label>
                  <textarea
                    type="email"
                    className=" w-full text-gray-600 dark:text-white/80 bg-white/5 dark:bg-gray-800/30 border border-gray-400 dark:border-gray-600  px-4 py-4 h-30 shadow-md focus:outline-none focus:border-green-400 dark:focus:border-green-400 rounded resize-none"
                  ></textarea>
                </div>

                <button className="inline-flex text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg">
                  <svg className=" mr-2 mt-1" width="24" height="24" viewBox="0 0 28 28">
                    <path
                      fill="currentColor"
                      d="M3.79 2.773L24.86 12.85a1.25 1.25 0 0 1 0 2.256L3.79 25.183a1.25 1.25 0 0 1-1.746-1.456l2.66-9.749l-2.66-9.749A1.25 1.25 0 0 1 3.79 2.773Zm-.155 1.589l2.423 8.887L17 13.25a.75.75 0 0 1 .743.649l.007.101a.75.75 0 0 1-.648.743L17 14.75H6.046l-2.41 8.844l20.106-9.616L3.635 4.362Z"
                    />
                  </svg>
                  Enviar
                </button>
              </div>
            </div>

            <div className="flex justify-center items-center mb-12 mt-12">
              <a href="https://www.instagram.com/jarcristhian" target="_blank" className="nav-dot block w-7 h-7 ml-6">
                <svg
                  aria-hidden="true"
                  role="img"
                  width="24"
                  height="24"
                  className="text-gray-300 hover:text-green-300"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.886 2.886 0 0 0-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058c.782-.037 1.309-.142 1.797-.331a2.92 2.92 0 0 0 1.08-.702c.337-.337.538-.65.704-1.08c.19-.493.296-1.02.332-1.8c.052-1.104.058-1.49.058-4.029c0-2.474-.007-2.878-.058-4.029c-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08a2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06c1.065.05 1.79.217 2.428.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122c0 2.717-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465c-1.066.047-1.405.06-4.122.06c-2.717 0-3.056-.01-4.122-.06c-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153a4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122c.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"
                  ></path>
                </svg>
              </a>
              <a href="https://www.twitter.com" target="_blank" className="nav-dot block w-7 h-7">
                <svg
                  aria-hidden="true"
                  role="img"
                  width="24"
                  height="24"
                  className="text-gray-300 hover:text-green-300"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M251.1 67.4A12 12 0 0 0 240 60h-28.2A52 52 0 0 0 116 88v.8c-37.3-11.5-67.2-41-67.5-41.3a12 12 0 0 0-20.3 6.4c-9 49.6 6 83 20.1 102.2a112.3 112.3 0 0 0 22 22.5C55.9 193 36 200.7 35.8 200.8a11.7 11.7 0 0 0-7.2 7.5a12.3 12.3 0 0 0 1.4 10.4c1.9 2.9 13.4 17.3 50 17.3c72.1 0 132.5-55.1 139.3-126.4l29.2-29.1a12.2 12.2 0 0 0 2.6-13.1Zm-51.8 28.4a11.3 11.3 0 0 0-3.5 7.7C191.9 164.3 141 212 80 212a89.4 89.4 0 0 1-12.5-.8c10.4-6.7 22.2-16.1 30.5-28.5a12.1 12.1 0 0 0 1.6-9.8a11.8 11.8 0 0 0-6.2-7.6c-2-1.1-45.6-24.2-43.9-85.4c17.2 13.1 45 30.7 76.5 35.9a12 12 0 0 0 14-11.8V88a28.3 28.3 0 0 1 28.4-28a28 28 0 0 1 25.3 16.8a11.9 11.9 0 0 0 11 7.2h6.3Z"
                  ></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/jar-cristhian-rt-2b109925b" target="_blank" className="nav-dot block w-7 h-7 ml-6">
                <svg
                  aria-hidden="true"
                  role="img"
                  width="22"
                  height="22"
                  className="text-gray-300 hover:text-green-300"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M17.5 8.999a5.419 5.419 0 0 0-2.565.645A1 1 0 0 0 14 8.999h-4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5.5a1 1 0 1 1 2 0v5.5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7.5a5.507 5.507 0 0 0-5.5-5.5Zm3.5 12h-2v-4.5a3 3 0 1 0-6 0v4.5h-2v-10h2v.703a1 1 0 0 0 1.781.625A3.483 3.483 0 0 1 21 14.5Zm-14-12H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1Zm-1 12H4v-10h2ZM5.015 1.542a3.233 3.233 0 1 0-.057 6.457h.028a3.233 3.233 0 1 0 .029-6.457Zm-.029 4.457h-.028a1.222 1.222 0 0 1-1.37-1.228c0-.747.56-1.229 1.427-1.229A1.234 1.234 0 0 1 6.41 4.771c0 .746-.56 1.228-1.425 1.228Z"
                  ></path>
                </svg>
              </a>
              <a href="https://github.com/JarCristhian" target="_blank" className="nav-dot block w-7 h-7 ml-6">
                <svg
                  aria-hidden="true"
                  role="img"
                  width="24"
                  height="24"
                  className="text-gray-300 hover:text-green-300"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                  ></path>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
