import MenuItemsCard from "../../shared/MenuItemsCard";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div className="lg:px-28">
      <div className="">
        <div className=" text-center mt-20">
          <p className=" text-center text-xl text-yellow-400 mb-2">
            ---Check it out---
          </p>
        </div>
        <div className=" text-center">
          <p className="mx-auto border-b-4 w-9/12 lg:w-4/12"></p>
          <p className="text-3xl my-4 font-bold">FROM OUR MENU </p>
          <p className="mx-auto border-b-4 mb-12 w-9/12 lg:w-4/12"></p>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-5 lg:grid-cols-2 ">
        {popular.map((item) => (
          <MenuItemsCard key={item.id} item={item}></MenuItemsCard>
        ))}
      </div>
      <button className="btn btn-outline btn-warning border-0 border-b-4 mt-5 ">
        Read More
      </button>
    </div>
  );
};

export default PopularMenu;
