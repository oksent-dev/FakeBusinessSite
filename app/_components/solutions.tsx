'use client'
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
type SolutionProps = {
    title: string;
    price: number;
};
function Solution({title,price}: SolutionProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });
    return (
        <div ref={ref} className={`max-w-96 transition-all duration-700 rounded-lg border border-gray-200 shadow-md shadow-gray-200/50 sm:min-w-96
        ${inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            <div className='p-5'>
                <div className='pt-4 space-y-4 mb-4'>
                    <span className='text-lg text-gray-700 font-medium'>
                        {title}
                    </span>
                </div>
                <div className='space-x-2 mb-2'>
                    <span className='text-6xl font-medium text-gray-700'>
                        {price + '$'}
                    </span>
                </div>
                <p className='text-base text-gray-700 mb-2'>One time</p>
                <Link href='/' className='block text-center bg-blue-700 text-lg font-medium text-white rounded-lg p-4 hover:bg-blue-800 
                transition-colors duration-300 shadow-md shadow-blue-700/50'>
                    Check it out
                </Link>
            </div>
            <hr className='border-t border-t-gray-200 mb-2'/>
            <div className='p-5'>
                <p className='text-base font-medium mb-4'>Details</p>
                <ul className='space-y-3'>
                    {Array(4).fill(null).map((_, index) => (
                        <li key={index} className='text-base text-gray-700 flex items-center gap-2'>
                            <img src='/img/icons/checkmark.svg' alt='checkmark' className='w-6' />
                            Lorem ipsum, dolor sit amet consectetu
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default function Solutions() {
    const solutionsData = [
        {
            title: 'For individuals',
            price: 99
        },
        {
            title: 'For small businesses',
            price: 499
        },
        {
            title: 'For corporations',
            price: 999
        },
    ]
    return (
        <section className='max-w-screen-2xl mx-auto px-4 sm:px-8 text-center mb-16 lg:mb-24'>
            <h2 className='text-4xl lg:text-5xl font-semibold tracking-tighter text-gray-900 mb-4'>
                Ready to use <span className='text-blue-700'>solutions</span>
            </h2>
            <p className='text-lg text-gray-700 mb-12'>
                They always works!
            </p>
            <div className='flex justify-center flex-wrap gap-8 text-left'>
                {solutionsData.map((solution, index) => (
                    <Solution key={index} title={solution.title} price={solution.price} />
                ))}
            </div>
        </section>
    );
}