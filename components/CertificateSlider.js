import { RxArrowTopRight } from "react-icons/rx"
import Image from "next/image";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination } from "swiper/modules"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//data
import {CERTIFICATE_DATA} from "../constants"

const ServiceSlider = () => {
  const data = CERTIFICATE_DATA
  return <>
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10
        },
      }}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[250px] sm:h-[320px]"
    >
      {
        data.map((item, index) => <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,0.15)] hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 p-5 rounded-lg group xl:block flex gap-x-5">
            <div className=" text-3xl  text-accent rounded-lg mb-5">{item.icon}</div>
            <div className="xl:w-full w-[calc(100%-74px)] mb-5">
              <h5 className="h5 font-bold mb-2">{item.title}</h5>
              <p>{item.description}</p>
              <Image src={item.image} className="w-full" width={100} height={100} alt=""/>
            </div>
            <div className="text-2xl h-[30px] w-[30px] flex items-center justify-center text-white/30 transition-all duration-300 group-hover:rotate-45 group-hover:text-accent">
             <Link href={item.src} target="_bland">
              <RxArrowTopRight/>
             </Link>
            </div>
          </div>
        </SwiperSlide>)
      }
    </Swiper>
  </>;
};

export default ServiceSlider;
