
'use client'
import MainButton from './_partial/mainButton';
import { useInView } from 'react-intersection-observer';
type FeatureProps = {
    icon: string;
    title: string;
    description: string;
};
function Feature({icon, title, description}: FeatureProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 1
    });

    return (
        <div ref={ref} className={`max-w-96 transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            <div className='p-3 rounded-lg mx-auto w-max mb-4 bg-blue-700'>
                <img src={icon} alt='icon' className='w-6 h-6'/>
            </div>
            <p className='text-lg text-gray-700 font-medium mb-1'>
                {title}
            </p>
            <p className='text-base text-gray-700'>
                {description}
            </p>
        </div>
    );
}
export default function Features() {
    const featuresData = [
        {
            icon: '/img/icons/bulb-outline.svg',
            title: 'Innovative solutions',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. \
            Ducimus quis enim tempore corrupti at vel beatae consequatur eius'
        },
        {
            icon: '/img/icons/documents-outline.svg',
            title: 'Document management',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. \
            Ducimus quis enim tempore corrupti at vel beatae consequatur eius'
        },
        {
            icon: '/img/icons/cube-outline.svg',
            title: 'Great logistical support',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. \
            Ducimus quis enim tempore corrupti at vel beatae consequatur eius'
        },
        {
            icon: '/img/icons/shield-checkmark-outline.svg',
            title: 'Trustworthy brand',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. \
            Ducimus quis enim tempore corrupti at vel beatae consequatur eius'
        },
        {
            icon: '/img/icons/bar-chart-outline.svg',
            title: 'Excellent results',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. \
            Ducimus quis enim tempore corrupti at vel beatae consequatur eius'
        },
    ]
    return (
        <section className='max-w-screen-2xl mx-auto px-4 sm:px-8 text-center mb-16 lg:mb-24'>
            <h2 className='text-4xl lg:text-5xl font-semibold tracking-tighter text-gray-900 mb-4'>
            Stay <span className='text-blue-700'>ahead</span> of other companies
            </h2>
            <div className='flex justify-center flex-wrap gap-8 mb-16'>
                {featuresData.map((feature, idx) => (
                    <Feature key={idx} {...feature} />
                ))}
            </div>
            <MainButton 
              text='Consultation is free'
              imgSrc='/img/icons/chevron-forward-right.svg'
              href='/' />
        </section>
    );
}