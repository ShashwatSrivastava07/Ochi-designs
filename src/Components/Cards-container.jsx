import React from 'react'
import Cards from './Cards'

function CardsContainer() {
  return (
    
    <>

        <section className='p-20 flex items-center w-full gap-10 border-t-2 border-[#D2D2D2]'>

            <Cards btnTxt={"©2019-2022"} bgColor="bg-[#004D43]" Width="w-full" imgSrc={'https://ochi.design/wp-content/uploads/2022/04/logo001.svg'}/>

            <Cards btnTxt={"Rating 5 on Clutch"} bgColor="bg-zinc-800"  Width="w-1/2" imgSrc={'https://ochi.design/wp-content/uploads/2022/04/logo002.svg'} />

            <Cards btnTxt={"Rating 5 on Clutch"} bgColor="bg-zinc-800"  Width="w-1/2" imgSrc={'https://ochi.design/wp-content/uploads/2022/04/logo003.png'}/>

        </section>
    
    </>


  )
}

export default CardsContainer