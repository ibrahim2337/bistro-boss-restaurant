import featuredImg from "../../assets/home/featured.jpg";
import "./Featured.css"

const Featured = () => {
  return (
   <div className="featured-item bg-fixed text-white mt-20">
     <div className="px-5 py-1 bg-slate-900 bg-opacity-50 lg:px-40">
      <div className="">
        <div className=" text-center mt-20">
          <p className=" text-center text-xl text-yellow-400 mb-2">
            ---Check it out---
          </p>
        </div>
        <div className=" text-center">
          <p className="mx-auto border-b-4 w-9/12 lg:w-4/12"></p>
          <p className="text-3xl my-4 font-bold">FROM OUR MENU </p>
          <p className="mx-auto border-b-4 mb-16 w-9/12 lg:w-4/12"></p>
        </div>
      </div>

      <div className="md:flex justify-center items-center gap-5 pb-20">
        <div>
            <img src={featuredImg} alt="" />
        </div>
        <div className="py-5">
            <p className="font-semibold text-lg">March 20, 2023</p>
            <h1 className="font-bold text-xl mt-1">WHERE CAN I GET SOME?</h1>
            <p className="text-md mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
            <button className="btn btn-outline btn-warning border-0 border-b-4 mt-5 ">Read More</button>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Featured;
