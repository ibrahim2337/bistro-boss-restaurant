/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";


const Cover = ({img, title, subTitle}) => {
  return (
    <div>
      <div
        className="hero h-[600px]"
        style={{
          backgroundImage: `url("${img}")`,
        }}
      >
        <div className=""></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" py-20 px-60 mt-20 bg-slate-900 bg-opacity-50">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5 uppercase">
            {subTitle}
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
