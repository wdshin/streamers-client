import axios from 'axios'
// import { Auth } from 'aws-amplify'
import { CognitoUserSession } from 'amazon-cognito-identity-js'
import { userPool } from 'src/auth/AwsCognitoContext'

// config
import { HOST_API_KEY } from '../config-global'

// ----------------------------------------------------------------------

const api = axios.create({ baseURL: HOST_API_KEY })

api.interceptors.response.use(
  response => response,
  error =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong',
    ),
)

export const setAuthToken = async () => {
  const token = await fetchUserToken()
  api.defaults.headers.common['Authorization'] = token
}

export const fetchUserToken = async function () {
  const user = userPool.getCurrentUser()
  try {
    const token = await new Promise<string>((res, rej) => {
      user?.getSession(
        (err: Error | null, session: CognitoUserSession | null) => {
          if (err) {
            rej(err)
            return
          }
          if (session) {
            res(session.getIdToken().getJwtToken())
          }
          res('')
        },
      )
    })
    return token
  } catch (error) {
    console.error(error)
    return ''
  }
}

export const get = async (url: string) => {
  await setAuthToken()
  const response = await api.get(url)
  return response.data
}

export const post = async (url: string, data?: object) => {
  await setAuthToken()
  const response = await api.post(url, data)
  return response.data
}

export default api
