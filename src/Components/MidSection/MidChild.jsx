import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";

const MidChild = ({ data, click }) => {
  const { theme } = useContext(ThemeBgContext);
  return (
    <div>
      <div>
        {data.map((item) => {
          return (
            <motion.div
              key={item.id}
              className="sm:pt-10 sm:right-2 relative flex flex-col z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                y: click ? 20 : 0,
                x: click ? 20 : 0,
                opacity: 1,
              }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 1.5 }}
            >
              <div className="sm:w-full w-[500px]">
                <h3
                  className={
                    theme === "light"
                      ? "sm:text-4xl text-6xl font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark pb-4"
                      : "sm:text-4xl text-6xl font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-white pb-4"
                  }
                >
                  {item.title}
                </h3>
              </div>
              <div className="flex flex-row justify-between items-center w-full">
                <div>
                  <p
                    className={
                      theme === "light"
                        ? "sm:text-2xl text-3xl font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark"
                        : "sm:text-2xl text-3xl font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
                    }
                  >
                    {item.text}
                  </p>
                </div>
                <div className="absolute right-0 -z-10">
                  <motion.img
                    className="w-full "
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: click ? "525px" : "525px", opacity: 1 }}
                    transition={{ type: "tween", duration: 3 }}
                    src={item.img}
                    alt={item.title}
                  ></motion.img>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MidChild;
