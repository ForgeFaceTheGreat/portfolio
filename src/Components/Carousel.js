import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import 'swiper/swiper-bundle.css'

import '../styles/Carousel.css' 

const content = [
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
                    speed={1500} /* 2000 = 2 sec */
                    autoplay={{
                        delay: 5000, /* 5000 = 5 sec */
                        disableOnInteraction: false
                    }}
                >
                {
                    content.map(data => (
                        <SwiperSlide style={{ backgroundImage: `url(${data.url})`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`, borderRadius: `2rem`}}>
                                <a href={`${data.url}`} target="_blank" className="link">
                                    <div className="vignette">
                                        { /* Adds link to entire Slide and adds vignette */ }
                                    </div>
                                    <span className="title">{data.title}</span>
                                    <span className="description">{data.description}</span>
                                </a>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}