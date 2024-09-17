import React from 'react'

function Cards({heading , btnTxt ,bgColor, Width , imgSrc }) {
  return (
    <>

        <div className={`p-10 rounded-2xl min-h-[350px] ${bgColor} ${Width} flex justify-between flex-col `}>

            <img className='w-[102px] m-auto' src= {`${imgSrc}`}></img>

            <button className='p-2 px-3 text-sm rounded-full border-2 w-fit border-zinc-500 text-white bg-transparent'>{btnTxt}</button>


        </div>
    
    </>
  )
}

export default Cards