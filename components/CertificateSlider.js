import Image from "next/image"
import Link from "next/link"
import { RxArrowTopRight } from "react-icons/rx"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

//data
import { CERTIFICATE_DATA } from "@/constants"

const CertificateSlider = () => {
  const data = CERTIFICATE_DATA
  return (
    <>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="h-[250px] sm:h-[320px]"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="group flex gap-x-5 rounded-lg bg-[rgba(65,47,123,0.15)] p-5 transition-all duration-300 hover:bg-[rgba(89,65,169,0.15)] xl:block">
              <div className="mb-5 w-[calc(100%-74px)] xl:w-full">
                <h5 className="h5 mb-2 font-bold">{item.title}</h5>
                <Image src={item.image} width={100} height={100} alt="" className="w-full"/>
              </div>
              <div className="flex h-[30px] w-[30px] items-center justify-center text-2xl text-white/30 transition-all duration-300 group-hover:rotate-45 group-hover:text-accent">
                <Link href={item.src} target="_bland" >
                <RxArrowTopRight />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default CertificateSlider
