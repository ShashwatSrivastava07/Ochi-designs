import React from 'react'
import { motion } from "framer-motion"

function Marquee() {
  return (
    <>

        <section data-scroll data-scroll-section data-scroll-speed=".1" className='marquee-section w-full rounded-t-3xl bg-[#004D43] py-20'>
            <div className='text-white px-5	py-1 flex items-center gap-10 border-y-2 border-zinc-400 whitespace-nowrap overflow-hidden'>
               <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", duration:10 , repeat:Infinity}} className='text-[22vw] leading-none tracking-tighter font-black uppercase'>we are ochi</motion.h1>
               <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", duration:10 , repeat:Infinity}} className='text-[22vw] leading-none tracking-tighter font-black uppercase'>we are ochi</motion.h1>
            </div>
        </section>

    </>
  )
}

export default Marquee