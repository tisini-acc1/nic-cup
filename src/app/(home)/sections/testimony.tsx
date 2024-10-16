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
        <h2 className="h2 text-center mb-8">Our Testimonials</h2>

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
      "Congratulation for the job well done, Rongai Soccer is surely looking forward to the next edition, thank you!",
    name: "Rongai Soccer Academy",
  },
  {
    id: 2,
    img: "/avatar.jpeg",
    message:
      "Vipawa ladies would like to thank the management and all the ladies teams that took part in the tournament. We enjoyed every bit and made alot of friends. Kazi safi Akumu Kevin and your entire team",
    name: "Vipawa Ladies",
  },
  {
    id: 3,
    img: "/avatar.jpeg",
    message:
      "The entire organization team, you did an amazing job. Soka Talent had fun, interacted and most impotantly built long-lasting relationships with like-minded people. We can't wait for the next edition. Asanteeni sana.",
    name: "Soka Talent Academy",
  },
  {
    id: 4,
    img: "/avatar.jpeg",
    message:
      "Excellent work to the organisers and your team. You did an amazing job! All those who participated are winners. We all took a lesson home, areas that we should improve and also recognized some strengths we are not aware of. Be blessed, and i can't wait for the next edition.",
    name: "Decathlon Kenya",
  },
  {
    id: 5,
    img: "/avatar.jpeg",
    message:
      "It was a fantastic experience for all our teams and we truly appreciate the effort and dedication that went into making it a success. We are already looking forward to the 2nd edition. Thank you for creating unforgettable memories for our young players.",
    name: "Passion Soccer Academy",
  },
  {
    id: 6,
    img: "/avatar.jpeg",
    message:
      "Phoenix Soccer Academy takes this opportunity to thank the NIC team for a great tournament. That you could disqualify a team for age cheating at whatever level deserves great respect as it is levels the playing field and gives chance to those young ones whose spaces are always taken up by bigger players. We can't wait for the next one.",
    name: "Phoenix Soccer Academy",
  },
  {
    id: 7,
    img: "/avatar.jpeg",
    message:
      "A big congratulations to Akumu Kevin and his organising committee. You have done well for a 1st edition and we now that the sky is not the limit for you! So much went well and the many levels of awards made it worth it. The players are happy and that makes us happy. Cheers and looking forward to the next edition.",
    name: "Sakata Soka Stars",
  },
  {
    id: 8,
    img: "/avatar.jpeg",
    message:
      "As Express Academy, we take this opportunity to thank the NIC team for organizing the tournament. There were few challenges which I believe the management will look into to make it better next time. Mistaes are the portals of discovery, I believe you have discovered something that will make it better next time.",
    name: "Express Soccer Academy",
  },
];
