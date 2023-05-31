/* eslint-disable no-unused-vars */
import React from "react";
import Cover from "../../shared/Cover";
import { Helmet } from "react-helmet-async";
import shopImg from '../../assets/shop/banner2.jpg';

const OurShop = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Shop</title>
      </Helmet>
      <Cover
        img={shopImg} title='our shop' subTitle='Would you like to try a dish?' >
      </Cover>
    </div>
  );
};

export default OurShop;
