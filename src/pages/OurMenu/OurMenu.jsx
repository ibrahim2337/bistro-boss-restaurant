/* eslint-disable no-unused-vars */
import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover";
import menuImg from "../../assets/menu/banner3.jpg";


const OurMenu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title="our menu"
        subTitle="Would you like to try a dish?"
      ></Cover>


    </div>
  );
};

export default OurMenu;
