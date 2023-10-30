import React from 'react'
import Onboard from '../../Components/Onboard/Onboard'

const OnboardPage = () => {
  return (
    <div>
      <Onboard
     bghidden="flex lg:bg-[url(/onboard2.png)] bg-[url(/onboardmobile2.png)]" 
     reverse={'flex-row'}
     title={'Fostering Management-Staff Harmony!'}
     desc={'Effortless Task Delegation, Seamless End-of-Day Reports, Improved cross-department communication'}
      />
    </div>
  )
}

export default OnboardPage