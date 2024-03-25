import Image from 'next/image'
import React, { useState } from 'react'
import slides from '@/data/carouseldata'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const HeroBanner = () =>
{
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () =>
    {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () =>
    {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }
    const goToSlide = (slideIndex) =>
    {
        setCurrentIndex(slideIndex)
    }

    return (
        // <div className="bg-[url('/images/herobanner/heroBanner1.png')] lg:mt-10 w-full ssm:h-[20rem] sm:h-[25rem] md:h-[27rem] lg:h-[33rem] border-transparent rounded-3xl flex flex-col justify-center">
        //     <div className="ml-6 md:ml-24 md:text-left leading-10 h-72 w-fit">
        //         <p className="text-primaryText ssm:text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold -ml-1">Fresh Vegetables</p>
        //         <p className="text-primaryText ssm:text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold -ml-1">Big discount</p>
        //         <p className="text-[#7E7E7E] mt-6 md:text-lg lg:text-xl">Save up to 50% off on your first order</p>
        //         <div className="bg-white mt-4 md:mt-6 ssm:w-[17rem] sm:w-full h-16 rounded-full flex items-center">
        //             <Image src={"/images/icons/email.svg"} alt="email icon" width="20" height="20" className="w-6 h-6 ssm:mx-2 sm:mx-5" priority />
        //             <input type="text" className="flex-grow rounded-full text-[#9ca3af] ssm:px-2 sm:px-4 outline-none" placeholder="Your email address" />
        //             <button className="bg-primary h-16 rounded-full text-white ssm:hidden sm:block sm:w-24 md:w-32 ml-2 md:ml-0">Subscribe</button>
        //         </div>
        //     </div>
        // </div>
        <div className='group lg:mt-10 w-full ssm:h-[20rem] sm:h-[25rem] md:h-[27rem] lg:h-[33rem] border-transparent rounded-3xl flex justify-center items-center relative'>
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-1000 relative'>
                {/* LEFT ARROW */}
                <div className='hidden z-[999] group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-10 text-xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                {/* RIGHT ARROW */}
                <div className='hidden z-[999] group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-10 text-xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
                <div className='flex absolute bottom-0 justify-center py-2 w-full'>
                    <div className="lg:mt-10 w-full ssm:h-[20rem] sm:h-[25rem] md:h-[27rem] lg:h-[33rem] border-transparent rounded-3xl flex flex-col justify-center">
                        <div className="ml-6 md:ml-24 md:text-left leading-10 h-72 w-fit">
                            <p className="text-primaryText ssm:text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold -ml-1">{slides[currentIndex].text1}</p>
                            <p className="text-primaryText ssm:text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold -ml-1">{slides[currentIndex].text2}</p>
                            <p className="text-[#7E7E7E] mt-6 md:text-lg lg:text-xl">{slides[currentIndex].save}</p>
                            <div className="bg-white mt-4 md:mt-6 ssm:w-[17rem] sm:w-full h-16 rounded-full flex items-center">
                                <Image src={"/images/icons/email.svg"} alt="email icon" width="20" height="20" className="w-6 h-6 ssm:mx-2 sm:mx-5" priority />
                                <input type="text" className="flex-grow rounded-full text-[#9ca3af] ssm:px-2 sm:px-4 outline-none" placeholder="Your email address" />
                                <button className="bg-primary h-16 rounded-full text-white ssm:hidden sm:block sm:w-24 md:w-32 ml-2 md:ml-0">{slides[currentIndex].subscribe}</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default HeroBanner;