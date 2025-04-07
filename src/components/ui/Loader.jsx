import React from "react";
import "../loader.css";

const Loader = () => {
  return (
    <div
      className="containerspin"
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 2 }}
    >
      <div className="spinner"></div>
      <div className="progress">
        <div className="color"></div>
      </div>
      {/* <div className="loaderper"></div> */}
    </div>
  );
};

export default Loader;
