import React, { useState, useContext } from "react";
import { Context } from "../context/store";
import { v4 as uuidV4 } from "uuid";
import { cartTypes } from "../context/types";

const Product = ({ product }) => {
  const [state, dispatch] = useContext(Context);
  const [quantity, setQuantity] = useState(1);

  const renderOptions = () => {
    const options = [];
    for (let i = 1; i <= 10; i++) {
      options.push(
        <option key={uuidV4()} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  const handleAddClick = () => {
    dispatch({
      type: cartTypes.ADD_ITEM,
      payload: { id: product.id, quantity: +quantity }
    });
  };

  return (
    <div className="flex justify-between md:justify-around items-center">
      <img
        src={product.image}
        alt=""
        className="rounded-lg w-20 h-20 md:h-32 md:w-32 object-cover shadow-sm"
      />
      <div className="text-l md:text-3xl">
        {product.name} <br />${product.price}.00
      </div>
      <div className=" flex flex-col">
        <div className="relative">
          <select
            value={quantity}
            onChange={e => {
              setQuantity(e.target.value);
            }}
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            {renderOptions()}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <button className="mt-2 rounded-full bg-blue-400 hover:bg-blue-700 hover:text-white active:bg-blue-700 active:text-white focus:outline-none transition-colors duration-200">
          <span
            onClick={() => handleAddClick()}
            className="p-4 md:p-8 md:text-2xl"
          >
            Add
          </span>
        </button>
      </div>
    </div>
  );
};

export default Product;
