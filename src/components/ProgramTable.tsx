const ReferralProgramTable = () => {
  const tableItems = [
    {
      program: 'Professional Certificate Program in Product Management',
      referrerBonus: '7,000',
      refereeBonus: '9,000',
    },
    {
      program: 'PG Certificate Program in Strategic Product Management',
      referrerBonus: '9,000',
      refereeBonus: '11,000',
    },
    {
      program: 'Executive Program in Data Driven Product Management',
      referrerBonus: '10,000',
      refereeBonus: '10,000',
    },
    {
      program:
        'Executive Program in Product Management and Digital Transformation',
      referrerBonus: '10,000',
      refereeBonus: '10,000',
    },
    {
      program: 'Executive Program in Product Management',
      referrerBonus: '10,000',
      refereeBonus: '9,000',
    },
    {
      program: 'Advanced Certification in Product Management',
      referrerBonus: '10,000',
      refereeBonus: '10,000',
    },
    {
      program: 'Executive Program in Product Management and Project Management',
      referrerBonus: '10,000',
      refereeBonus: '9,000',
    },
  ]
  return (
    <table
      className='table-fixed border-collapse   shadow-table rounded-lg overflow-hidden font-[Source Sans 3]'
      rules="columns"
    >
      <thead className='bg-[#1A73E859] p-5 '>
        <tr className=''>
          <th className='w-[60%] text-left text-[#1350A0] p-5 '>
            Programs
          </th>
          <th className='w-[20%] text-center text-[#1350A0] border-x-2 border-[#00000038]'>Referrer Bonus</th>
          <th className='w-[20%] text-[#1350A0] text-center'>Referee Bonus</th>
        </tr>
      </thead>
      <tbody className=''>
        {tableItems.map((tableItem,i) => (
          <tr className='' key={i}>
            <td className='w-[65%] py-4 flex gap-3 ml-10'>
              <img src='/education.png' className='h-5' />
              <p className="text-[#3C4852] ">{tableItem.program}</p>
            </td>
            <td className='text-[#3C4852] w-[20%] border-x-2 border-[#00000038] text-center'>
              ₹ {tableItem.referrerBonus}
            </td>
            <td className='text-center text-[#3C4852] w-[30%] '>
              ₹ {tableItem.refereeBonus}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ReferralProgramTable
