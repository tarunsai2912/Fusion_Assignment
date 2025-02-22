import React from 'react';

const Hero = () => {
  return (
    <div className='relative min-h-screen w-full'>
      <div className='absolute inset-0 z-0'>
        <img src='https://res.cloudinary.com/dhhxki61s/image/upload/v1740198901/hero_nrbyj6.png' loading='lazy' alt='child' className='hidden sm:block w-full h-full object-fill'></img>
        <img src='https://res.cloudinary.com/dhhxki61s/image/upload/v1740133894/heroMobile_a2nw7j.png' loading='lazy' alt='child2' className='sm:hidden w-full h-full object-fill'></img>
      </div>
      <div className='relative z-10 min-h-screen flex flex-col items-center justify-end px-4 sm:px-6 lg:px-8 pb-20'>
        <div className='text-start md:text-center max-w-4xl mx-auto'>
          <h2 className='text-white font-[Fraunces] text-[27px] md:text-[38px] font-normal mb-4 leading-tight'>
            Your Child's Perfect Schedule
            <br className='hidden sm:block' />in Just a Few Clicks
          </h2>
          <p className='text-white text-[18px] sm:text-xl mb-8 font-normal font-[Lato]'>
            Less Planning, More Living.
          </p>
          <div>
            <button className='inline-flex cursor-pointer items-center px-8 py-4 rounded-full bg-[#FF97A8] text-white font-semibold text-lg'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles w-6 h-6">
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                <path d="M20 3v4"></path>
                <path d="M22 5h-4"></path>
                <path d="M4 17v2"></path>
                <path d="M5 18H3"></path>
              </svg>
              <span className='text-black font-medium text-[18px] font-[Lato] tracking-[-0.5px]'>Join the waiting list</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;