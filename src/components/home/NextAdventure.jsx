import { FaInstagram, FaTiktok, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// Import Swiper core and required modules
import { Navigation, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const NextAdventure = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="space-y-3">
                    <h2 className="text-3xl font-medium">Share your next adventure</h2>
                    <p className="text-sm">Show us how you <span className="font-bold">#GetOutThere</span> by tagging us <span className="font-bold">@NatureNex</span> for a chance to be featured!</p>
                </div>
                <div className="flex md:justify-end items-center gap-4 sm:pl-4 md:pl-0 w-full md:w-1/2">
                    <FaInstagram className="text-3xl cursor-pointer" />
                    <FaTiktok className="text-3xl cursor-pointer" />
                    <FaFacebook className="text-3xl cursor-pointer" />
                    <FaXTwitter className="text-3xl cursor-pointer" />
                    <FaLinkedin className="text-3xl cursor-pointer" />
                </div>
            </div>

            <div className="mt-10">
                <Swiper className='absolute'
                    modules={[Navigation, A11y, Autoplay]}
                    spaceBetween={50}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3
                        }
                    }
                    }
                    
                    navigation
                    autoplay={{ delay: 3000 }}
                >
                    <SwiperSlide className="group">
                        <img className="rounded-2xl transition-transform duration-300 ease-in-out transform group-hover:scale-110" src="https://i.ibb.co/5rznFCP/adventure-1.jpg" alt="adventure image" />
                        <span className="relative -top-8 md:pl-6 text-xs md:text-sm text-white font-semibold">@everydayadvaiturefam</span>
                    </SwiperSlide>
                    <SwiperSlide className="group">
                        <img className="rounded-2xl transition-transform duration-300 ease-in-out transform group-hover:scale-110" src="https://i.ibb.co/zRYQPHW/adventure-2.jpg" alt="adventure image" />
                        <span className="relative -top-8 md:pl-6 text-xs md:text-sm text-white font-semibold">@kylamsteele</span>
                    </SwiperSlide>
                    <SwiperSlide className="group">
                        <img className="rounded-2xl transition-transform duration-300 ease-in-out transform group-hover:scale-110" src="https://i.ibb.co/c2Bggc6/adventure-3.jpg" alt="adventure image" />
                        <span className="relative -top-8 md:pl-6 text-xs md:text-sm text-white font-semibold">@veganpattyy</span>
                    </SwiperSlide>
                    <SwiperSlide className="group">
                        <img className="rounded-2xl transition-transform duration-300 ease-in-out transform group-hover:scale-110" src="https://i.ibb.co/SsdNQLn/adventure-4.jpg" alt="adventure image" />
                        <span className="relative -top-8 md:pl-6 text-xs md:text-sm text-white font-semibold">@anastasias.true</span>
                    </SwiperSlide>
                    <SwiperSlide className="group">
                        <img className="rounded-2xl transition-transform duration-300 ease-in-out transform group-hover:scale-110" src="https://i.ibb.co/W2sxjHj/adventure-5.jpg" alt="adventure image" />
                        <span className="relative -top-8 md:pl-6 text-xs md:text-sm text-white font-semibold">@sabina_oboean</span>
                    </SwiperSlide>
                    <SwiperSlide className="group">
                        <img className="rounded-2xl transition-transform duration-300 ease-in-out transform group-hover:scale-110" src="https://i.ibb.co/5vJVFq3/adventure-6.jpg" alt="adventure image" />
                        <span className="relative -top-8 md:pl-6 text-xs md:text-sm text-white font-semibold">@arunachellan</span>
                    </SwiperSlide>
                    <SwiperSlide className="group">
                        <img className="rounded-2xl transition-transform duration-300 ease-in-out transform group-hover:scale-110" src="https://i.ibb.co/yQj42xW/adventure-7.jpg" alt="adventure image" />
                        <span className="relative -top-8 md:pl-6 text-xs md:text-sm text-white font-semibold">@britt.venturesout</span>
                    </SwiperSlide>
                </Swiper>


            </div>
        </div>
    );
};

export default NextAdventure;



