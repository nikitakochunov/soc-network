import axios from 'axios'
// import configFile from '../config.json'
import { httpAuth } from '../hooks/useAuth'
import localStorageService from './localStorage.service'

const configFile = {
  apiEndpoint:
    'https://nk-soc-network-default-rtdb.europe-west1.firebasedatabase.app/',
  isFirebase: true,
}

const http = axios.create({
  baseURL: configFile.apiEndpoint,
})

http.interceptors.request.use(
  async function (config) {
    if (configFile.isFirebase) {
      const containSlash = /\/$/gi.test(config.url)
      config.url =
        (containSlash ? config.url.slice(0, -1) : config.url) + '.json'

      const expiresDate = localStorageService.getExpiresDateToken()
      const refreshToken = localStorageService.getRefreshToken()

      if (refreshToken && expiresDate < Date.now()) {
        const { data } = await httpAuth.post('token', {
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
        })

        localStorageService.setTokens({
          idToken: data.id_token,
          refreshToken: data.refresh_token,
          localId: data.user_id,
          expiresIn: data.expires_in,
        })
      }

      const accessToken = localStorageService.getAccessToken()
      if (accessToken) {
        config.params = { ...config.params, auth: accessToken }
      }
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

const transformData = (data) => {
  return data && !data._id ? Object.values(data) : data
}

http.interceptors.response.use(
  (res) => {
    if (configFile.isFirebase) {
      res.data = { content: transformData(res.data) }
    }
    return res
  },
  function (error) {
    console.log('Interseptor')
    const { response } = error
    const isExpectedError =
      response && response.status >= 400 && response.status < 500
    if (!isExpectedError) {
      console.log(error)
    }
    return Promise.reject(error)
  }
)

const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
  patch: http.patch,
}

export default httpService
