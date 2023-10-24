// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={0}
    loop={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="slider_swiper"
  >
      <SwiperSlide>
        <img src={require('../../imgs/adc61df7-44eb-46d7-998b-a55ab7ef501f.webp')} alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require('../../imgs/2527a687-b96b-49a9-8a57-0f84baaa9f78.webp')} alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require('../../imgs/1_Desktop_Hero Slider Homepage.1697785190.4433289.webp')} alt='' />
      </SwiperSlide>      
      <SwiperSlide>
        <img src={require('../../imgs/a5ea181d-1e33-41fa-84a9-26f116ef07ad.webp')} alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require('../../imgs/b10fea6d-32e4-4409-9c93-46c0a4c58f66.webp')} alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require('../../imgs/e189d8f3-d605-4e16-85b7-7525ce66b579.webp')} alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require('../../imgs/en_dk_uae-hero-01.1697435739.6032465.webp')} alt='' />
      </SwiperSlide>
  </Swiper>
  );
};

export default Slider;