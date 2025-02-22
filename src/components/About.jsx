import React from 'react'

function About() {
  return (
    <div className="container mx-auto px-5 py-20 md:px-20">
        <h2 className="text-start md:text-center text-2xl font-normal mb-8 font-[Fraunces]">
            Why JustLiv?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] shadow-[0_0_16px_2px_rgba(0,0,0,0.05)] p-6 flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkles w-6 h-6 mb-2">
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                    <path d="M20 3v4"></path>
                    <path d="M22 5h-4"></path>
                    <path d="M4 17v2"></path>
                    <path d="M5 18H3"></path>
                </svg>
                <h3 className="text-[21px] text-[#384252] font-normal mb-2 font-[Fraunces]">
                    Custom Calendar
                </h3>
                <p className="text-[16px] font-[Lato] font-normal text-[#959AA2] mb-4">
                    Our Custom Activities Calendar instantly creates a personalized activity schedule based on your preferences, budget, and location. No more endless searching or juggling calendars.
                </p>
                <img src="https://res.cloudinary.com/dhhxki61s/image/upload/v1740134471/laptop_aukjhl.png" loading='lazy' alt="Calendar" className="mt-auto rounded-lg" />
            </div>
            <div className="bg-white rounded-[20px] shadow-[0_0_16px_2px_rgba(0,0,0,0.05)] p-6 flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkles w-6 h-6 mb-2">
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                    <path d="M20 3v4"></path>
                    <path d="M22 5h-4"></path>
                    <path d="M4 17v2"></path>
                    <path d="M5 18H3"></path>
                </svg>
                <h3 className="text-[21px] text-[#384252] font-normal mb-2 font-[Fraunces]">Tailored to Your Interests</h3>
                <p className="text-[16px] font-[Lato] font-normal text-[#959AA2] mb-4">
                    Filters let you choose activities by age, category, price, and more. Social features help you sync schedules with friends and see what they’re attending.
                </p>
                <img src="https://res.cloudinary.com/dhhxki61s/image/upload/v1740134491/child_zfhwi9.png" loading='lazy' alt="Interests" className="mt-auto rounded-lg" />
            </div>
            <div className="bg-white rounded-[20px] shadow-[0_0_16px_2px_rgba(0,0,0,0.05)] p-6 flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkles w-6 h-6 mb-2">
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                    <path d="M20 3v4"></path>
                    <path d="M22 5h-4"></path>
                    <path d="M4 17v2"></path>
                    <path d="M5 18H3"></path>
                </svg>
                <h3 className="text-[21px] text-[#384252] font-normal mb-2 font-[Fraunces]">Stress-Free Bulk Booking</h3>
                <p className="text-[16px] font-[Lato] font-normal text-[#959AA2] mb-4">
                    Book all your child’s activities in just a few clicks. Our platform handles the details so you don’t have to.
                </p>
                <img src="https://res.cloudinary.com/dhhxki61s/image/upload/v1740134479/mother1_nxfgak.png" loading='lazy' alt="Booking" className="mt-auto rounded-lg" />
            </div>
        </div>
    </div>
  )
}

export default About
