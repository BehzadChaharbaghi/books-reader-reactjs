import React from "react";
import { Swiper, SwiperSlide } from "swiper/swiper-react";

const SwiperSection = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 800,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 500,
            slidesPerView: 2,
          },
        }}
        id="main"
        width="480"
        navigation
        // spaceBetween={15}
      >
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperSection;
