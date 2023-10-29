import React from 'react'
import Onboard from '../../Components/Onboard/Onboard'

const LoginSignLayout = ({ children }) => {
  return (
    <div className='lg:flex'>
      <Onboard
      bghidden="lg:flex hidden"
      />
      <div className='lg:w-[47%] w-full lg:px-32 px-8 flex flex-col h-screen justify-center space-y-6'>{children}</div>
    </div>
  )
}

export default LoginSignLayout
