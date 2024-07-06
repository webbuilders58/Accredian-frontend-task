const API_URL = process.env.VITE_API_URL || import.meta.env.VITE_API_URL

export const sendReferral = async (
  name: string,
  refereeName: string,
  refereeEmail: string,
  programme: string,
) => {
  console.log({ name, refereeName, refereeEmail, programme })
  const res = await fetch(API_URL + '/programme/refer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, refereeName, refereeEmail, programme }),
  })
  const respJson = await res.json()
  console.log(respJson)
  return { isError: res.status === 400, isSuccess: res.status === 201 }
}

export const joinReferralProgram = async (
  userId: string,
  referrerId: string,
) => {
  const res = await fetch(API_URL + `/programme/${userId}/${referrerId}`, {
    method: 'GET',
  })
  const respJson = await res.json()
  console.log(respJson)
  return {
    isError: res.status === 400,
    isSuccess: res.status === 201,
    error: respJson.error,
  }
}
