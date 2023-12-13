import React from 'react'
import Onboard from '../../Components/Onboard/Onboard'
import { Link } from 'react-router-dom'
const OnboardPage2 = () => {
  return (
    <div className="flex justify-center items-center h-screen">
       <Onboard
     bghidden="lg:hidden flex lg:bg-[url(/onboard2.png)] bg-[url(/onboardmobile1.png)]" 
     reverse={'flex-row-reverse'}
     title={'Task, Report, Connect'}
     desc={'Revolutionizing Employee Management:'}
     link={'/login'}
      />
      <section className="lg:block hidden text-2xl">
        This page is only available on mobile
        <Link className="text-2xl text-primary_SkyBlue" to="/login">
          {" "}
          Go to main page
        </Link>{" "}
      </section>
    </div>
  )
}

export default OnboardPage2
