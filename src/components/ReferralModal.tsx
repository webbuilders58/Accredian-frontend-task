import { useAtom } from 'jotai'
import { modalAtom } from '../state.ts'
import { FormEvent, useState } from 'react'
import { sendReferral } from '../api/index.ts'

const ReferralModal = () => {
  const [open, setOpen] = useAtom(modalAtom)
  const [name, setName] = useState('')
  const [refereeName, setReferrerName] = useState('')
  const [refereeEmail, setReferrerEmail] = useState('')
  const [programme, setProgramme] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [mailError, setMailError] = useState('')

  const closeModal = () => {
    setOpen(false)
  }

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}/
    if (!emailRegex.test(refereeEmail)) {
      setEmailError(true)
      return
    }
    const res = await sendReferral(name, refereeName, refereeEmail, programme)
    if (res.isError) {
      setMailError('Something went wrong please try again')
    }
    setName('')
    setReferrerEmail('')
    setReferrerName('')
    setProgramme('')
    setEmailError(false)
    closeModal()
    setLoading(false)
    setMailError('')
  }

  return open ? (
    <div
      className='relative z-10 font-[Inter]'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'
    >
      <div
        className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
        aria-hidden='true'
      ></div>

      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
          <form className='flex flex-col gap-5' onSubmit={handleFormSubmit}>
            <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
              <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                <div className='sm:flex sm:items-start'>
                  <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left flex-1 gap-5 flex flex-col'>
                    <div className='flex '>
                      <h3
                        className='text-xl font-semibold leading-6 text-gray-900 mb-5 flex-1'
                        id='modal-title'
                      >
                        Refer Someone to a program
                      </h3>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label>Enter your name:</label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name='name'
                        className='py-2 rounded-md pl-4 ring-1 ring-inset ring-gray-300 focus:ring-indigo-600 focus:ring-inset'
                        required
                      />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label>
                        Enter the name of the person you want to refer:
                      </label>
                      <input
                        value={refereeName}
                        onChange={(e) => setReferrerName(e.target.value)}
                        className='py-2 rounded-md pl-4 ring-1 ring-inset ring-gray-300 focus:ring-indigo-600 focus:ring-inset'
                        required
                      />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label>
                        Enter the Email of the person you want to give referral:
                      </label>
                      <input
                        value={refereeEmail}
                        onChange={(e) => {
                          if (emailError) {
                            if (
                              /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}/.test(
                                e.target.value,
                              )
                            ) {
                              setEmailError(false)
                            }
                          }
                          setReferrerEmail(e.target.value)
                        }}
                        className={`py-2 rounded-md pl-4 ring-1 ring-inset   focus:ring-inset ${emailError ? 'ring-red-500 focus:ring-red-500 outline-none' : 'ring-gray-300 focus:ring-indigo-600'}`}
                        required
                      />
                      {emailError && (
                        <p className='text-red-600'>Invalid email</p>
                      )}
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label>Enter the name of the programme:</label>
                      <input
                        value={programme}
                        onChange={(e) => setProgramme(e.target.value)}
                        className='py-2 rounded-md pl-4 ring-1 ring-inset ring-gray-300 focus:ring-indigo-600 focus:ring-inset'
                        required
                      />
                    </div>
                  </div>

                  <p className='items-end cursor-pointer' onClick={closeModal}>
                    &#10005;
                  </p>
                </div>

                <p className='px-5 text-red-600 pt-3'>
                  {mailError !== '' ? mailError : ''}
                </p>
              </div>
              <div className='bg-gray-50 px-4 py-5 sm:flex sm:flex-row-reverse sm:px-6'>
                <button
                  type='submit'
                  className='inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm  sm:ml-3 sm:w-auto'
                >
                  {loading ? (
                    <img
                      src='/loading.gif'
                      className='h-6 px-4'
                      alt='loading'
                    />
                  ) : (
                    'Submit'
                  )}
                </button>
                <button
                  onClick={closeModal}
                  type='button'
                  className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <></>
  )
}

export default ReferralModal
