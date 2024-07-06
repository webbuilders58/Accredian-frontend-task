import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { joinReferralProgram } from '../api'

const ReferralPage = () => {
  const { referralId, userId } = useParams()
  const [isError, setError] = useState(false)
  const [loading, isLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')
  useEffect(() => {
    ;(async () => {
      const res = await joinReferralProgram(userId || '', referralId || '')
      setError(res.isError)
      if (res.isError) {
        if (typeof res.error === 'string') {
          setErrorMsg(res.error)
        }
      }
      isLoading(false)
    })()
  }, [])
  return (
    <div className='text-black font-[Inter] text-lg text-center my-10'>
      {loading ? (
        'Please wait...'
      ) : isError ? (
        errorMsg !== '' ? (
          errorMsg
        ) : (
          'Invalid referral Code'
        )
      ) : (
        <div>You have been Obtained the referral code successfully</div>
      )}
    </div>
  )
}

export default ReferralPage
