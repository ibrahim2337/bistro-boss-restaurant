/* eslint-disable no-unused-vars */
import React from "react";

const MenuItemsCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div>
        <div className="flex gap-5 mt-5">
      <img style={{borderRadius: '0px 200px 200px 200px'}} className="w-[100px] h-[90px]" src={image} alt="" />
      <div>
        <div className="flex justify-between">
          <h3 className="uppercase">{name}---------</h3>
          <p className="text-yellow-500">${price}</p>
        </div>
        <p>{recipe}</p>
      </div>
    </div>
    
    </div>
  );
};

export default MenuItemsCard;
