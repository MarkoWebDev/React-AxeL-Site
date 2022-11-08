import React, { useContext } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { tabsData } from "../../DataForPage/dummyData";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";

const TabsComponent = () => {
  const { theme } = useContext(ThemeBgContext);
  return (
    <div id="features">
      <Tabs
        id="custom-animation"
        value="bedroom"
        className="sm:grid-cols-1 grid grid-cols-2 justify-items-center items-center content-between w-full"
      >
        <div className="sm:w-full sm:pl-4 w-4/5 pl-24">
          <h1
            className={
              theme === "light"
                ? "sm:text-4xl text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark"
                : "sm:text-4xl text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
            }
          >
            Features
          </h1>
          <p
            className={
              theme === "light"
                ? "sm:text-xl text-2xl  pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark"
                : "sm:text-xl text-2xl  pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
            }
          >
            AxeL offers many great features. You can create your own room,
            request a service, buy modern lookiing furniture, sell a furniture
            and so much more. Take a snek peek at each of them.
          </p>

          <TabsHeader className="sm:flex-col flex justify-center items-center content-center bg-gray-100">
            {tabsData.map(({ label, value }) => (
              <Tab className="" key={value} value={value}>
                <p className="text-royalBlue font-inter leading-normal no-underline align-middle tracking-wide normal-case">
                  {label}
                </p>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            animate={{
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            {tabsData.map(({ value, desc, linkText }) => (
              <TabPanel key={value} value={value}>
                <p
                  className={
                    theme === "light"
                      ? "text-lg relative right-3 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark"
                      : "text-lg relative right-3 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
                  }
                >
                  {desc}
                </p>
                <span className="text-royalBlue font-inter leading-normal no-underline align-middle tracking-wide normal-case relative cursor-pointer right-3 hover:animate-puls">
                  {linkText}
                </span>
              </TabPanel>
            ))}
          </TabsBody>
        </div>
        <div>
          <TabsBody
            animate={{
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            {tabsData.map(({ value, img }) => (
              <TabPanel key={value} value={value}>
                <img className="h-[650px]" src={img} alt="phone"></img>
              </TabPanel>
            ))}
          </TabsBody>
        </div>
      </Tabs>
    </div>
  );
};

export default TabsComponent;
