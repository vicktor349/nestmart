import React from 'react'
import slides from '@/data/carouseldata'
import { Carousel } from '@mantine/carousel'
import { HiOutlineMail } from "react-icons/hi";

const HeroBanner = () =>
{
    return (
        <Carousel
            loop
            className='text-white ssm:h-[20rem] sm:h-[25rem] md:h-[27rem] lg:h-[33rem] border-transparent rounded-3xl flex justify-center relative md:mt-12'
        >
            <Carousel.Slide style={{ backgroundImage: `url(${slides[0].url})` }} className='bg-cover bg-center bg-no-repeat rounded-3xl'>
                <div className='flex bottom-0 justify-center w-full'>
                    <div className="w-full ssm:h-[20rem] sm:h-[25rem] md:h-[27rem] lg:h-[33rem] border-transparent flex items-center rounded-3xl">
                        <div className="ml-4 sm:ml-24 md:ml-24 md:text-left leading-10 h-72 w-fit">
                            <p className="text-primaryText ssm:text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold -ml-1 sm:text-center md:te">{slides[0].text1}</p>
                            <p className="text-primaryText ssm:text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold -ml-1">{slides[0].text2}</p>
                            <p className="text-[#7E7E7E] mt-6 md:text-lg lg:text-xl">{slides[0].save}</p>
                            <div className="bg-white mt-6 md:mt-6 ssm:w-[19rem] sm:w-full h-16 rounded-full flex items-center">
                                <HiOutlineMail className="w-6 h-6 ssm:mx-2 sm:mx-5 text-gray-500" />
                                <input type="text" className="flex-grow rounded-full text-[#9ca3af] ssm:px-2 sm:px-4 outline-none" placeholder="Your email address" />
                                <button className="bg-primary h-16 rounded-full text-white ssm:hidden sm:block sm:w-24 md:w-32 ml-2 md:ml-0">{slides[0].subscribe}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Slide>
            <Carousel.Slide style={{ backgroundImage: `url(${slides[1].url})` }} className='bg-cover bg-center bg-no-repeat rounded-3xl'>
                <div className='flex bottom-0 justify-center w-full'>
                    <div className="w-full ssm:h-[20rem] sm:h-[25rem] md:h-[27rem] lg:h-[33rem] border-transparent flex items-center rounded-3xl">
                        <div className="ml-4  sm:ml-24 md:ml-24 md:text-left leading-10 h-72 w-fit">
                            <p className="text-primaryText ssm:text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold -ml-1">{slides[1].text1}</p>
                            <p className="text-primaryText ssm:text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold -ml-1">{slides[1].text2}</p>
                            <p className="text-[#7E7E7E] mt-6 md:text-lg lg:text-xl">{slides[1].save}</p>
                            <div className="bg-white mt-6 md:mt-6 ssm:w-[19rem] sm:w-full h-16 rounded-full flex items-center">
                                <HiOutlineMail className="w-6 h-6 ssm:mx-2 sm:mx-5 text-gray-500" />
                                <input type="text" className="flex-grow rounded-full text-[#9ca3af] ssm:px-2 sm:px-4 outline-none" placeholder="Your email address" />
                                <button className="bg-primary h-16 rounded-full text-white ssm:hidden sm:block sm:w-24 md:w-32 ml-2 md:ml-0">{slides[1].subscribe}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Slide>
        </Carousel>
    )
}

export default HeroBanner;