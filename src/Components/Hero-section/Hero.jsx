import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function Hero() {

    return (
        <>
            <div data-scroll data-scroll-speed="-.3" className="w-full h-screen hero_section">
                <div className='text_head font-black text-gray-950 px-20 pt-40'>
                    {["we create", "eye opening", "presentations"].map((texts, head) => {
                        return (
                            <div className="masker flex items-center w-fit" key={head}>
                                {head === 1 && (
                                    <motion.div initial={{ width: 0 }} 
                                    animate={{ width: "8.5vw" }} 
                                    transition={{ ease: [0.76, 0, 0.24, 1] , duration:1 }} 
                                    className='w-[8.5vw] h-[5vw] bg-contain bg-no-repeat bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")] rounded mr-2'>
                                    </motion.div>
                                )}
                                <h1 className='text-8xl leading-none tracking-tighter uppercase'>{texts}</h1>
                            </div>
                        );
                    })}
                </div>

                <div className="border-t-[1px] border-zinc-500 flex items-center justify-between mt-32 px-20 py-4">
                    {["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
                        return <p className='text-md tracking-tight leading-none' key={index}>{item}</p>
                    })}
                    <div className="start_btn flex gap-2 items-center">
                        <button className='rounded-3xl border-[1px] border-black border-solid px-3 py-1 text-md uppercase hover:bg-black hover:text-white ease-in duration-300'>Start the Project</button>
                        <div className='w-3 h-3 border-[1px] cursor-pointer text-md flex items-center justify-center rounded-full  border-black border-solid px-4 py-4  hover:bg-black hover:text-white ease-in duration-300'>
                            <span className='rotate-45'>
                                <FaArrowUpLong />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
