import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import 'swiper/swiper-bundle.css'

import '../styles/Carousel.css' 

const slider = [
    {
        title: "Image 1",
        description: "Stuff and things",
        url: "./Images/img1.png",
    },
    {
        title: "Image 2",
        description: "Other things and stuff",
        url: "./Images/img2.jpg",
    },
    {
        title: "Image 3",
        description: "Really cool stuff and things. And other stuff and things",
        url: "./Images/img3.jpg",
    },
]

export default function Carousel()
{
    return (
        <>
            <Swiper className="carousel"
                    modules={[Pagination, EffectCoverflow, Autoplay]}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 3,
                        slideShadows: true
                    }}
                    loop={true}
                    pagination={{ clickable: true }}
                    // slidesPerView={2}
                    speed={1000}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                >
                {
                    slider.map(data => (
                    <SwiperSlide style={{ backgroundImage: `url(${data.url})`}}>
                            <div className="title">{data.title}</div>
                            <p className="description">{data.description}</p>
                            <a href={`${data.url}`} target="_blank" className="link">explore</a>
                    </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}