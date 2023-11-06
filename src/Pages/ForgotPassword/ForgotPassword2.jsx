import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword2 = () => {
  return (
    <div className="flex flex-col h-screen justify-center lg:px-20 px-8">
    <img
      src="kosmos.png"
      className="absolute lg:top-20 top-8 lg:left-20 left-8"
      alt=""
    />
    <div className="forgot flex flex-col space-y-6">
     <Link to='/forgotpassword'><img src="/back.png" className="w-6 h-6" alt="" /></Link>
    <h1 className="lg:text-2xl text-base font-bold">Create New Password</h1>
      <div className="flex gap-1.5 flex-col ">
        <label className="font-bold" htmlFor="">
          New Password:
        </label>
        <input
          className=" h-12 border-[1px] border-black/30 rounded-lg pl-2 outline-none lg:w-[352px]"
          type="password"
          placeholder="Enter Password"
        />
      </div>
    <button className="h-12 bg-primary_SkyBlue text-white rounded-xl lg:w-[352px]">Continue</button>

    </div>
  </div>
  )
}

export default ForgotPassword2