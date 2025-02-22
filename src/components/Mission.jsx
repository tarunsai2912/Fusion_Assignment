import React from 'react'

function Mission() {
  return (
    <div className="bg-gray-50 py-20">
        <div className="container mx-auto [@media(width<=350px)]:w-[340px] md:w-[550px] w-[360px] md:px-0 px-6 text-center relative">
            <h2 className="text-3xl font-semibold mb-4 flex md:justify-center justify-start md:items-center items-start space-x-1 relative">
                <span className="text-2xl font-normal font-[Fraunces]">Our Mission</span>
                <div className="absolute md:right-15 right-1 -top-3">
                    <svg width="45" height="49" viewBox="0 0 45 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0497 45.5727C28.4988 38.654 29.8625 31.4818 27.5505 27.607C25.2385 23.7322 19.3963 24.1961 17.0432 27.8665C16.9546 23.5074 12.2157 20.0595 8.21977 22.1553C4.22389 24.2512 1.63929 31.0791 12.0497 45.5727Z" fill="#FF8197"></path>
                        <path d="M36.308 27.9505C44.9503 21.7783 44.802 17.4359 42.952 15.4895C41.102 13.5431 37.7713 14.5781 36.8863 17.0172C36.2636 14.4983 33.0607 13.1177 31.0156 14.8581C28.9706 16.5985 28.365 20.901 36.308 27.9505Z" fill="#FF8197"></path>
                        <path d="M25.4004 9.84594C31.9953 8.27897 32.9534 5.67652 32.3286 4.08047C31.7039 2.48443 29.4859 2.29404 28.3753 3.52267C28.6139 1.88379 27.0531 0.296399 25.4252 0.832616C23.7973 1.36883 22.4031 3.76616 25.4004 9.84594Z" fill="#FF8197"></path>
                    </svg>
                </div>
            </h2>
            <p className=" font-[Lato] text-[16px] text-[#384252] px-0 md:px-4 mb-6 md:text-center text-start">
                Parents need a simple way to find, book, and track their kids activities. Businesses need a better way to be found and to keep families coming back.
            </p>
            <p className="text-xl font-medium mb-6 md:text-center text-start">
                <span className="text-[16px] font-normal font-[Lato]">Our purpose is to</span> 
                <br />
                <span className="font-bold font-[Lato] text-[22px]">make parents lives</span> 
                <span className="text-[#FF8095] text-[22px] font-bold font-[Lato]"> easier
                <span className="text-black font-[Lato]">,</span> happier
                <span className="text-black font-[Lato]">,</span>
                <span className="text-black font-[Lato]"> and </span> less stressful</span>.
            </p>
            <p className="text-[16px] font-[Lato] text-[#384252] mb-6 md:text-center text-start">
                As parents and business owners, we get it.
            </p>
            <img src="https://res.cloudinary.com/dhhxki61s/image/upload/v1740136160/family_1_hh5ytr.png" loading='lazy' alt="Children Playing" className="w-full max-w-lg mx-auto rounded-lg shadow-md" />
        </div>
    </div>
  )
}

export default Mission
