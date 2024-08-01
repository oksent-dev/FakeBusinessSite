'use client';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const images = [
    '/img/carousel/reachus.jpg',
    '/img/carousel/meet.jpg',
    '/img/carousel/contract.jpg',
    '/img/carousel/profit.jpg'
];

export default function Carousel() {
    const [current, setCurrent] = useState(0);
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.5
    });

    function nextImage() {
        if (current === images.length - 1) {
            return
        } else {
            setCurrent(current + 1);
        }
    }

    function prevImage() {
        if (current === 0) {
            return
        } else {
            setCurrent(current - 1);
        }
    }

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (inView) {
            interval = setInterval(() => {
                setCurrent(prevCurrent => (prevCurrent + 1) % images.length);
            }, 3000);
        }
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [inView]);


    const titleClassName = 'text-3xl lg:text-4xl font-semibold absolute top-0 left-0 right-0 text-center transition-all duration-300';

    return (
        <section ref={ref} className='mb-16 relative p-4 lg:mb-24 bg-gray-100 w-full h-[470px] sm:h-[520px]' >
            <div className='max-w-5xl h-full mx-auto'>
                <div className='mx-auto h-[50px] relative'>
                    <h2 className={`${titleClassName} ${0 === current ? 'opacity-100 delay-300' : 'opacity-0'}`}>
                        Reach <span className='text-blue-700'>Us</span>
                    </h2>
                    <h2 className={`${titleClassName} ${1 === current ? 'opacity-100 delay-300' : 'opacity-0'}`}>
                        Meet <span className='text-blue-700'>Us</span>
                    </h2>
                    <h2 className={`${titleClassName} ${2 === current ? 'opacity-100 delay-300' : 'opacity-0'}`}>
                        Sign <span className='text-blue-700'>Contract</span>
                    </h2>
                    <h2 className={`${titleClassName} ${3 === current ? 'opacity-100 delay-300' : 'opacity-0'}`}>
                        Business <span className='text-blue-700'>Growths</span>
                    </h2>    
                </div>
                <div className='rounded-lg w-full h-[420px] overflow-hidden drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] relative'>
                    {images.map((src, index) => (
                        <img
                            key={src}
                            src={src}
                            alt=''
                            className={`absolute object-cover transition-transform duration-1000 
                            ${index === current ? 'transform translate-x-0' : index < current ? 'transform -translate-x-full' : 'transform translate-x-full'}`}
                        />
                    ))}
                    <div className='absolute z-30 flex -translate-x-1/2 space-x-3 bottom-20 sm:bottom-5 left-1/2'>
                        {images.map((_, index) => (
                            <div
                                key={index}
                                className={`w-3 h-3 rounded-full border border-gray-400 ${index === current ? 'bg-blue-700' : 'bg-gray-300'}`}
                                aria-current={index === current}
                                aria-label={`Slide ${index + 1}`}
                            />
                        ))}
                    </div>
                    {/* <button onClick={prevImage} className='absolute rounded-full top-1/2 left-0 transform -translate-y-1/2 
                    p-2 mx-2 bg-white bg-opacity-60 hover:scale-105 transition-all duration-75'>
                        <img src='/img/icons/chevron-forward-right-black.svg' alt='next' className='w-7 transform scale-x-[-1]' />
                    </button>
                    <button onClick={nextImage} className='absolute rounded-full top-1/2 right-0 transform -translate-y-1/2 
                    p-2 mx-2 bg-white bg-opacity-60 hover:scale-105 transition-all duration-75'>
                        <img src='/img/icons/chevron-forward-right-black.svg' alt='next' className='w-7' />
                    </button> */}
                </div>
            </div>
        </section>
    );
}