import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// creatig array of objects for reviews
const reviews = [
    { id: 1, name: "Dianne Medi", company: "Starbucks", image: "/src/assets/avt1.png", comment: "Sohail's expertise in front-end development is unparalleled. His attention to detail and commitment to creating seamless user experiences truly set him apart. Working with him was a pleasure, and the results exceeded our expectations." },
    { id: 2, name: "Russell Paul", company: "Codingit", image: "/src/assets/avt2.png", comment: "As a front-end developer, Sohail brings both creativity and technical skill to the table. His ability to translate design concepts into functional. We've received numerous compliments on the user interface he developed for our platform." },
    { id: 3, name: "Richard Tylor", company: "WebBridge", image: "/src/assets/avt3.png", comment: "I had the pleasure of collaborating with Sohail on a front-end project, and I was thoroughly impressed by her professionalism and proficiency. HE demonstrated a deep understanding,I highly recommend Maya for any front-end development work" }
   
]


function ReviewCard() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}

                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide key={review.id} className='border border-[#006B6A] p-8 rounded-md'>
                        <div>
                            <img src="/src/assets/Stars.png" alt="" className='h-4' />
                            <p className='my-5'>{review.comment}</p>
                            <div className='flex items-center'>
                                <img src={review.image} alt="" className='h-10 w-10' />
                                <div>
                                    <p className='font-semibold ml-1'>{review.name}</p>
                                    <p className='text-sm ml-1'>{review.company}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </>
    )
}

export default ReviewCard
