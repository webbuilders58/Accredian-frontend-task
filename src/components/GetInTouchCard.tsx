const GetInTouchCard = () => {
  return (
    <div className='w-[65%] bg-[#1A73E8] h-[170px] mx-auto rounded-lg py-10 flex items-center px-12'>
      <div className='flex items-center gap-5 flex-1'>
        <img
          src='/headphone.png'
          className='w-20 border-4 border-[#E2E8F059] rounded-md'
        />

        <div className='self-start flex flex-col gap-2'>
          <p className='text-white text-[26px] font-[Inter] font-medium'>
            Want to delve deeper into the program?
          </p>
          <p className='text-white font-[Inter]'>
            Share your details to receive expert insights from our program team!
          </p>
        </div>
      </div>
      <button className="bg-white text-[#3B82F6] font-[Inter] rounded-md px-5 py-3 font-medium">Get in Touch
      <i className="arrow-blue right mx-2"></i>
      </button>
    </div>
  )
}

export default GetInTouchCard
