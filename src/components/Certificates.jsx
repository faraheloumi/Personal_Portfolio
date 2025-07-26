import { CERTIFICATES } from "../constants";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Certificates = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 relative">
      <h2 className="my-10 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
        Certificates 
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="relative">
        {CERTIFICATES.map((certificate, index) => (
          <SwiperSlide key={index}>
            <div className="p-3 rounded-lg border border-neutral-700 text-center shadow-lg shadow-purple-400/30 w-full bg-neutral-900 bg-opacity-10 min-h-[300px] flex flex-col justify-between">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="rounded-lg mb-2 w-full h-32 object-cover"/>
              <div>
                <h3 className="text-base font-semibold">{certificate.title}</h3>
                <p className="text-xs text-neutral-400 mt-1">{certificate.date}</p>
                <p className="text-xs text-neutral-400 mt-1">{certificate.issuer}</p>
              </div>
              <div className="mt-2">
                <a href={certificate.credlyLink} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline text-sm">
                  View the Certificate
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev after:text-purple-500 after:opacity-50 hover:after:opacity-50"></div>
        <div className="swiper-button-next after:text-purple-500 after:opacity-50 hover:after:opacity-50"></div>
      </Swiper>
    </div>
  );
};

export default Certificates;