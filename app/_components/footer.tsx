import Link from 'next/link';

export default function Footer() {
const currentYear = new Date().getFullYear();

return (
    <footer className='border-t border-t-gray-200 py-4 text-center lg:text-left'>
        <div className='max-w-screen-2xl mx-auto px-4 sm:px-8'>
            <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4'>
                <Link href='/'>
                    <img className='w-48' src='/logo.svg' alt='Logo' />
                </Link>
                <p className='text-base italic text-gray-700'>
                    &copy; {currentYear} Business site. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
);
}