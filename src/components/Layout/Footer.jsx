import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { motion } from "framer-motion";

const navigation = [
  { name: "Inicio", href: "#home" },
  { name: "Sobre Mi", href: "#about" },
  { name: "Experiencia", href: "#experience" },
  { name: "Contacto", href: "#contact" },
];

const Footer = ({ update }) => {
  return (
    <Disclosure as="footer">
      {({ open }) => (
        <>
          <div className="flex justify-between items-center px-8 md:px-14 lg:px-24 w-full h-14 bg-slate-100 dark:bg-gray-400">
            <div className="text-lg font-bold">
              <img className="block h-11 w-auto" src="../public/logo.png" />
            </div>
            <div className="hidden md:flex space-x-12 items-center">
              {navigation.map((item) => (
                <div key={item.name} href={item.href}>
                  <a className="text-gray-600 hover:text-green-500 dark:text-gray-300 dark:hover:text-green-300">{item.name}</a>
                </div>
              ))}
            </div>
            <div className="md:hidden text-gray-400 dark:text-gray-300  hover:text-green-500 dark:hover:text-green-300 cursor-pointer">
              <svg aria-hidden="true" role="img" width="30" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <path fill="currentColor" d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"></path>
              </svg>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Footer;
