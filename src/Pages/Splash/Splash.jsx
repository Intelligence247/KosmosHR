import React from 'react'
import { Link } from 'react-router-dom'

const Splash = () => {
  return (
    <div className='flex px-8 flex-col justify-end items-center h-screen pb-4'>
      <div className='h-[55%] w-full flex flex-col justify-between items-center'>
<img src="/kosmos.png" className='w-[154px] h-8' alt="" />
    <Link to="/onboardpage1" className='w-full'><button className="h-12 bg-primary_SkyBlue text-white rounded-lg w-full">Get Started</button></Link>
      </div>
    </div>
  )
}

export default Splash
