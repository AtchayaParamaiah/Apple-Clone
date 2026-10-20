
import React from "react";
import { BlueButton, OutlineButton } from "./button";

const Product = () => {
    
    const productExtra = [
        
        {
            logo: [<img
                    className=" w-[150px] "
                    src="https://www.apple.com/v/homepage/images/logos/ipad-air-m4/a/promo_logo_ipad_air__dqdj4ni03quu_large.png"
                    alt="Apple Watch"
                />,],
            name: <p className="text-black">Now supercharged by M4.</p>,
            img: [
                <img
                    className=" w-full h-[500px]"
                    src="https://www.apple.com/v/homepage/images/ipad-air-m4/a/promo_ipad_air_m4__bgcv7t286k8y_small.jpg"
                    alt="Apple Watch"
                />,
                
            ],
        },
        {
            logo: [<p className="text-5xl font-bold">AirPods Pro 3</p>],
            name: <p className="text-black">The world’s best in-ear Active Noise Cancellation.</p>,
            img: [
                <img
                    className=" w-full h-[500px]"
                    src="https://www.apple.com/v/homepage/images/airpods-pro-3/a/promo_airpods_pro_3__e4755qofhnyq_small.jpg"
                    alt="Apple Watch"
                />,
                
            ],
        },
        {
            logo: [
                <img
                    className=" w-[200px] "
                    src="https://www.apple.com/v/homepage/images/logos/apple-upgrade/a/promo_logo_apple_upgrade__lwuohffdzjem_large.png"
                    alt="Apple Watch"
                />,
                
            ],
            name: <p className="text-black">Love it. Lease it. Upgrade it.</p>,
            img: [
                <img
                    className=" w-full h-[500px]"
                    src="https://www.apple.com/v/homepage/images/apple-upgrade/a/promo_apple_upgrade__jvn6udm4tx2e_small.jpg"
                    alt="Apple Watch"
                />,
                
            ],
        },
        {
            logo: [
                <img
                    className=" w-[100px] "
                    src="https://www.apple.com/v/homepage/images/logos/apple-card/a/promo_logo_apple_card__28vxrcexz0ia_large.png"
                    alt="Apple Watch"
                />,
                
            ],
            name: <p className="text-black">Get up to 3% Daily Cash back with every purchase.</p>,
            img: [
                <img
                    className=" w-full h-[500px]"
                    src="https://www.apple.com/v/homepage/images/apple-card/a/promo_apple_card__d8xz4kd4evwy_small.jpg"
                    alt="Apple Watch"
                />,
                
            ],
        },
        
        

    ]



    return (
        <section>

            {/* Upper Section */}
            

            {/* Lower section */}
            <div className="w-screen"> 
                <div className="grid grid-cols-1 md:grid-cols-2 " >
                    {productExtra.map((pro, i) => (
                        <div className="relative text-center m-2" key={i}>
                            <div>
                                {pro.img.map((img, j) => (
                                    <div key={j}>
                                        {img}
                                    </div>
                                ))}
                            </div>
                            <div className="absolute top-10 w-[100%] flex flex-col justify-center gap-1 mx-auto" >
                                <div className="text-center flex justify-center mx-auto w-[100%]">
                                    {pro.logo.map((logo, k) => (
                                        <div key={k}>
                                            {logo}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-lg font-semibold text-white text-center w-[50%] mx-auto">{pro.name}</p>
                                <div className="flex justify-center gap-3 mx-auto ">
                                    <BlueButton>Learn more</BlueButton>
                                    <OutlineButton>Buy</OutlineButton>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Product;
