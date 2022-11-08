import React, { useContext } from "react";
import { room } from "../../DataForPage/dummyData";
import { motion } from "framer-motion";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";

const MidComponentItem = ({ title, img, text, reverse }) => {
  const { theme } = useContext(ThemeBgContext);
  return (
    <div id="company">
      {reverse ? (
        <div className="sm:grid-cols-1 grid grid-cols-2 justify-items-center items-center">
          <motion.div
            className="sm:w-full sm:pl-4 w-4/5 pl-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <h2
              className={
                theme === "light"
                  ? "sm:text-4xl text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark"
                  : "sm:text-4xl text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
              }
            >
              {title}
            </h2>
            <p
              className={
                theme === "light"
                  ? "sm:text-xl text-2xl w-full pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark"
                  : "sm:text-xl text-2xl w-full pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
              }
            >
              {text}
            </p>
            <button className="pushable mt-4">
              <span className="front">Start now</span>
            </button>
          </motion.div>
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <img
              className="sm:h-[475px] h-[775px] pt-10 hover:rotate-6 duration-1000 cursor-pointer"
              src={img}
              alt="phone1"
            ></img>
          </motion.div>
        </div>
      ) : (
        <div
          id="room"
          className="sm:flex-col flex flex-row-reverse justify-around items-center w-full"
        >
          <div className="sm:w-full sm:pl-4 pb-4">
            <h2
              className={
                theme === "light"
                  ? "sm:text-4xl text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark"
                  : "sm:text-4xl text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
              }
            >
              {title}
            </h2>

            <div className="flex flex-col">
              {room.map((item) => {
                return (
                  <div className="flex items-center py-2" key={item.id}>
                    <div className="mr-4">
                      <img
                        className="w-16 h-16"
                        src={item.img}
                        alt="blueSofa"
                      ></img>
                    </div>
                    <p
                      className={
                        theme === "light"
                          ? "sm:text-xl text-2xl font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark w-full "
                          : "sm:text-xl text-2xl font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white w-full "
                      }
                    >
                      {item.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <img
              className="sm:h-[475px] h-[775px] pt-1 hover:rotate-[-6deg] duration-1000 cursor-pointer"
              src={img}
              alt="phone"
            ></img>
          </div>
        </div>
      )}
    </div>
  );
};

export default MidComponentItem;
