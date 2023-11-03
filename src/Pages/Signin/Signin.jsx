import React from 'react'
import LoginSignLayout from '../../Layouts/LoginSignLayout/LoginSignLayout'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div>
      <LoginSignLayout>
      <div className="lg:hidden flex justify-center w-full items-center pb-4">
      <img src="/kosmos.png" alt="" />
      </div>
      <h1 className="lg:text-2xl text-base font-bold">Create an Account</h1>
      <div className="inputs">
        <label htmlFor="email ">Company Name:</label>
        <input type="email" placeholder="Enter Your Email " />
      </div>
      <div className="inputs">
        <label htmlFor="">Official Email:</label>
        <input type="text" placeholder="Enter Your Password " />
      </div>
      <div className="inputs">
        <label htmlFor="password ">Password:</label>
        <input type="password" placeholder="Enter Your Password " />
      </div>
      <div className="inputs">
        <label htmlFor="password ">Confirm password:</label>
        <input type="password" placeholder="Re-Enter Your Password" />
      </div>
      <button className="h-12 bg-primary_SkyBlue text-white rounded-xl">Create an Account</button>
      <div className="Amember">
  <p>Have an account? <Link to='/login' className="text-primary_SkyBlue">Login</Link></p>
</div>
      </LoginSignLayout>
    </div>
  )
}

export default Signin
