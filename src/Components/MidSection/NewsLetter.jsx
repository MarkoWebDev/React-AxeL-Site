import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail("");
    console.log("email", email);
  };

  return (
    <div className="flex items-center justify-center content-center justify-items-center relative">
      <div className="sm:flex-col sm:py-10 bottom-14 h-full flex justify-evenly bg-darkBlue w-4/5 py-24 rounded-xl translate-y-32 duration-700">
        <div>
          <h2 className="sm:text-2xl w-full text-4xl pt-4 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-white pl-8">
            Sign up for our newsletter
          </h2>
          <p className="sm:text-lg block font-inter font-light no-underline align-middle tracking-wide normal-case leading-none text-white text-xl pl-8 ">
            Join our newsletter and get news in your inbox every week!
          </p>
        </div>
        <div className="sm:flex-col flex items-center justify-center content-center">
          <div className="pb-4 pt-4 w-64 text-white">
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-white"
              label="Email"
            />
          </div>
          <div>
            <Button onClick={handleEmail} ripple={true} className="ml-2 ">
              Button
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
