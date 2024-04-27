import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./country.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Marquee from "react-fast-marquee";

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
          <img className="rounded-xl" src="https://i.ibb.co/gzdJKbQ/bd.webp" />
        </SwiperSlide>
      </div>
      <Marquee speed={30} loop={Infinity} direction="left">
        <div className="relative">
          <SwiperSlide>
            <p className="absolute text-5xl font-bold text-white top-28 left-6">
              Thailand
            </p>
            <img
              className="rounded-xl"
              src="https://i.ibb.co/XCJnFHx/thailand.jpg"
            />
          </SwiperSlide>
        </div>
        <div className="relative">
          <SwiperSlide>
            <p className="absolute text-5xl font-bold text-white top-28 left-6">
              Indonesia
            </p>
            <img
              className="rounded-xl"
              src="https://i.ibb.co/WHNGkqS/ido.jpg"
            />
          </SwiperSlide>
        </div>
        <div className="relative">
          <SwiperSlide>
            <p className="absolute text-5xl font-bold text-white top-28 left-6">
              Malaysia
            </p>
            <img
              className="rounded-xl"
              src="https://i.ibb.co/3vz021F/wp1842875.jpg"
            />
          </SwiperSlide>
        </div>
        <div className="relative">
          <SwiperSlide>
            <p className="absolute text-5xl font-bold text-white top-28 left-6">
              Vietnam
            </p>
            <img
              className="rounded-xl"
              src="https://i.ibb.co/kxHJ1q1/vietnam.jpg"
            />
          </SwiperSlide>
        </div>
        <div className="relative">
          <SwiperSlide>
            <p className="absolute text-5xl font-bold text-white top-28 left-6">
              Cambodia
            </p>
            <img
              className="rounded-xl"
              src="https://i.ibb.co/4JBNZDW/cambodia.jpg"
            />
          </SwiperSlide>
        </div>
      </Marquee>
    </Swiper>
  );
};

export default Countries;
