import { useState } from "react";
import NavBar from "./components/Layout/NavBar";
import SideBar from "./components/Layout/SideBar";
import Home from "./components/Menu/Home";
import About from "./components/Menu/About";
import Work from "./components/Menu/Work";
import Contact from "./components/Menu/Contact";

const App = () => {
  const [open, setopen] = useState(false);

  const openSideBar = () => {
    setopen(!open);
  };

  const changePosition = () => {
    window.scroll({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="static h-screen w-screen overflow-x-hidden overflow-y-scroll scrollbar dark:scrollbar-dark bg-slate-100 dark:bg-body">
        <header id="home">
          <div className="absolute z-30 shadow-2xl">
            <NavBar openSideBar={openSideBar} />
          </div>
        </header>
        <SideBar isOpen={open} closeSideBar={openSideBar} />

        <div className="mt-20 md:mt-0 lg:mt-0 md:h-screen lg:h-screen flex items-center justify-center">
          <Home />
        </div>

        <div id="about" className="-mb-20"></div>

        <div className="w-screen flex items-center justify-center ">
          <About />
        </div>

        <div id="experience" className="mb-44"></div>

        <div className="w-screen  flex items-center justify-center mb-52">
          <Work />
        </div>

        <Contact />

        <div className="flex mt-4 justify-center items-center h-14 border-t border-gray-300 dark:border-gray-800 text-gray-600 dark:text-white/40">
          Created by Jarcy ©
        </div>
      </div>
    </>
  );
};

export default App;
