import React from "react";

const Selector = ({ selectedType, handleType }) => {
  return (
    <div>
      <p className="mt-5">Order Type</p>
      <div className="flex mt-3 gap-5">
        <button
          className={`select-btn ${
            selectedType === "cornet" && "bg-white text-black"
          }`}
          onClick={() => handleType("cornet")}
        >
          Cornet
        </button>

        <button
          className={`select-btn ${
            selectedType === "cup" && "bg-white text-black"
          }`}
          onClick={() => handleType("cup")}
        >
          Cup
        </button>
      </div>
    </div>
  );
};

export default Selector;
