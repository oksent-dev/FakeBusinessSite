type ClientProps = {
    src: string;
    alt: string;
    delay: number;
};
function Client({src, alt, delay}: ClientProps) {
        const delayStr = delay.toString() + 's';
        return (
                <img
                    src={src}
                    alt={`${alt.replace(/-/g, ' ')} logo`}
                    className={`grayscale-80 hover:grayscale-0 transition-all duration-300 h-16 w-60
                    absolute animate-slider`}
                    style={{ animationDelay:'-' + delayStr, left: 'max(180px*13, 100%)' }}
                />
        );
}   
export default function ClientsBar() {
    const clientsData = [
        { name: 'auto-speed', src: '/img/clients/auto-speed.svg' },
        { name: 'baby-swim', src: '/img/clients/baby-swim.svg' },
        { name: 'beauty-box', src: '/img/clients/beauty-box.svg' },
        { name: 'cheshire-county-hygiene-services', src: '/img/clients/cheshire-county-hygiene-services.svg' },
        { name: 'crofts-accountants', src: '/img/clients/crofts-accountants.svg' },
        { name: 'fast-banana', src: '/img/clients/fast-banana.svg' },
        { name: 'greens-food-suppliers', src: '/img/clients/greens-food-suppliers.svg' },
        { name: 'james-and-sons', src: '/img/clients/james-and-sons.svg' },
        { name: 'petes-blinds', src: '/img/clients/petes-blinds.svg' },
        { name: 'space-cube', src: '/img/clients/space-cube.svg' },
        { name: 'the-dance-studio', src: '/img/clients/the-dance-studio.svg' },
        { name: 'the-web-works', src: '/img/clients/the-web-works.svg' },
        { name: 'yoga-baby', src: '/img/clients/yoga-baby.svg' }
    ];

    return (
        <div
            className='overflow-hidden
            [mask-image:linear-gradient(to_right,transparent,black,transparent)]
            bg-gray-100'
        >
            <p className='text-sm font-semibold pt-2 text-gray-700 text-center [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>Our clients</p>
            <div className='flex items-center relative overflow-hidden h-16 py-12'>
                {clientsData.map(({ name, src }, idx) => (
                    <Client key={name} src={src} alt={name} delay={idx * 2} />
                ))}
            </div>
        </div>
    );
}
