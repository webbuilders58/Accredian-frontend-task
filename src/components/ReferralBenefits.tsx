import ReferralProgramTable from './ProgramTable'
import TableSideBar from './TableSideBar'

const ReferralBenefits = () => {
  return (
    <div className='w-[80%] mx-auto'>
      <p className='text-center pt-10 text-2xl font-[Inter] font-semibold'>
        What Are The <span className='text-[#1A73E8]'>Referral Benefits?</span>
      </p>
      <div className='my-10 flex mx-auto gap-20 justify-center items-center'>
        <TableSideBar />
        <div className='flex flex-col'>
          <ReferralProgramTable />
          <button className='px-5 py-2 border border-[#B6B6B6] text-[#B6B6B6] w-fit  self-end my-10 rounded-md'>
            Show more{' '}<i className='arrow-gray down mb-1 ml-2'></i>

          </button>
        </div>
      </div>
    </div>
  )
}

export default ReferralBenefits
