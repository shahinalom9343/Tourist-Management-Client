import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./country.css";
import { EffectCoverflow, Pagination } from "swiper/modules";

const Countries = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper swiper"
    >
      <div className="relative">
        <SwiperSlide>
          <p className="absolute text-5xl font-bold text-white top-28 left-6">
            Bangladesh
          </p>
          <img
            className="rounded-xl"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide>
      </div>
      <div className="relative">
        <SwiperSlide>
          <p className="absolute text-5xl font-bold text-white top-28 left-6">
            Bangladesh
          </p>
          <img
            className="rounded-xl"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide>
      </div>
      <div className="relative">
        <SwiperSlide>
          <p className="absolute text-5xl font-bold text-white top-28 left-6">
            Bangladesh
          </p>
          <img
            className="rounded-xl"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide>
      </div>
      <div className="relative">
        <SwiperSlide>
          <p className="absolute text-5xl font-bold text-white top-28 left-6">
            Bangladesh
          </p>
          <img
            className="rounded-xl"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide>
      </div>
      <div className="relative">
        <SwiperSlide>
          <p className="absolute text-5xl font-bold text-white top-28 left-6">
            Bangladesh
          </p>
          <img
            className="rounded-xl"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide>
      </div>
      <div className="relative">
        <SwiperSlide>
          <p className="absolute text-5xl font-bold text-white top-28 left-6">
            Bangladesh
          </p>
          <img
            className="rounded-xl"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide>
      </div>
      <div className="relative">
        <SwiperSlide>
          <p className="absolute text-5xl font-bold text-white top-28 left-6">
            Bangladesh
          </p>
          <img
            className="rounded-xl"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide>
      </div>
      <div className="relative">
        <SwiperSlide>
          <p className="absolute text-5xl font-bold text-white top-28 left-6">
            Bangladesh
          </p>
          <img
            className="rounded-xl"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide>
      </div>
      <div className="relative">
        <SwiperSlide>
          <p className="absolute text-5xl font-bold text-white top-28 left-6">
            Bangladesh
          </p>
          <img
            className="rounded-xl"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default Countries;
