import Link from 'next/link';
type MainButtonProps = {
    text: string;
    imgSrc: string;
    href: string;
};

export default function MainButton({ text, imgSrc, href }: MainButtonProps) {
    return (
        <Link 
          href={href}
          className='text-lg font-medium text-white bg-blue-700 hover:bg-blue-800 transition-colors duration-300 
          shadow-md shadow-blue-700/50 w-max mx-auto mb-12 group flex items-center gap-1 rounded-lg px-6 py-3'
        >
            {text}
            {imgSrc ? (
                <img src={imgSrc} alt='icon' className='w-6' />
            ) : ''}
        </Link>
    );
}
