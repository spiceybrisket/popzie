import React from "react";

import "./assets/main.css";

function App() {
  return (
    <div className="flex h-screen justify-center overflow-hidden">
      <div className="hidden md:block">
        <img className="h-screen" src="images/fox.png" alt="" />
      </div>
      <div className="w-full flex flex-col justify-start ">
        <div className="mt-4 mx-8 md:mx-0 md:w-full flex justify-center items-center">
          <img
            className="h-32 w-auto md:hidden object-cover "
            src="images/fox-r.png"
            alt=""
          />
          <img
            className="h-32 w-auto md:w-auto md:h-auto md:mt-8 object-cover"
            src="/images/logo.png"
            alt=""
          />
        </div>
        <div className="mt-8 mx-8 text-left "></div>
      </div>
    </div>
  );
}

export default App;
