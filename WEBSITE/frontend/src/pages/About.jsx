import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to SkillBridge, your trusted platform for empowering students and mentors through seamless guidance and collaboration. At MentorConnect, we recognize the challenges students face in navigating their academic and professional journeys, and we strive to make mentorship more accessible and impactful.</p>
          <p>SkillBridge is dedicated to enhancing the mentorship experience with cutting-edge technology. Our platform ensures that students can connect with the right mentors, schedule meetings effortlessly, and track their progress, while mentors can manage sessions and showcase their contributions effectively. Whether you're a student seeking guidance or a mentor looking to share your expertise, MentorConnect is here to support you every step of the way.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>At SkillBridge, our vision is to bridge the gap between aspiring learners and experienced mentors, fostering meaningful connections that lead to growth and success. We aim to create an environment where knowledge-sharing is effortless, mentorship is rewarding, and every student can confidently shape their future with the right guidance.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Access to a network of trusted mentors professionals in your area.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>With smart recommendations and personalized scheduling, we ensure that every interaction is meaningful and impactful.</p>
        </div>
      </div>
    </div>
  )
}

export default About