import React, { useEffect, useState } from 'react'

function Eyes() {

    const [rotate, setRotate] = useState(0)

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180)

        })
    })

    return (
        <>

            <section className='w-full flex justify-center items-center m-auto p-20 overflow-hidden'>

                <div  data-scroll data-scroll-speed="-.7" className='w-[70vw] h-[75vh] rounded-lg bg-[#125A50] p-10 relative'>
                    <div className='absolute flex items-center justify-center gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2'>
                        <div className='flex justify-center items-center w-[12vw] h-[12vw] rounded-full bg-gray-50'>
                            <div style={{ transform: `rotate(${rotate}deg)`}}  className='flex justify-center items-center w-[8vw] h-[8vw] bg-black rounded-full'>
                                <div className='w-full h-10'>
                                    <div className='w-[2vw] h-[2vw] bg-white rounded-full'></div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center w-[12vw] h-[12vw] rounded-full bg-gray-50'>
                            <div style={{ transform: `rotate(${rotate}deg)`}} className='flex justify-center items-center w-[8vw] h-[8vw] bg-black rounded-full'>
                                <div  className='w-full h-10'>
                                    <div className='w-[2vw] h-[2vw] bg-white rounded-full'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Eyes