import React, { useContext } from "react";
import { Context } from "./context/store";
import { v4 as uuidV4 } from "uuid";

import "./assets/main.css";
import Product from "./components/Product";
import CartIcon from "./components/CartIcon";

function App() {
  const [state] = useContext(Context);

  const { products } = state;
  console.log(state);

  return (
    <div className="container h-screen mx-auto flex overflow-y-hidden font-hand">
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
          <div className="flex flex-col">
            <img
              className="h-18 w-auto md:w-auto md:h-32 md:mt-8 object-cover"
              src="/images/logo.png"
              alt=""
            />
            <CartIcon />
          </div>
        </div>

        <div className="mt-4 h-full my-8 w-auto mx-8 grid grid-cols-1 gap-5 overflow-y-auto">
          {Object.values(products).map(product => (
            <Product key={uuidV4(0)} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
