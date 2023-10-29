import React from 'react'
import Onboard from '../../Components/Onboard/Onboard'

const LoginSignLayout = ({ children }) => {
  return (
    <div className='flex'>
      <Onboard/>
      <div className='w-[47%] lg:px-32 flex flex-col justify-center space-y-6'>{children}</div>
    </div>
  )
}

export default LoginSignLayout
