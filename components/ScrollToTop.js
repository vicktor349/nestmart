import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const ScrollToTop = () =>
{
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () =>
    {
        if (window.scrollY > 300)
        {
            setIsVisible(true);
        } else
        {
            setIsVisible(false);
        }
    };

    const scrollToTop = () =>
    {
        const scrollStep = -window.scrollY / (700 / 15);
        const scrollInterval = setInterval(() =>
        {
            if (window.scrollY !== 0)
            {
                window.scrollBy(0, scrollStep);
            } else
            {
                clearInterval(scrollInterval);
            }
        }, 15);
    };

    useEffect(() =>
    {
        window.addEventListener('scroll', toggleVisibility);
        return () =>
        {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-50">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="bg-primary text-white rounded-full shadow-md transition-opacity duration-300 h-12 w-12 flex items-center justify-center"
                >
                    <IoIosArrowUp size={24} className='text-white' />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;