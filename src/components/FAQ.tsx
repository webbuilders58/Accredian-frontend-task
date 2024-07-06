import FAQCard from './FAQCard'

const FAQ = () => {
  const btns = [
    {
      text: 'Eligibility',
      isActive: true,
    },
    {
      text: 'How To Use?',
      isActive: false,
    },
    {
      text: 'Terms & Conditions',
      isActive: false,
    },
  ]
  return (
    <div className='w-[60%]'>
      <p className='text-center pt-10 text-2xl font-[Inter] font-semibold'>
        Frequently Asked <span className='text-[#1A73E8]'>Questions</span>
      </p>
      <div className='flex my-10 gap-10'>
        <div className='flex flex-col gap-5'>
          {btns.map((btn,i) => (
            <button key={i}
              className={`w-[261px] py-4 px-10  rounded-md  ${btn.isActive ? 'text-[#1A73E8] shadow-faqbtn' : 'text-[#737373] border-2 border-[#737373] '}`}
            >
              {btn.text}
            </button>
          ))}
        </div>
        <div>
          <FAQCard />
        </div>
      </div>
    </div>
  )
}

export default FAQ
