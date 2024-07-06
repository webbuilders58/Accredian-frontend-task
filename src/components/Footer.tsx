import { TProgram } from '../types'
import ContactUs from './ContactUs'
import NavbarLinks from './NavbarLinks'
import Program from './Program'

const Footer = () => {
  const programs: TProgram[] = [
    { name: 'Data Science & Ai', isActive: false },
    { name: 'Product Management', isActive: false },
    { name: 'Business Analytics', isActive: false },
    { name: 'Digital Transformation', isActive: false },
    { name: 'Business Management', isActive: false },
    { name: 'Project Management', isActive: false },
    { name: 'Strategy & Leadership', isActive: false },
    { name: 'Senior Management', isActive: false },
    { name: 'Fintech', isActive: false },
  ]
  return (
    <div className='bg-[#282828] flex-col  flex justify-center items-center px-20 py-8 font-[Roboto]'>
      <div className='w-[80%] flex justify-between text-white mb-10'>
        <div className=''>
          <img src='/logo-black-white.png' alt='logo' className='h-10' />
        </div>
        <div className='flex flex-col gap-2'>
          <button className='bg-[#007BFF] px-5 py-2 rounded-lg'>
            Schedule 1-on-1 Call Now
          </button>
          <p className='text-sm text-center'>Speak with our Learning Advisor</p>
        </div>
      </div>
      <hr className='border-5 border-white w-[80%]' />
      <div className='w-[80%] flex justify-between  text-white my-10 px-5'>
        <div className='flex flex-col gap-5 w-[30%]'>
          <p className='text-[20px]'>Programs</p>
          {programs.map((program,i) => (
            <Program {...program} key={i}/>
          ))}
        </div>

        <ContactUs />
        <NavbarLinks />
      </div>
      <p className='text-white my-5 text-sm'>&copy; 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
    </div>
  )
}

export default Footer
