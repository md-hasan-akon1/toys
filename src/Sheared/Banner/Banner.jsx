import React from 'react';
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}

                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    loop: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >


                <SwiperSlide> <div className='relative' style={{
                    backgroundImage: "url(" + "https://i.ibb.co/0Jwjr2D/car-1.jpg" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '100vw',
                    height: '100vh',
                    backgroundRepeat: 'no-repeat'
                }}> <div className='text-white text-center h-full w-full absolute top-[70%] '>
                        <h1 className='font-bold text-rose-500 text-2xl'>Big Discount</h1>
                        <h1 style={{ fontStyle: "italic" }} className='font-bold  text-5xl'>Children Kids Offer</h1>
                        <p>Flat 10% off On Order Above 50$</p>
                        <button className="btn btn-secondary mt-4">Shop Now</button>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide> <div className='relative' style={{
                    backgroundImage: "url(" + "https://i.ibb.co/VD6SQz3/car-2.jpg" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '100vw',
                    height: '100vh',
                    backgroundRepeat: 'no-repeat'
                }}> <div className='text-white text-center h-full w-full absolute top-[70%] '>
                        <h1 className='font-bold text-rose-500 text-2xl'>Big Discount</h1>
                        <h1 style={{ fontStyle: "italic" }} className='font-bold  text-5xl'>Children Kids Offer</h1>
                        <p>Flat 10% off On Order Above 50$</p>
                        <button className="btn btn-secondary mt-4">Shop Now</button>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide> <div className='relative' style={{
                    backgroundImage: "url(" + "https://i.ibb.co/s2H27pv/car-3.jpg" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '100vw',
                    height: '100vh',
                    backgroundRepeat: 'no-repeat'
                }}> <div className='text-white text-center h-full w-full absolute top-[70%] '>
                        <h1 className='font-bold text-rose-500 text-2xl'>Big Discount</h1>
                        <h1 style={{ fontStyle: "italic" }} className='font-bold  text-5xl'>Children Kids Offer</h1>
                        <p>Flat 10% off On Order Above 50$</p>
                        <button className="btn btn-secondary mt-4">Shop Now</button>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide> <div className='relative' style={{
                    backgroundImage: "url(" + "https://i.ibb.co/xjTpMvt/car-4.jpg" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '100vw',
                    height: '100vh',
                    backgroundRepeat: 'no-repeat'
                }}> <div className='text-white text-center h-full w-full absolute top-[70%] '>
                        <h1 className='font-bold text-rose-500 text-2xl'>Big Discount</h1>
                        <h1 style={{ fontStyle: "italic" }} className='font-bold  text-5xl'>Children Kids Offer</h1>
                        <p>Flat 10% off On Order Above 50$</p>
                        <button className="btn btn-secondary mt-4">Shop Now</button>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide> <div className='relative' style={{
                    backgroundImage: "url(" + "https://i.ibb.co/ZVsr2zZ/car-5.jpg" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '100vw',
                    height: '100vh',
                    backgroundRepeat: 'no-repeat'
                }}> <div className='text-white text-center h-full w-full absolute top-[70%] '>
                        <h1 className='font-bold text-rose-500 text-2xl'>Big Discount</h1>
                        <h1 style={{ fontStyle: "italic" }} className='font-bold  text-5xl'>Children Kids Offer</h1>
                        <p>Flat 10% off On Order Above 50$</p>
                        <button className="btn btn-secondary mt-4">Shop Now</button>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide> <div className='relative' style={{
                    backgroundImage: "url(" + "https://i.ibb.co/VC07Fkd/car-8.jpg" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '100vw',
                    height: '100vh',
                    backgroundRepeat: 'no-repeat'
                }}> <div className='text-white text-center h-full w-full absolute top-[70%] '>
                        <h1 className='font-bold text-rose-500 text-2xl'>Big Discount</h1>
                        <h1 style={{ fontStyle: "italic" }} className='font-bold  text-5xl'>Children Kids Offer</h1>
                        <p>Flat 10% off On Order Above 50$</p>
                        <button className="btn btn-secondary mt-4">Shop Now</button>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide> <div className='relative' style={{
                    backgroundImage: "url(" + "https://i.ibb.co/xjTpMvt/car-4.jpg" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '100vw',
                    height: '100vh',
                    backgroundRepeat: 'no-repeat'
                }}> <div className='text-white text-center h-full w-full absolute top-[70%] '>
                        <h1 className='font-bold text-rose-500 text-2xl'>Big Discount</h1>
                        <h1 style={{ fontStyle: "italic" }} className='font-bold  text-5xl'>Children Kids Offer</h1>
                        <p>Flat 10% off On Order Above 50$</p>
                        <button className="btn btn-secondary mt-4">Shop Now</button>
                    </div>
                </div></SwiperSlide>
                </Swiper>
        </div>
    );
};

export default Banner;