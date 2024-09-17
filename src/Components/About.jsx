import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function About() {
    return (
        <>

            <section  data-scroll data-scroll-speed="0" className='bg-[#CDEA68] w-full rounded-t-3xl py-20'>

                <div className='pb-10 px-20 border-b-2 border-[#A5BC57]'>
                    <p className='text-[55px] text-slate-950 leading-none'>Ochi is a strategic presentation agency for forward-thinking businesses that need to
                        <span className='underline'>raise funds, sell prod­ucts,
                            ex­plain com­plex ideas</span> , and <span className='underline'> hire great peo­ple.</span>
                    </p>
                    <div>
                        <div className='w-44 flex items-center gap-2 mt-10 bg-zinc-950 p-3 pl-4 pr-2 text-white rounded-full cursor-pointer justify-between uppercase'>Read More <span className='p-2 rounded-full w-10 h-10 flex justify-center rotate-45 items-center bg-white text-black'> <FaArrowUpLong /></span> </div>
                    </div>
                </div>



            </section>

        </>
    )
}

export default About