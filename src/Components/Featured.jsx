import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'

function Featured() {

    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards[index].start({ y: "0" })
    }

    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" })
    }

    return (

        <>

            <section>
                <div className='p-20 pb-10 border-b-2 border-[#D2D2D2]'>
                    <h1 className='text-[50px] leading-none text-slate-950'>Featured Projects</h1>
                </div>
                <div className='cards w-full flex gap-10 p-20'>
                    <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)} className='card relative w-1/2 cursor-pointer rounded-2xl h-[75vh] bg-[url("https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png")]'>
                        <div className='text-[#CDEA68] flex overflow-hidden text-9xl z-50 absolute font-extrabold uppercase leading-none tracking-tighter left-full -translate-x-1/2 top-1/2 -translate-y-1/2'>
                            {"FYCE".split('').map((item, index) =>
                                <motion.span initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.68, -0.6, 0.32, 1.6], delay: index * .092, duration: 1 }}
                                    className='inline-block'>{item}</motion.span>
                            )}
                        </div>
                    </motion.div>
                    <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverEnd(1)} className='card relative w-1/2 cursor-pointer rounded-2xl h-[75vh] bg-[url("https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg")] '>
                        <div className='text-[#CDEA68] flex overflow-hidden text-9xl z-50 absolute font-extrabold uppercase leading-none tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2'>
                            {"VISE".split('').map((item, index) =>
                                <motion.span initial={{ y: "100%" }}
                                    animate={cards[1]}
                                    transition={{ ease: [0.68, -0.6, 0.32, 1.6], delay: index * .092, duration: 1 }}
                                    className='inline-block'>{item}</motion.span>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>
        </>

    )
}

export default Featured