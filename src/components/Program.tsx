import { TProgram } from '../types.ts'
const Program = ({ name }: TProgram) => {
  return (
    <div className='flex text-[17px] font-bold'>
      <p className='flex-1 font-medium'>{name}</p>
      <img src='/plus.svg' className='h-6 cursor-pointer' />
    </div>
  )
}

export default Program
