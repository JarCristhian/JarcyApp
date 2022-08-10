import { Fragment, useEffect, useRef, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import UseDarkMode from "../../hook/UseDarkMode";
import { motion, useCycle } from "framer-motion";
import logoB from "../../img/jarcyB.png";
import logoW from "../../img/jarcyW.png";

const navigation = [
  { name: "Inicio", href: "#home" },
  { name: "Sobre Mi", href: "#about" },
  { name: "Experiencia", href: "#experience" },
  { name: "Contacto", href: "#contact" },
];

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const NavBar = ({ update }) => {
  const [colorTheme, setTheme] = UseDarkMode();
  let [menuI, setMenuI] = useState(true);

  useEffect(() => {
    // console.log(menuI);
    //aaaaaaaaaaaa
  }, [menuI]);

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="flex justify-between items-center w-full px-8 md:px-18 lg:px-28 bg-slate-100 dark:bg-body">
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="md:hidden z-40 text-gray-400 dark:text-gray-300  hover:text-green-500 dark:hover:text-green-300 cursor-pointer"
              onClick={() => {
                menuI = !menuI;
                setMenuI(menuI);
              }}
            >
              {menuI ? (
                <svg aria-hidden="true" role="img" width="26" height="26" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  ></path>
                </svg>
              ) : (
                <svg aria-hidden="true" role="img" width="28" height="28" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                  ></path>
                </svg>
              )}
            </motion.div>

            <motion.div className="block h-14" initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
              <img width={110} className="mt-2.5" src={colorTheme == "dark" ? logoB : logoW} />
            </motion.div>

            <div className="md:flex space-x-12 items-center">
              {navigation.map((item) =>
                item.href !== "#contact" ? (
                  <motion.div initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} key={item.name} className="hidden md:flex">
                    <a href={item.href} className="text-gray-700 hover:text-green-500 dark:text-gray-300 dark:hover:text-green-300">
                      {item.name}
                    </a>
                  </motion.div>
                ) : (
                  <motion.div initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} key={item.name} className="flex justify-between">
                    <a
                      href={item.href}
                      className="hidden md:flex cursor-pointer text-gray-700 hover:text-green-500 dark:text-gray-300 dark:hover:text-green-300 mr-6"
                    >
                      {item.name}
                    </a>
                    <div className="cursor-pointer -mt-1" onClick={() => setTheme(colorTheme)}>
                      {colorTheme == "light" ? (
                        <svg
                          aria-hidden="true"
                          role="img"
                          className="mt-1 text-gray-300 hover:text-green-300"
                          width="24"
                          height="24"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M9.37 5.51A7.35 7.35 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4c.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0 1 12 19c-3.86 0-7-3.14-7-7c0-2.93 1.81-5.45 4.37-6.49z"
                            opacity=".3"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M9.37 5.51A7.35 7.35 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4c.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0 1 12 19c-3.86 0-7-3.14-7-7c0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26a5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          aria-hidden="true"
                          className="mt-1 text-gray-400 hover:text-green-500 dark:hover:text-green-300"
                          role="img"
                          width="24"
                          height="24"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M11 4V1h2v3Zm0 19v-3h2v3Zm9-10v-2h3v2ZM1 13v-2h3v2Zm17.7-6.3l-1.4-1.4l1.75-1.8l1.45 1.45ZM4.95 20.5L3.5 19.05l1.8-1.75l1.4 1.4Zm14.1 0l-1.75-1.8l1.4-1.4l1.8 1.75ZM5.3 6.7L3.5 4.95L4.95 3.5L6.7 5.3ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Z"
                          ></path>
                        </svg>
                      )}
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
