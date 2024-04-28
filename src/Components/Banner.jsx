import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./banner.css";
import { Autoplay, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="md:my-6 lg:my-10">
      <Swiper
        navigation={true}
        className="mySwiper"
        loop="true"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <div
            className="hero h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/MV5vPT6/gettyimages-1237262642-custom-616b45822f0203277dd57df174389cf592e6d4e7-s1100-c50.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-5xl font-extrabold">Bangladesh</h1>
                <p className="mb-5 font-semibold">
                  Bangladesh is Located in the north-eastern part of South Asia.
                  The majestic Himalayas stand some distance to the north, while
                  in the south lays the Bay of Bengal.
                </p>
                <button className="btn btn-accent">Learn More</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/NZSmVhx/184d7edf-5c3a-470c-8529-b0085d6d5b0e.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-5xl font-extrabold">Thailand</h1>
                <p className="mb-5 font-semibold">
                  Thailand is in the heart of Southeast Asia. Cambodia and Laos
                  border the country to the east and northeast, and Myanmar lies
                  to the northwest. To the west is the Andaman Sea and the Gulf
                  of Thailand, southeast of Burma. The long southern region,
                  connecting with Malaysia, is hilly and forested.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/BPt6CFy/lead-image-4.webp)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-5xl font-extrabold">Malaysia</h1>
                <p className="mb-5 font-semibold">
                  Malaysia is a federal constitutional monarchy that consists of
                  13 states and three federal territories, which include the
                  capital city region of Kuala Lumpur, the administrative
                  capital of Putrajaya, and the island of Labuan off the coast
                  of East Malaysia.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/CnxZh8z/kelingking-beach-nusa-penida-bali-indonesia-2023-11-27-05-02-05-utc-1024x672.webp)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-5xl font-extrabold">Indonesia</h1>
                <p className="mb-5 font-semibold">
                  Indonesia is the world's largest archipelagic state and the
                  14th-largest country by area. With over 279 million people,
                  Indonesia is the world's fourth-most-populous country and the
                  most populous Muslim-majority country.
                </p>
                <button className="btn btn-accent">Learn More</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
