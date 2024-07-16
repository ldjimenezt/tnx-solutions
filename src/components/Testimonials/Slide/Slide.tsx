import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { dataTestimonials } from '../Testimonials.data'
import { Reveal } from '@/components/Reveal'
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules'

export function Slide() {
    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                678: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }
            }}
            freeMode={true}
            pagination={{
                clickable: true
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="h-auto w-full md:max-w-5xl"
        >
            {dataTestimonials.map(({ id, name, work, testimonial, image }) => (
                <SwiperSlide key={id} className="my-10 cursor-pointer md:px-10">
                    <Reveal>
                        <div className="flex flex-col items-center border border-secondary rounded-lg shadow-lg">
                            <Image src={image} alt={name} width="50" height={50} className="mb-4" />
                            <div className='text-center'>
                                <h4 className="text-xl font-semibold">{name}</h4>
                                <p className="text-primaryDark mb-4">{work}</p>
                                <p className="text-sm text-primaryDark">{testimonial}</p>
                            </div>
                        </div>
                    </Reveal>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
