import React from 'react'

const hero = () => {

    return (
        <>
            <section>
                {/* Hero-Section1 */}
                <div className='mx-auto w-auto sm:h-[490px] h-[530px] relative md:w-[1250px] flex flex-wrap'>
                    <img className=' md:h-full w-screen ' src="https://www.apple.com/in/homepage/images/apple-pay/hero/hero_apple_pay__bcc2szovse4r_medium_2x.jpg"></img>
                    <div className=' w-screen text-center absolute top-10'>
                        <div className=''>
                            <img className=' w-150 h-[44px] md:w-[130px] md:h-[66px] mx-auto flex flex-wrap' src="https://www.apple.com/in/homepage/images/apple-pay/logos/hero/hero_logo_apple_pay__dnd4gomtgaj7_large_2x.png"></img>
                        </div>

                        <p className='text-xl md:text-2xl '>Make way for Apple Pay.</p>
                        <button className='px-4 py-2 bg-blue-500 rounded-3xl text-white mt-3 text-lg'>Learn More</button>
                    </div>
                </div>

                {/* Hero-Section2 */}

                <div className="relative mt-3 w-full overflow-hidden flex flex-wrap">

                    {/* Desktop video */}
                    <video
                        id="iphone-18-pro-desktop"
                        className="hidden md:block w-[100%] h-[580px] object-cover object-center"
                        src="https://www.apple.com/105/media/us/home/2026/6f46e780-4ab4-4688-915a-7aa0694378e3/anim/hero/large_2x.mp4"
                        autoPlay
                        muted
                        playsInline
                        loop
                    />

                    {/* Mobile video */}
                    <video
                        id="iphone-18-pro-mobile"
                        className="block w-[100%] h-[500px] object-fill md:hidden"
                        src="https://www.apple.com/105/media/us/home/2026/6f46e780-4ab4-4688-915a-7aa0694378e3/anim/hero/small_2x.mp4"
                        autoPlay
                        muted
                        playsInline
                        loop
                    />

                    {/* Text overlay */}
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center">
                        <h2 className="text-2xl pb-1 md:text-5xl font-bold text-white md:pb-3">
                            iPhone 18 Pro
                        </h2>

                        <p className="text-lg pb-1 md:text-2xl md:font-bold text-white md:pb-3">
                            Pro future.
                        </p>

                        <div className='pb-3'>
                            <button className="py-1 px-3 md:py-2 md:px-3 bg-blue-500 text-white rounded-3xl mr-3">
                                Learn more
                            </button>

                            <button className="py-1 px-3 md:py-2 md:px-4 bg-black border border-blue-500 text-blue-500 rounded-3xl hover:bg-blue-500 hover:text-white">
                                Buy
                            </button>
                        </div>
                    </div>

                </div>

                {/* Hero Section 3 */}
                {/* Picture Duo */}

                <div className='relative mt-4'>

                    <div>
                        <img className='md:hidden h-[500px] w-[1000px] ' src="https://www.apple.com/in/homepage/images/iphone-duo/hero_iphone_duo_announce__fh4u8yzndpe2_small_2x.jpg"></img>
                        <img className='h-[580px] w-[1250px] hidden md:block' src="https://www.apple.com/in/homepage/images/iphone-duo/hero_iphone_duo_announce__fh4u8yzndpe2_medium_2x.jpg"></img>
                    </div>
                    <div className='absolute top-10  w-screen mx-auto'>
                        <div className='flex flex-col gap-2 items-center text-wrap text-center'>
                            <h2 className='max-md:text-3xl text-5xl font-bold'>iPhone Duo</h2>
                            <p className='max-md:text-lg text-2xl'>Hello, hello</p>
                            <p className='max-md:text-sm max-md:w-[50%] md:w-[40%] text-lg text-gray-500 lg:w-[30%]'>Pre-order starting at 5:30 PM IST on 16 October Available from 23 October</p>
                            <div className='flex gap-3'>
                                <button className='max-md:py-1 max-md:px-2 bg-blue-500 py-2 px-3 text-white rounded-3xl'>Learn more</button>
                                <button className='max-md:py-1 max-md:px-2 border border-blue-500 text-blue-500 px-3 py-2 rounded-3xl hover:bg-blue-500 hover:text-white'>View pricing</button>
                            </div>
                        </div>
                    </div>



                </div>

            </section>
        </>
    )
}

export default hero