import React from 'react'
import Onboard from '../../Components/Onboard/Onboard'
const OnboardPage2 = () => {
  return (
    <div>
       <Onboard
     bghidden="lg:hidden flex lg:bg-[url(/onboard2.png)] bg-[url(/onboardmobile1.png)]" 
     reverse={'flex-row-reverse'}
     title={'Task, Report, Connect'}
     desc={'Revolutionizing Employee Management:'}
     link={'/login'}
      />
    </div>
  )
}

export default OnboardPage2
