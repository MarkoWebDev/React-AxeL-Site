import React, { useContext } from "react";
import { cardData } from "../../DataForPage/dummyData";
import googlePlay from "../../assets/images/google-play.svg";
import appleStore from "../../assets/images/apple-store.svg";
import star from "../../assets/images/star.svg";
import starWhite from "../../assets/images/starWhite.svg";
import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";

const Cards = () => {
  const { theme } = useContext(ThemeBgContext);
  const starList = [1, 2, 3, 4, 5];
  return (
    <div id="demo">
      <div className="text-center">
        <h2
          className={
            theme === "light"
              ? "sm:text-5xl text-dark text-6xl font-bold pt-20 no-underline font-inter align-middle tracking-wide normal-case leading-none cursor-pointer"
              : "sm:text-5xl text-white text-6xl font-bold pt-20 no-underline font-inter align-middle tracking-wide normal-case leading-none cursor-pointer"
          }
        >
          Request a demo
        </h2>
        <p
          className={
            theme === "light"
              ? "sm:text-xl text-dark text-2xl font-normal pt-10 no-underline font-inter align-middle tracking-wide normal-case leading-none cursor-pointer"
              : "sm:text-xl text-white text-2xl font-normal pt-10 no-underline font-inter align-middle tracking-wide normal-case leading-none cursor-pointer"
          }
        >
          Explore all the nice stuff that AxeL is providing and much more...{" "}
        </p>
        <div className="w-full flex flex-row items-center justify-evenly pt-10">
          <div>
            <img
              className="h-12 cursor-pointer"
              src={googlePlay}
              alt="googleApp"
            ></img>
          </div>
          <div>
            <img
              className="h-12 cursor-pointer"
              src={appleStore}
              alt="googleApp"
            ></img>
          </div>
        </div>
      </div>
      <div className="sm:grid-cols-1 grid grid-cols-3 items-center gap-8 content-between w-full pt-32">
        {cardData.map((item) => {
          return (
            <motion.div
              className="sm:pl-0 mx-auto pl-20"
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
            >
              <Card
                className={
                  item.id === "1"
                    ? "w-80 bg-dark border border-white"
                    : "w-80 bg-white"
                }
              >
                <CardBody className="text-center">
                  <Typography
                    variant="h5"
                    className={
                      item.id === "1"
                        ? "mb-2 fonm-inter leading-normal no-underline align-middle tracking-wide normal-case text-white"
                        : "mb-2 fonm-inter leading-normal no-underline align-middle tracking-wide normal-case text-dark"
                    }
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    className={
                      item.id === "1"
                        ? "mb-2 fonm-inter font-light leading-normal no-underline align-middle tracking-wide normal-case h-32 text-white"
                        : "mb-2 fonm-inter font-light  leading-normal no-underline align-middle tracking-wide normal-case h-32 text-dark"
                    }
                  >
                    {item.text}
                  </Typography>
                </CardBody>
                <CardFooter
                  divider
                  className="flex flex-col items-center content-center justify-center py-3"
                >
                  <Typography
                    variant="small"
                    className={
                      item.id === "1"
                        ? "text-center pb-2 font-inter font-light leading-normal no-underline align-middle hover:animate-pulse tracking-wide cursor-pointer text-white"
                        : "text-center pb-2 font-inter font-light leading-normal no-underline align-middle hover:animate-pulse tracking-wide cursor-pointer text-dark"
                    }
                  >
                    See more
                  </Typography>
                  <div className="flex flex-row justify-center">
                    {starList.map((index) => {
                      return (
                        <div key={index}>
                          {item.id === "1" ? (
                            <img src={starWhite} alt="star"></img>
                          ) : (
                            <img src={star} alt="star"></img>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
