
import React, { useRef, useState } from "react";
import { Autoplay, EffectCoverflow, FreeMode, Pagination } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

const NewProduct = () => {
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
                <SwiperSlide>

                    <div className=" mx-auto card w-96 bg-base-100 shadow-xl">
                        <figure><img className="h-60 " src="https://i.ibb.co/ZB0PyDy/s-1.jpg" alt="product" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-red-500">
                                racing car
                                <div className="badge badge-secondary">NEW PRODUCT</div>
                            </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, facilis.</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Free Delivery For Fast 5 Order</div>
                                <div className="badge badge-outline">Order Now</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="mx-auto card w-96 bg-base-100 shadow-xl">
                        <figure><img className="h-60 " src="https://i.ibb.co/yySmTv9/s.jpg" alt="product" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-red-500">
                                racing car
                                <div className="badge badge-secondary">NEW PRODUCT</div>
                            </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, facilis.</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Free Delivery For Fast 5 Order</div>
                                <div className="badge badge-outline">Order Now</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="card mx-auto  w-96 bg-base-100 shadow-xl">
                        <figure><img className="h-60 " src="https://i.ibb.co/WHKS8hD/s-2.jpg" alt="product" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-red-500">
                                racing car
                                <div className="badge badge-secondary">NEW PRODUCT</div>
                            </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, facilis.</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Free Delivery For Fast 5 Order</div>
                                <div className="badge badge-outline">Order Now</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="card mx-auto w-96 bg-base-100 shadow-xl">
                        <figure><img className="h-60 " src="https://i.ibb.co/Gp2jRTv/c.jpg" alt="product" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-red-500">
                                rol royels
                                <div className="badge badge-secondary">NEW PRODUCT</div>
                            </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, facilis.</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Free Delivery For Fast 5 Order</div>
                                <div className="badge badge-outline">Order Now</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="card mx-auto w-96 bg-base-100 shadow-xl">
                        <figure><img className="h-60 " src="https://i.ibb.co/16CVcKj/c1.jpg" alt="product" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-red-500">
                                old design new
                                <div className="badge badge-secondary">NEW PRODUCT</div>
                            </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, facilis.</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Free Delivery For Fast 5 Order</div>
                                <div className="badge badge-outline">Order Now</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="card mx-auto w-96 bg-base-100 shadow-xl">
                        <figure><img className="h-60 " src="https://i.ibb.co/GvcMLSs/02.jpg" alt="product" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-red-500">
                                Truck
                                <div className="badge badge-secondary">NEW PRODUCT</div>
                            </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, facilis.</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Free Delivery For Fast 5 Order</div>
                                <div className="badge badge-outline">Order Now</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="card mx-auto w-96 bg-base-100 shadow-xl">
                        <figure><img className="h-60 " src="https://i.ibb.co/ZB0PyDy/s-1.jpg" alt="product" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-red-500">
                                racing car
                                <div className="badge badge-secondary">NEW PRODUCT</div>
                            </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, facilis.</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Free Delivery For Fast 5 Order</div>
                                <div className="badge badge-outline">Order Now</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="card mx-auto w-96 bg-base-100 shadow-xl">
                        <figure><img className="h-60 " src="https://i.ibb.co/tJcRjVB/remot.jpg" alt="product" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-red-500">
                                Remote
                                <div className="badge badge-secondary">NEW PRODUCT</div>
                            </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, facilis.</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Free Delivery For Fast 5 Order</div>
                                <div className="badge badge-outline">Order Now</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="card mx-auto w-96 bg-base-100 shadow-xl">
                        <figure><img className="h-60 " src="https://i.ibb.co/ZB0PyDy/s-1.jpg" alt="product" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-red-500">
                                racing car
                                <div className="badge badge-secondary">NEW PRODUCT</div>
                            </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, facilis.</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Free Delivery For Fast 5 Order</div>
                                <div className="badge badge-outline">Order Now</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="card mx-auto w-96 bg-base-100 shadow-xl">
                        <figure><img className="h-60 " src="https://i.ibb.co/tJcRjVB/remot.jpg" alt="product" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-red-500">
                                Remote
                                <div className="badge badge-secondary">NEW PRODUCT</div>
                            </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, facilis.</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Free Delivery For Fast 5 Order</div>
                                <div className="badge badge-outline">Order Now</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="card mx-auto w-96 bg-base-100 shadow-xl">
                        <figure><img className="h-60 " src="https://i.ibb.co/ZB0PyDy/s-1.jpg" alt="product" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-red-500">
                                racing car
                                <div className="badge badge-secondary">NEW PRODUCT</div>
                            </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, facilis.</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Free Delivery For Fast 5 Order</div>
                                <div className="badge badge-outline">Order Now</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default NewProduct;