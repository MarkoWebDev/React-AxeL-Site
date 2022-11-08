import React from "react";
import { FooterData1 } from "../../DataForPage/dummyData";
import { FooterData2 } from "../../DataForPage/dummyData";
import { FooterData3 } from "../../DataForPage/dummyData";
import logo from "../../assets/images/logo.svg";
import googlePlay from "../../assets/images/google-play.svg";
import appleStore from "../../assets/images/apple-store.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="sm:grid-cols-2 grid grid-cols-4 gap-0 items-center justify-items-center">
        <div className="sm:w-full sm:pl-8 h-64 mx-auto pl-24">
          <div>
            <img className="h-10 cursor-pointer" src={logo} alt="logo"></img>
          </div>
          <div className="mt-5">
            <img
              className="h-8 cursor-pointer"
              src={appleStore}
              alt="apple-store"
            ></img>
          </div>
          <div className="mt-5">
            <img
              className="h-8 cursor-pointer"
              src={googlePlay}
              alt="apple-store"
            ></img>
          </div>
        </div>
        <div className="sm:pr-4 h-64">
          <h3 className="text-dark font-inter font-medium text-lg no-underline align-middle tracking-wide normal-case">
            Features
          </h3>
          {FooterData1.map((item) => {
            return (
              <div key={item.id}>
                <p className="text-dark font-inter text-md font-normal cursor-pointer no-underline align-middle tracking-wide normal-case">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
        <div className="sm:pr-8 h-64">
          <h3 className="text-dark font-inter font-medium text-lg no-underline align-middle tracking-wide normal-case">
            Features
          </h3>
          {FooterData2.map((item) => {
            return (
              <div key={item.id}>
                <p className="text-dark font-inter text-md font-normal cursor-pointer no-underline align-middle tracking-wide normal-case">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
        <div className="sm:pl-8 h-64">
          <h3 className="text-dark font-inter font-medium text-lg no-underline align-middle tracking-wide normal-case">
            Features
          </h3>
          {FooterData3.map((item) => {
            return (
              <div key={item.id}>
                <p className="text-dark font-inter text-md font-normal cursor-pointer no-underline align-middle tracking-wide normal-case">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <hr className="sm:w-full h-px w-4/5 bg-gray-400 opacity-50 outline-none border-none" />
      </div>
      <div className="flex justify-around items-center py-6">
        <div>
          <p className="sm:text-sm text-dark pb-2 font-inter font-medium cursor-pointer no-underline align-middle tracking-wide normal-case">
            AxeL
          </p>
        </div>
        <div>
          <p className="sm:text-xs text-dark pb-2 font-inter font-light cursor-pointer no-underline align-middle tracking-wide normal-case">
            Copyright {year} page by Marko Web Dev
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
