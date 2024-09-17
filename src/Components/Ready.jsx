import React, { useEffect, useState } from 'react'


function Ready() {

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

            <section className='relative p-20 py-40 bg-[#CDEA68] flex flex-col justify-center items-center'>

                <div className='absolute flex items-center justify-center gap-10 top-1/4 left-1/2 -translate-x-1/2 translate-y-5 w-1/2'>
                    <div className='flex justify-center items-center w-[12vw] h-[12vw] rounded-full bg-gray-50'>
                        <div style={{ transform: `rotate(${rotate}deg)` }} className='flex justify-center items-center w-[8vw] h-[8vw] bg-black rounded-full'>
                            <div className='w-full h-10'>
                                <div className='w-[2vw] h-[2vw] bg-white rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center w-[12vw] h-[12vw] rounded-full bg-gray-50'>
                        <div style={{ transform: `rotate(${rotate}deg)` }} className='flex justify-center items-center w-[8vw] h-[8vw] bg-black rounded-full'>
                            <div className='w-full h-10'>
                                <div className='w-[2vw] h-[2vw] bg-white rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>

                {["ready", "to start", "the project ?"].map((letters, index) => {
                    return <h1 key={index} className='text-[150px] text-black leading-none tracking-tighter uppercase font-black'>{letters}</h1>
                })}

                <div className='my-5 mb-0'>
                    <button className='rounded-3xl border-[1px] border-black border-solid px-3 py-1 text-2xl uppercase hover:bg-black hover:text-white ease-in duration-300'>Start the Project</button>
                </div>

            </section>

        </>


    )
}

export default Ready