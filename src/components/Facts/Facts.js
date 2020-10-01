import React, {useEffect} from 'react';
import SlideFacts from "./SlideFacts";
import SwiperCore, {Navigation, Pagination, EffectCoverflow} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import 'swiper/swiper.scss';
import './Facts.scss';
import {useScreenSize} from "../../utils/useScreenSize";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const Facts = ({title, slides}) => {
  const factsSlides = slides.map((slideInfo) =><SwiperSlide key={slideInfo.id}>
    <SlideFacts item={slideInfo}/>
  </SwiperSlide>);
  const winSize = useScreenSize();

  return (
    <section className="facts container">
      <h2 className="facts-title" id="facts">{title}</h2>
      <div className="swiper-button-prev"/>
      <Swiper navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{
                el: '.facts-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                  return `<span class="facts-pagination-bullet ${className}"></span>`;
                },
              }}
              slidesPerView={3}
              grabCursor={true}
              speed={400}
              spaceBetween={40}
              slidesPerGroup={1}
              centeredSlides={true}
              >
        {factsSlides}
      </Swiper>
      <div className="swiper-button-next"/>
      <div className="facts-pagination"/>
    </section>
  );
};

export default Facts;