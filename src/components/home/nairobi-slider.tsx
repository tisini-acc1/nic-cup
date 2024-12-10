"use client";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
// import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";

const images = [
  "/buffalo.jpeg",
  "/nai.jpeg",
  "/lioness.jpeg",
  "/giraffe.jpeg",
  "/skykine.jpeg",
  "/lion.jpeg",
];

const NairobiSlider = () => {
  return (
    <Swiper
      effect="coverflow"
      slidesPerView={1}
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 10,
        depth: 200,
        modifier: 1,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="h-[320px]"
    >
      {images.map((image, idx) => (
        <SwiperSlide key={idx} className="h-full">
          <div className="flex flex-col items-center justify-center gap-6 text-center h-full">
            <Image
              src={image}
              height={450}
              width={450}
              alt=""
              className="rounded-md border border-accent-green"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NairobiSlider;
