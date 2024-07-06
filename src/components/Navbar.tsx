const Navbar = () => {
  return (
    <div className='my-6 md:mx-[15%] mx-5 flex justify-between'>
      <div className='flex md:gap-10 md:flex-row flex-col gap-5'>
        <img src='/accredian-logo.png' alt='logo' className='md:w-[125px] md:h-[40px] sm:h-[25px]' />
        <button className='bg-[#1A73E8] text-white md:px-4 md:py-2 px-2 py-2 rounded-md font-[Inter] font-medium md:text-sm text-xs flex'>
          Courses <i className='arrow down ml-2 self-center'></i>
        </button>
      </div>
      <div className='flex gap-10 text-sm font-medium'>
        <ul className='md:flex gap-6 font-[Inter] self-center hidden'>
          <li className='cursor-pointer'>
            <a>Refer & Earn</a>
          </li>
          <li className='cursor-pointer'>
            <a>Resources</a>
          </li>
          <li className='cursor-pointer'>
            <a>About Us</a>
          </li>
        </ul>
        <div className='flex gap-5'>
          <button className='bg-[#94A3B833] md:px-5 md:py-2 rounded-md font-[Inter]'>
            Login
          </button>
          <button className='bg-[#1A73E8] md:px-5 md:py-2 text-white rounded-md font-[Inter] font-medium'>
            Try for free
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
