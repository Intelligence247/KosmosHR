import React from 'react'
import StaffHomeLayout from '../../Layouts/StaffHomeLayout/StaffHomeLayout'
import CommunicationCard from './CommunicationCard'
import { Link } from 'react-router-dom'
const Communication = () => {
  return (
      <StaffHomeLayout>
    <section className="flex lg:flex-row flex-col justify-between lg:items-center lg:space-y-0 space-y-6 items-start">

      <header className="flex flex-col space-y-2 justify-start items-start">
        <img src="/back.png" alt="" />
        <h1 className="lg:text-2xl text-base font-bold">Communications</h1>
        <p className="opacity-80">Communicate within your organisation</p>
    </header>
          <Link
          to={"/sendcommunication"}
            onClick={() => clickFunction()}
            className="text-primary_DeepBlue bg-[#BAD6F4] flex space-x-2 justify-center
            items-center text-[14px] lg:h-12 h-9 lg:py-3 py-1 px-6 rounded-xl cursor-pointer"
          >
            <p>Onboard New Staff</p>
            <img src="/front.png" alt="" />
          </Link>
        </section>
    <CommunicationCard/>
      </StaffHomeLayout>
  )
}

export default Communication
