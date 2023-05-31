/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "../../components/menuCategory/MenuCategory";

const OurMenu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
      </Helmet>
      {/* cover  */}
      <Cover
        img={menuImg}
        title="our menu"
        subTitle="Would you like to try a dish?"
      ></Cover>
      <div className="">
        <div className=" text-center mt-20">
          <p className=" text-center text-xl text-yellow-400 mb-2">
            ---Don't miss---
          </p>
        </div>
        <div className=" text-center">
          <p className="mx-auto border-b-4 w-9/12 lg:w-4/12"></p>
          <p className="text-3xl my-4 font-bold">TODAY'S OFFER </p>
          <p className="mx-auto border-b-4 mb-12 w-9/12 lg:w-4/12"></p>
        </div>
      </div>
      {/* offered  */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert  */}
      <MenuCategory
        items={dessert}
        title="DESSERT"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={dessertImg}
      ></MenuCategory>
      {/* pizza  */}
      <MenuCategory
        items={pizza}
        title="PIZZA"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={pizzaImg}
      ></MenuCategory>
      {/* salads items */}
      <MenuCategory
        items={salad}
        title="SALAD"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={saladImg}
      ></MenuCategory>
      {/* soup items */}
      <MenuCategory
        items={soup}
        title="Soup"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={soupImg}
      ></MenuCategory>
    </div>
  );
};

export default OurMenu;
