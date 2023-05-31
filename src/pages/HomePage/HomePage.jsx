/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import PopularMenu from "../../components/PopularMenu/PopularMenu";
import CallUs from "../../components/CallUs/CallUs";
import Featured from "../../components/Featured/Featured";
import Review from "../../components/Review/Review";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <PopularMenu />
      <CallUs />
      <Featured />
      <Review />
    </div>
  );
};

export default HomePage;
