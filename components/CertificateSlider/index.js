import "swiper/css"
import "swiper/css/pagination"
import { RxArrowTopRight } from "react-icons/rx"
import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

import { CERTIFICATE_DATA } from "@/constants"
import { SlideCard, IconWrap, Content, ArrowBox } from "./styles"

const CertificateSlider = () => {
  const data = CERTIFICATE_DATA

  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 2, spaceBetween: 15 },
        768: { slidesPerView: 2, spaceBetween: 10 },
        1024: { slidesPerView: 3, spaceBetween: 10 },
      }}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      style={{ height: "250px", "--swiper-pagination-color": "#fff" }}
      className="sm:h-[320px]"
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <SlideCard>
            <IconWrap>{item.icon}</IconWrap>

            <Content>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
              <Image src={item.image} width={100} height={100} alt="" style={{ width: "100%" }} />
            </Content>

            <ArrowBox>
              <Link href={item.src} target="_blank">
                <RxArrowTopRight />
              </Link>
            </ArrowBox>
          </SlideCard>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CertificateSlider
