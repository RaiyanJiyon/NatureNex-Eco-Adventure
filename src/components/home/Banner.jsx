// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
    return (
        <div>
            <Swiper className='absolute'
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{ delay: 3000 }}
            >
                <SwiperSlide>
                    <img className='w-full md:h-[600px]' src="https://i.ibb.co.com/gPYTpLt/slider-1.webp" alt="Slider 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full md:h-[600px]' src="https://i.ibb.co.com/FWTCvSC/slider-2.jpg" alt="Slider 4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full md:h-[600px]' src="https://images.unsplash.com/photo-1484264883846-eb04404af310?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slider 3" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;