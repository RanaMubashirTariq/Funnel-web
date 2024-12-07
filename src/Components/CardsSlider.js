import React from 'react'
import { Swiper , SwiperSlide } from 'swiper/react';
import { EffectCoverflow,Pagination,Navigation } from 'swiper/modules';
import  'swiper/css';
import  'swiper/css/effect-coverflow';
import  'swiper/css/pagination';
import  'swiper/css/navigation';
import './CardsSlider.css';

export default function CardsSlider() {
  return (
    <div className='Cards-Slider-container'>

                <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={false}
                slidesPerView={'auto'}
                coverflowEffect={
                {
                    rotate :0,
                    stretch:0,
                    depth:100,
                    modifier:2.5
                }
                }
                    pagination={{el:'.swiper-pagination',clickable:true}}
                
                modules={[EffectCoverflow,Pagination,Navigation]}
                className='swiper_container'

                >
                <SwiperSlide>
                <div className='slider-card'>
                    <div className='slider-card-inner-d'>
                        <div className='slider-card-top-d'>
                                    <h2>Lorem ispum</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
                            </div >

                            <div className='slider-card-bottom-d'>
                                    <div className='slider-card-list-row-d'><img src="/Images/circle-tick.svg"/><p>Corem ipsum dolor</p></div>
                                    <div className='slider-card-list-row-d'><img src="/Images/circle-tick.svg"/><p>Sit amet, consectetur adipiscing</p></div>
                                    <div className='slider-card-list-row-d'><img src="/Images/circle-tick.svg"/><p>Nunc vulputate libero</p></div>
                                    <div className='slider-card-list-row-d'><img src="/Images/circle-tick.svg"/><p>et velit interdum</p></div>
                                 </div>
                    </div>
           </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='slider-card'>
                    <div className='slider-card-inner-d'>
                        <div className='slider-card-top-d'>
                                    <h2>Lorem ispum</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
                            </div >

                            <div className='slider-card-bottom-d'>
                                    <div className='slider-card-list-row-d'><img src="/Images/circle-tick.svg"/><p>Corem ipsum dolor</p></div>
                                    <div className='slider-card-list-row-d'><img src="/Images/circle-tick.svg"/><p>Sit amet, consectetur adipiscing</p></div>
                                    <div className='slider-card-list-row-d'><img src="/Images/circle-tick.svg"/><p>Nunc vulputate libero</p></div>
                                    <div className='slider-card-list-row-d'><img src="/Images/circle-tick.svg"/><p>et velit interdum</p></div>
                                 </div>
                    </div>
           </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='slider-card'>
                    <div className='slider-card-inner-d'>
                        <div className='slider-card-top-d'>
                                    <h2>Lorem ispum</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
                            </div >

                            <div className='slider-card-bottom-d'>
                                    <div className='slider-card-list-row-d'><img src="/Images/circle-tick.svg"/><p>Corem ipsum dolor</p></div>
                                    <div className='slider-card-list-row-d'><img src="/Images/circle-tick.svg"/><p>Sit amet, consectetur adipiscing</p></div>
                                    <div className='slider-card-list-row-d'><img src="/Images/circle-tick.svg"/><p>Nunc vulputate libero</p></div>
                                    <div className='slider-card-list-row-d'><img src="/Images/circle-tick.svg"/><p>et velit interdum</p></div>
                                 </div>
                    </div>
           </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='slider-card'>
                    <div className='slider-card-inner-d'>
                        <div className='slider-card-top-d'>
                                    <h2>Lorem ispum</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
                            </div >

                            <div className='slider-card-bottom-d'>
                                    <div className='slider-card-list-row-d'><img src="/Images/circle-tick.svg"/><p>Corem ipsum dolor</p></div>
                                    <div className='slider-card-list-row-d'><img src="/Images/circle-tick.svg"/><p>Sit amet, consectetur adipiscing</p></div>
                                    <div className='slider-card-list-row-d'><img src="/Images/circle-tick.svg"/><p>Nunc vulputate libero</p></div>
                                    <div className='slider-card-list-row-d'><img src="/Images/circle-tick.svg"/><p>et velit interdum</p></div>
                                 </div>
                    </div>
           </div>
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-pagination"></div>
                </div>

                </Swiper>
    </div>
  )
}
