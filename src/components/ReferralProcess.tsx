import ReferNowButton from './ReferNowButton'

const ReferralProcess = () => {
  return (
    <div className='bg-[#EEF5FF] my-12 flex flex-col'>
      <p className='text-center pt-10 text-2xl font-[Inter] font-semibold'>
        How Do I <span className='text-[#1A73E8]'>Refer?</span>
      </p>

      <img
        src='/referral-steps.png'
        alt='referral steps'
        className='w-[60%] mx-auto'
      />
      <ReferNowButton />
    </div>
  )
}

export default ReferralProcess
