import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <div className="px-5 lg:px-20">
        <div className=" text-center mt-20">
          <p className=" text-center text-xl text-yellow-400 mb-2">
            ---What Our Clients Say---
          </p>
        </div>
        <div className=" text-center">
          <p className="mx-auto border-b-4 w-9/12 lg:w-4/12"></p>
          <p className="text-3xl my-4 font-bold">TESTIMONIALS</p>
          <p className="mx-auto border-b-4 mb-12 w-9/12 lg:w-4/12"></p>
        </div>
      </div>

      <div className="">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center mx-12 lg:mx-28">
                <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                <p className="mt-2">{review.details}</p>
                <h3 className="text-4xl font-bold text-orange-400 mt-2 mb-20">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
