import React from 'react'
import StaffHomeLayout from '../../Layouts/StaffHomeLayout/StaffHomeLayout'
import CommunicationCard from './CommunicationCard'
const Communication = () => {
  return (
      <StaffHomeLayout>
      <header className="flex flex-col space-y-2 justify-start items-start">
        <img src="/back.png" alt="" />
        <h1 className="lg:text-2xl text-base font-bold">Communications</h1>
        <p className="opacity-80">Communicate within your organisation</p>
    </header>
    <CommunicationCard/>
      </StaffHomeLayout>
  )
}

export default Communication
