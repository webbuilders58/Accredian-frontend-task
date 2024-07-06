import { modalAtom } from '../state.ts'
import { useAtom } from 'jotai'

const ReferNowButton = () => {
  const [_, setOpen] = useAtom(modalAtom)
  return (
    <button
      className='bg-[#1A73E8] font-[Inter] text-md py-3 my-10 px-10 self-center text-white rounded-md'
      onClick={() => setOpen(true)}
    >
      Refer Now
    </button>
  )
}

export default ReferNowButton
