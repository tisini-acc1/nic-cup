"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export const TestimonySection = () => {
  return (
    <section id="testimony" className="py-12 xl:py-28">
      <div className="container mx-auto">
        <h2 className="h2 text-center">Our Testimonials</h2>

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
      </div>
    </section>
  );
};

const testimonials = [
  {
    id: 1,
    img: "/avatar.jpeg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum.",
    name: "John Doe",
  },
  {
    id: 2,
    img: "/avatar.jpeg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum.",
    name: "Jane Doe",
  },
  {
    id: 3,
    img: "/avatar.jpeg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum.",
    name: "Michael Doe",
  },
  {
    id: 4,
    img: "/avatar.jpeg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum.",
    name: "Jones Doe",
  },
  {
    id: 5,
    img: "/avatar.jpeg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum.",
    name: "Smith Doe",
  },
  {
    id: 6,
    img: "/avatar.jpeg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum.",
    name: "Hellen Doe",
  },
  {
    id: 7,
    img: "/avatar.jpeg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum.",
    name: "Mary Doe",
  },
  {
    id: 8,
    img: "/avatar.jpeg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum.",
    name: "James Doe",
  },
];
