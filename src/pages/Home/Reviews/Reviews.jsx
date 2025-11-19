import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';
import customer_top from '../../../assets/customer-top.png'

const Reviews = ({reviewsPromise}) => {

    const reviews = use(reviewsPromise)
    console.log(reviews);

    return (
        <div className='my-24'>
            <div className='text-center mb-16 flex flex-col items-center'>
                <img src={customer_top} alt="" />
                <h3 className='text-3xl text-center text-secondary font-bold my-8'>What our customers are saying</h3>
                <p>
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!
                </p>
            </div>
            <Swiper
                loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 30,
                    stretch: '50%',
                    depth: 200,
                    modifier: 1,
                    scale: 0.75,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className='mySwiper'
            >
                {
                    reviews.map(review => <SwiperSlide key={review.id}>
                    <ReviewCard review={review}></ReviewCard>
                </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Reviews;