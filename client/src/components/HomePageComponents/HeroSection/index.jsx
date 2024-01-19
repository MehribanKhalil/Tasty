import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import './index.scss'

const HeroSection = () => {
    return (
        <div className=' hero '>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className=' slider slider-1  flex justify-center items-center text-center'>
                        <div >
                            <h1 className=' text-white'>Tasty & Delicious Food</h1>

                            <button className=' border-2 text-white px-8 py-3 border-white hover:bg-white hover:text-black  duration-300'>
                                Book a table
                            </button> </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=' slider slider-2 flex justify-center items-center text-center'>
                        <div>
                            <h1  className=' text-white'>Tasty & Delicious Food</h1>

                            <button className=' border-2 text-white px-8 py-3 border-white hover:bg-white hover:text-black  duration-300'>
                                Book a table
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=' slider slider-3 flex justify-center items-center text-center'>
                        <div>
                            <h1 className=' text-white'>Tasty & Delicious Food</h1>

                            <button className=' border-2 text-white px-8 py-3 border-white hover:bg-white hover:text-black  duration-300'>
                                Book a table
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default HeroSection