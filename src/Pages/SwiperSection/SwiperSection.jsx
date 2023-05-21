
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Rating } from "@smastrom/react-rating";
const SwiperSection = () => {
    return (
        <div className="w-full">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow,Autoplay, Pagination]}
                className="mySwiper"
            >
                <div className="w-full ">
                    <SwiperSlide >

                        <div className=" mt-10 mx-auto   card w-96 bg-gray-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img className="w-24 h-24 rounded-full" src="https://i.ibb.co/Cz7zn8h/man-1.jpg" alt="swiper" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-red-600">jheny hong</h2>
                                <p>Car Toys has a rating of 4.02 stars from 44 reviews, indicating that most customers are generally satisfied with their purchases. 
                                    Pros and cons: Quality of the installation was top notch ⋅ Customer service best ⋅ View full list</p>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={4.5}
                                    readOnly
                                />
                             
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide >

                        <div className=" mt-10 mx-auto   card w-96 bg-gray-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img className="w-24 h-24 rounded-full" src="https://i.ibb.co/RyRYCrq/woman.jpg" alt="swiper" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-red-600">yung kuf</h2>
                                <p>Car Toys has a rating of 4.02 stars from 44 reviews, indicating that most customers are generally satisfied with their purchases. 
                                    Pros and cons: Quality of the installation was top notch ⋅ Customer service best ⋅ View full list</p>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={4.5}
                                    readOnly
                                />
                             
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide >

                        <div className=" mt-10 mx-auto   card w-96 bg-gray-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img className="w-24 h-24 rounded-full" src="https://i.ibb.co/Lkd8kpy/man-2.jpg" alt="swiper" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-red-600">jhon dea</h2>
                                <p>Car Toys has a rating of 4.02 stars from 44 reviews, indicating that most customers are generally satisfied with their purchases. 
                                    Pros and cons: Quality of the installation was top notch ⋅ Customer service best ⋅ View full list</p>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={4.5}
                                    readOnly
                                />
                             
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide >

                        <div className=" mt-10 mx-auto   card w-96 bg-gray-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img className="w-24 h-24 rounded-full" src="https://i.ibb.co/37Zsxg3/woman-1.jpg" alt="swiper" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-red-600">Tasfia </h2>
                                <p>Car Toys has a rating of 4.02 stars from 44 reviews, indicating that most customers are generally satisfied with their purchases. 
                                    Pros and cons: Quality of the installation was top notch ⋅ Customer service best ⋅ View full list</p>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={4.5}
                                    readOnly
                                />
                             
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide >

                        <div className=" mt-10 mx-auto   card w-96 bg-gray-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img className="w-24 h-24 rounded-full" src="https://i.ibb.co/vQT6BZm/woman-3.jpg" alt="swiper" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-red-600">Rucika</h2>
                                <p>Car Toys has a rating of 4.02 stars from 44 reviews, indicating that most customers are generally satisfied with their purchases. 
                                    Pros and cons: Quality of the installation was top notch ⋅ Customer service best ⋅ View full list</p>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={4.5}
                                    readOnly
                                />
                             
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide >

                        <div className=" mt-10 mx-auto   card w-96 bg-gray-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img className="w-24 h-24 rounded-full" src="https://i.ibb.co/Cz7zn8h/man-1.jpg" alt="swiper" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-red-600">Robat kurls</h2>
                                <p>Car Toys has a rating of 4.02 stars from 44 reviews, indicating that most customers are generally satisfied with their purchases. 
                                    Pros and cons: Quality of the installation was top notch ⋅ Customer service best ⋅ View full list</p>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={4.5}
                                    readOnly
                                />
                             
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide >

                        <div className=" mt-10 mx-auto   card w-96 bg-gray-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img className="w-24 h-24 rounded-full" src="https://i.ibb.co/37Zsxg3/woman-1.jpg" alt="swiper" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-red-600">Hung cueee</h2>
                                <p>Car Toys has a rating of 4.02 stars from 44 reviews, indicating that most customers are generally satisfied with their purchases. 
                                    Pros and cons: Quality of the installation was top notch ⋅ Customer service best ⋅ View full list</p>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={4.5}
                                    readOnly
                                />
                             
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide >

                        <div className=" mt-10 mx-auto   card w-96 bg-gray-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img className="w-24 h-24 rounded-full" src="https://i.ibb.co/Cz7zn8h/man-1.jpg" alt="swiper" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-red-600">jheny hong</h2>
                                <p>Car Toys has a rating of 4.02 stars from 44 reviews, indicating that most customers are generally satisfied with their purchases. 
                                    Pros and cons: Quality of the installation was top notch ⋅ Customer service best ⋅ View full list</p>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={4.5}
                                    readOnly
                                />
                             
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide >

                        <div className=" mt-10 mx-auto   card w-96 bg-gray-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img className="w-24 h-24 rounded-full" src="https://i.ibb.co/37Zsxg3/woman-1.jpg" alt="swiper" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-red-600">jheny hong</h2>
                                <p>Car Toys has a rating of 4.02 stars from 44 reviews, indicating that most customers are generally satisfied with their purchases. 
                                    Pros and cons: Quality of the installation was top notch ⋅ Customer service best ⋅ View full list</p>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={4.5}
                                    readOnly
                                />
                             
                            </div>
                        </div>

                    </SwiperSlide>
                </div>

            </Swiper>
        </div>
    );
};

export default SwiperSection;