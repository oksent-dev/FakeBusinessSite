'use client';
import {useState, useRef} from 'react';
function Question({title}: {title: string}) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement | null>(null);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='border border-gray-200 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300'>
            <div className='flex justify-between items-center'>
                <button onClick={toggle} className='flex items-center w-full justify-between'>
                    <h3 className='text-lg text-gray-900 font-medium'>{title}</h3>
                    <img src='/img/icons/add-circle-outline.svg' className={`w-8 transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
                </button>
            </div>
            <div
                ref={contentRef}
                style={{ maxHeight: isOpen ? `${contentRef.current ? contentRef.current.scrollHeight : 0}px` : '0px' }}
                className={`transition-max-height duration-300 overflow-hidden`}
            >
                <p className='text-gray-700 mt-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Velit aperiam harum dolore, est ducimus alias eius consequuntur in ut perspiciatis! 
                    Praesentium eum voluptatibus ducimus incidunt illo voluptatem invento.
                </p>
            </div>
        </div>
    );
}
export default function Questions() {
    const questionsData = [
        {title: 'How does the free trial work?'},
        {title: 'What products do you offer?'},
        {title: 'Do you offer refunds?'},
        {title: 'Can I cancel anytime?'},
    ]
    return (
        <section className='max-w-screen-2xl mx-auto px-4 sm:px-8 text-center mb-16 lg:mb-24'>
            <h2 className='text-4xl lg:text-5xl font-semibold tracking-tighter text-gray-900 mb-4'>
                Any <span className='text-blue-700'>questions?</span>
            </h2>
            <p className='text-lg text-gray-700 mb-12'>
                Here are the most common.
            </p>
            <div className='space-y-4 max-w-4xl mx-auto mb-12'>
                {questionsData.map((question, index) => (
                    <Question key={index} title={question.title} />
                ))}
            </div>        
        </section>
    );
}