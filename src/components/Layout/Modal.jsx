import { useEffect, useState } from "react";
import { wrap } from "popmotion";
import { motion, AnimatePresence } from "framer-motion";

import AsiSoft from "../../img/projects/asiSoft/asiSoft.png";

//Empiria
import empiria from "../../img/projects/empiria/empiria.png";
import saleE from "../../img/projects/empiria/sale.png";
import till from "../../img/projects/empiria/till.png";
import medic from "../../img/projects/empiria/medic.png";
import results from "../../img/projects/empiria/results.png";

//Faqture
import faqture from "../../img/projects/faqture/faqture.png";
import faqtureB from "../../img/projects/faqture/faqtureB.png";
import company from "../../img/projects/faqture/company.png";
import setting from "../../img/projects/faqture/setting.png";

//Awa
import awa from "../../img/projects/awa/awa.png";
import sale from "../../img/projects/awa/sale.png";
import saleList from "../../img/projects/awa/saleList.png";
import predio from "../../img/projects/awa/predio.png";
import report from "../../img/projects/awa/report.png";

//Zenda
import zenda from "../../img/projects/zenda/sale.jpg";
import purchase from "../../img/projects/zenda/purchase.jpg";
import vouchers from "../../img/projects/zenda/vouchers.JPG";
import product from "../../img/projects/zenda/product.JPG";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};
const data = [
  {
    name: "AsiSoft",
    images: [AsiSoft],
  },
  {
    name: "Empiria",
    images: [empiria, saleE, till, medic, results],
  },
  {
    name: "Faqture",
    images: [faqture, faqtureB, company, setting],
  },
  {
    name: "Awa",
    images: [awa, sale, saleList, predio, report],
  },
  {
    name: "Zenda",
    images: [zenda, purchase, vouchers, product],
  },
];

const Modal = ({ name, show }) => {
  const [images, setImages] = useState([]);
  const [countImg, setCountImg] = useState(1);
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, countImg, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    let newD = data.find((d) => d.name == name);
    setCountImg(newD.images.length);
    setImages(newD.images);
  }, [name]);

  return (
    <>
      <div id="modal-component" className="fixed z-30 inset-0">
        <div className="modal-flex-container flex justify-center px-2 text-center">
          <div className="modal-bg-container fixed inset-0 bg-gray-800 bg-opacity-75"></div>

          <div className="modal-space-container sm:inline-block"></div>
          <motion.div
            initial={{ y: -150 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.1 }}
            className="modal-container z-40 inline-block align-bottom bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-xl transform transition-all my-[25vh] sm:my-[10vh] sm:max-w-6xl w-full"
          >
            <div className="modal-wrapper pt-5 pb-4 sm:p-2 sm:pt-6">
              <div className="modal-wrapper-flex sm:flex sm:items-start">
                <div className="modal-content">
                  <div className="flex justify-between mx-6">
                    <h3 className="text-2xl font-semibold text-gray-600 select-none dark:text-gray-300 tracking-wider">{name}</h3>
                    <button onClick={show} className="text-gray-400 hover:text-gray-500">
                      <svg
                        className="h-8 w-8"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="mt-10 px-2">
                    <AnimatePresence initial={false} custom={direction}>
                      <div className="flex items-center h-full w-full object-cover">
                        <motion.img
                          className="rounded-lg drop-shadow-lg cursor-pointer"
                          key={page}
                          src={images[imageIndex]}
                          custom={direction}
                          variants={variants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                          }}
                          drag="x"
                          dragConstraints={{ left: 0, right: 0 }}
                          dragElastic={1}
                          onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                              paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                              paginate(-1);
                            }
                          }}
                        />
                      </div>
                    </AnimatePresence>

                    <div className="flex justify-center space-x-3 mt-5 mb-3">
                      <div
                        className="bg-gray-300/40 dark:bg-gray-700/50 w-9 h-9 rounded-full flex justify-center items-center select-none cursor-pointer"
                        onClick={() => paginate(-1)}
                      >
                        <svg width="32" height="32" viewBox="0 0 24 24" className="text-gray-500/80 dark:text-gray-300/80">
                          <path
                            fill="currentColor"
                            d="m13.3 17.3l-4.6-4.6q-.15-.15-.212-.325q-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l4.6-4.6q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7L10.8 12l3.9 3.9q.275.275.275.7q0 .425-.275.7q-.275.275-.7.275q-.425 0-.7-.275Z"
                          />
                        </svg>
                      </div>

                      <div
                        className="bg-gray-300/40 dark:bg-gray-700/50 w-9 h-9 rounded-full flex justify-center items-center select-none cursor-pointer"
                        onClick={() => paginate(1)}
                      >
                        <svg width="32" height="32" viewBox="0 0 24 24" className="text-gray-500/80 dark:text-gray-300/80">
                          <path
                            fill="currentColor"
                            d="M8.7 17.3q-.275-.275-.275-.7q0-.425.275-.7l3.9-3.9l-3.9-3.9q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l4.6 4.6q.15.15.213.325q.062.175.062.375t-.062.375q-.063.175-.213.325l-4.6 4.6q-.275.275-.7.275q-.425 0-.7-.275Z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Modal;
