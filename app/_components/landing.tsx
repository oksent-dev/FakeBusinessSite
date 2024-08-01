import Link from 'next/link';
import MainButton from './_partial/mainButton';
import ClientsBar from './_partial/clientsBar';
import Image from 'next/image'

export default function Landing() {
    const spanClassName = 'text-blue-700';

    const currentDate = new Date();
    const futureDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate());

    return (
        <section className='max-w-screen-2xl mx-auto px-4 sm:px-8 text-center mb-16 lg:mb-24'>
            <Link 
              href='/' 
              className='text-sm flex gap-1 w-max mx-auto mb-8 font-semibold text-blue-800 bg-blue-50 border border-blue-500 rounded-full px-3 py-1
              hover:bg-blue-200 transition-colors duration-300'>
                Visit us at the conference on {futureDate.toLocaleDateString()}
                <img src='/img/icons/arrow-redo-outline.svg' alt='link arrow' className='w-4' />
            </Link>
            <h1 className='text-5xl lg:text-7xl text-gray-900 tracking-tighter font-semibold mb-8 max-w-6xl mx-auto'>
                <span className={spanClassName}>Boost</span> your business,{' '}
                <span className={spanClassName}>increase</span> your profits!{' '}
                It&apos;s <span className={spanClassName}>easy.</span>
            </h1>
            <p className='text-lg text-gray-700 mb-8 max-w-2xl mx-auto'>
            Unlock your business&apos;s full potential.
            Whether you&apos;re looking to expand your market reach or enhance customer satisfaction, we have the solutions!
            </p>
            <MainButton 
              text='Get started'
              imgSrc='/img/icons/chevron-forward-right.svg'
              href='/' />
            <Image
              width={1152}
              height={768}
              placeholder='blur'
              blurDataURL='data:image/jpg;base64,SNAhxe-4nxtjZV@%gWBIo_NRP?bt6n$t7j[ozt7?vkCRPofRjWWMxofa{9FflIVRjogj@xas:ozxaWBs:ofkCs:kDWBWBf+WBRjj[t7R*WVWVjZX8WVtRofRjogaeofayV@a}ayofR*jst7jZWV'
              src='/img/landing/1.jpg'
              alt='professional team'
              className='rounded-lg w-full max-w-6xl mx-auto mb-12 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]'
            />
            <ClientsBar />
        </section>
    );
}