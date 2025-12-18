'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { FiExternalLink } from 'react-icons/fi';
import { FaUserClock } from 'react-icons/fa';
import { LoadingImage } from './Loading';
import { PROJECTLIST_DATA } from '../constants';

const projects = PROJECTLIST_DATA;
const ProjectSlider = () => {
  const companyKeys = projects.slides.map((slide) => slide.companyKey);
  const [selectedCompanyKey, setSelectedCompanyKey] = useState(companyKeys[0]);

  const selectedSlide = projects.slides.find((slide) => slide.companyKey === selectedCompanyKey);
  const filteredImages = selectedSlide?.images || [];

  const getCompanyName = (key) =>
    projects.slides.find((slide) => slide.companyKey === key)?.companyName || 'Unknown';

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-6 relative z-50">
        {companyKeys.map((key) => (
          <button
            key={key}
            onClick={() => setSelectedCompanyKey(key)}
            className={` rounded-full text-sm xl:text-lg font-semibold capitalize transition-all relative after:w-8 after:h-[2px] after:absolute after:-bottom-1 after:left-0 ${selectedCompanyKey === key
              ? 'text-accent after:!bg-accent after:w-full after:transition-all after:duration-300'
              : 'bg-transparent text-white after:bg-white'
              }`}
          >
            {getCompanyName(key)}
          </button>
        ))}
      </div>

      {/* Swiper */}
      <Swiper
        key={selectedCompanyKey}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={20}
        modules={[Pagination, Navigation]}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {filteredImages.length > 0 ? (
          filteredImages.map((image, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative overflow-hidden rounded-lg group bg-black flex items-center justify-center">
                {/* Company Logo */}
                <div className="absolute top-2 right-2 bg-black bg-opacity-70 p-2 rounded-full z-10">
                  <a href={image?.src} target="_blank" rel="noopener noreferrer">
                    {image?.companyImage ? (
                      <Image
                        src={image.companyImage}
                        width={24}
                        height={24}
                        alt="Company"
                        className="object-contain"
                      />
                    ) : (
                      <FaUserClock className="text-white" />
                    )}
                  </a>
                </div>

                {/* Project Image */}
                <LoadingImage
                  src={image.path}
                  alt={image.title}
                  width={500}
                  height={200}
                  className="object-contain w-full h-full"
                />

                {/* Overlay Link */}
                <Link
                  href={image.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-80 transition-all duration-300"
                >
                  <span className="text-white font-semibold flex items-center gap-2">
                    Visit Page <FiExternalLink />
                  </span>
                </Link>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <div className="text-center py-10 text-gray-500">
            No project found for this company.
          </div>
        )}
      </Swiper>
    </div>
  );
};

export default ProjectSlider;
