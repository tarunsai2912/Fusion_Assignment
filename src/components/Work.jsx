import React from 'react'

function Work() {
  return (
    <div className="text-white py-16 px-5 bg-cover bg-center h-[590px] [@media(width>=1500px)]:h-[725px]" loading='lazy' style={{ backgroundImage: "url('https://res.cloudinary.com/dhhxki61s/image/upload/v1740198934/sky_bqa0my.png')" }}>
        <h2 className="text-start md:text-center text-2xl font-normal mb-8 font-[Fraunces]">How it works</h2>
        <div className="container mx-auto relative">
            <div className="flex flex-col space-y-12 items-start mx-auto max-w-xl">
                <div className="flex items-start space-x-6 relative">
                    <div className="flex-shrink-0 p-4 w-15 h-15 bg-[#FFFFFF] bg-opacity-10 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search text-white h-6 w-6">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-[18px] font-[Lato] font-semibold mb-1 ">Browse</h3>
                        <p className="text-[#CCCFD6] font-[Lato] font-normal text-[16px]">
                            Discover activities from our partner booking providers.
                        </p>
                    </div>
                </div>
                <div className="flex items-start space-x-6 relative">
                    <div className="flex-shrink-0 p-4 w-15 h-15 bg-[#FFFFFF] bg-opacity-10 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar text-white h-6 w-6">
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-[18px] font-[Lato] font-semibold mb-1">Build</h3>
                        <p className="text-[#CCCFD6] font-[Lato] font-normal text-[16px]">
                            Share your child’s interests, schedule, and preferences. Watch as JustLiv creates the perfect calendar filled with activities.
                        </p>
                    </div>
                    <img src="https://res.cloudinary.com/dhhxki61s/image/upload/v1740135709/downArrow_sb7ah6.png" loading='lazy' alt="" className="absolute -top-11 md:left-[3vw] left-[14vw] w-[42px] h-[45px]" />
                </div>
                <div className="flex items-start space-x-6 relative">
                    <div className="flex-shrink-0 p-4 w-15 h-15 bg-[#FFFFFF] bg-opacity-10 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart text-white h-6 w-6">
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-[18px] font-[Lato] font-semibold mb-1">Book</h3>
                        <p className="text-[#CCCFD6] font-[Lato] font-normal text-[16px]">
                            Finalize your selections with one click and enjoy peace of mind.
                        </p>
                    </div>
                    <img src="https://res.cloudinary.com/dhhxki61s/image/upload/v1740135727/twistedArrow_xmd9ip.png" loading='lazy' alt="" className="absolute top-[-8vh] md:-top-10 md:left-[7vw] left-[28vw] w-[48px] h-[61px]" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work
