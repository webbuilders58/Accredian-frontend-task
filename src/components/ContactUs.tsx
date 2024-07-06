import Socials from "./Socials"

const ContactUs = () => {
  return (
    <div className='font-[Roboto] gap-3 flex flex-col'>
      <p className='text-[20px] text-white'>Contact Us</p>
      <p className="text-[16px]">Email us (For Data Science Queries): admissions@accredian.com</p>
      <p className="text-[16px]">Email us (For Product Management Queries):pm@accredian.com</p>
      <p className="text-[16px]">Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)</p>
      <p className="text-[16px]">Product Management Admission Helpline:+91 9625811095</p>
      <p className="text-[16px]">Enrolled Student Helpline: +91 7969322507</p>
      <p className="text-[16px]">
        Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
        Gurugram, Haryana 122015
      </p>
      <p className="font-[Roboto] font-medium text-[20px] mt-5">Follow Us</p>
      <Socials />
    </div>
  )
}

export default ContactUs
