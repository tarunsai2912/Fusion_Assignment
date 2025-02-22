import React from 'react'

function BreadCrumb() {
  return (
    <div className="relative w-full h-[433px]">
        <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat hidden md:block" loading='lazy' style={{ backgroundImage: "url('https://res.cloudinary.com/dhhxki61s/image/upload/v1740199200/girls_fzzdqg.png')" }}>
            <div className="absolute inset-0 bg-black/10"></div>
        </div>
        <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat block md:hidden" loading='lazy' style={{ backgroundImage: "url('https://res.cloudinary.com/dhhxki61s/image/upload/v1740199071/girlMobile_fi3dv6.png')" }}>
            <div className="absolute inset-0 bg-black/10"></div>
        </div>
        <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-normal text-white mb-2 font-[Fraunces]">Ready to Simplify Your Life?</h1>
                    <p className="text-[16px] text-white font-[Lato]">
                        Be the first to know when we launch! Join our waiting list and get exclusive updates and early access to our journey.
                    </p>
                </div>
                <div className="space-y-4 ">
                    <dialog id="my_modal_1" className="modal">
                        <div className="relative modal-box bg-transparent p-0">
                            <form method="dialog">
                                <button className="btn absolute bg-black right-4 top-4 p-1.5">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-white text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </dialog>
                    <button className="btn border-0 w-full px-8 py-3 cursor-pointer bg-[#FF97A8] text-black rounded-full flex items-center justify-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkles w-5 h-5">
                            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                            <path d="M20 3v4"></path>
                            <path d="M22 5h-4"></path>
                            <path d="M4 17v2"></path>
                            <path d="M5 18H3"></path>
                        </svg>
                        <span id="target-element" className="text-[18px] font-medium font-[Lato] tracking-[-0.5px]">Join the waiting list</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BreadCrumb
