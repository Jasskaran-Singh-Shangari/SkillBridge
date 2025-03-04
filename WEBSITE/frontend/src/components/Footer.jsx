import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* ---------- Left Section ---------- */}
        <div>
          {/* <img className='mb-5 w-40' src={assets.logo} alt="" /> */}
          <h2 className='mb-5 w-40 font-[Poppins] text-3xl font-bold'>SkillBridge</h2>
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>SkillBridge revolutionizes mentorship by seamlessly connecting students with experienced mentors. Our platform simplifies scheduling, ensures personalized guidance, and enhances learning experiences, making mentorship more accessible and impactful for everyone.</p>
        </div>

        {/* ---------- Center Section ---------- */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* ---------- Right Section ---------- */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91-9911318555</li>
            <li>jasskaransingh0007@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* ---------- Copyright Text ---------- */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright © 2024 - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer