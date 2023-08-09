import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useReview from '../../../hooks/useReview';

const Comment = () => {

    const [reviews] = useReview();

    return (
        <div>
            <div className='text-center'>
                <h1 className='text-2xl font-bold'>What Our Patients Says</h1>
                <p className='text-[#aca6a6] w-3/4 my-3 mx-auto'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
            >
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}>
                        <div className='m-10 mx-40 md:mx-72 w-full'>
                            <div className='grid grid-cols-1 md:grid-cols-2 justify-between'>
                                <div className='flex gap-3'>
                                    <div>
                                        <img className='rounded-full w-[60px] h-[60px]' src={review.image} alt="" />
                                    </div>
                                    <div>
                                        <h1 className=' font-bold'>{review.name}</h1>
                                        <p>{review.profession}</p>
                                    </div>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="42" viewBox="0 0 54 42" fill="none">
                                        <path d="M52.418 3.16406H54V0H52.418C41.6106 0 32.7227 8.38055 31.9117 18.9844C31.8716 19.5064 31.8516 20.0338 31.8516 20.5664V41.1328H54V18.9844H35.0863C35.8889 10.1271 43.3561 3.16406 52.418 3.16406Z" fill="#F7A582" />
                                        <path d="M20.5664 3.16406H22.1484V0H20.5664C9.75902 0 0.871172 8.38055 0.0601172 18.9844C0.0200391 19.5064 0 20.0338 0 20.5664V41.1328H22.1484V18.9844H3.23473C4.03734 10.1271 11.5045 3.16406 20.5664 3.16406Z" fill="#F7A582" />
                                    </svg>
                                </div>
                            </div>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={review.rating}
                                className='my-3'
                                readOnly
                            />
                            <p>{review.rating}</p>
                            <div className='w-1/2 text-[#aca6a6]  my-5'>
                                <p>{review.details}</p>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </div>
    );
};

export default Comment;