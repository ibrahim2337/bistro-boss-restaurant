/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Category = () => {
  return (
    <div className="container mx-auto">
    <div className="lg:px-20">
        <div className=" text-center mt-20">
          <p className=" text-center text-xl text-yellow-400 mb-2">
          ---From 11:00am to 10:00pm---
          </p>
        </div>
        <div className=" text-center">
          <p className="mx-auto border-b-4 w-9/12 lg:w-4/12"></p>
          <p className="text-3xl my-4 font-bold">ORDER ONLINE</p>
          <p className="mx-auto border-b-4 mb-16 w-9/12 lg:w-4/12"></p>
        </div>
      </div>

      <div className="">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} />
            <h3 className="text-center text-3xl font-bold text-white -mt-20 uppercase ">salad</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} />
            <h3 className="text-center text-3xl font-bold text-white -mt-20 uppercase ">pizzas</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} />
            <h3 className="text-center text-3xl font-bold text-white -mt-20 uppercase ">soups</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} />
            <h3 className="text-center text-3xl font-bold text-white -mt-20 uppercase ">desserts</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} />
            <h3 className="text-center text-3xl font-bold text-white -mt-18 uppercase ">salad</h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
