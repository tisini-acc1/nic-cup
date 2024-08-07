"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export const TestimonySection = () => {
  return (
    <section className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 overflow-hidden">
      <h6 className="text-lg font-medium flex items-center gap-x-2 mb-6">
        Testimonies
      </h6>

      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="h-[320px]"
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={idx} className="h-full">
              <div className="flex flex-col items-center justify-center gap-6 text-center h-full">
                <Image
                  src={testimonial.img}
                  height={90}
                  width={90}
                  alt=""
                  className="rounded-full border-2 border-accent-green"
                />
                <div className="flex flex-col justify-center items-center">
                  <FaQuoteLeft className="text-2xl text-gray-300" />
                  <p className="max-w-[380px] mb-4">{testimonial.message}</p>
                  <span className="text-2xl text-accent-green">
                    {testimonial.name}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const testimonials = [
  {
    img: "/avatar.jpeg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum.",
    name: "John Doe",
  },
  {
    img: "/avatar.jpeg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum.",
    name: "Jane Doe",
  },
  {
    img: "/avatar.jpeg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum.",
    name: "Michael Doe",
  },
  {
    img: "/avatar.jpeg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum.",
    name: "Jones Doe",
  },
  {
    img: "/avatar.jpeg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum.",
    name: "Smith Doe",
  },
  {
    img: "/avatar.jpeg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum.",
    name: "Hellen Doe",
  },
  {
    img: "/avatar.jpeg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum.",
    name: "Mary Doe",
  },
  {
    img: "/avatar.jpeg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum.",
    name: "James Doe",
  },
];
