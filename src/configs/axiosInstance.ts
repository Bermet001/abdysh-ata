import axios, { AxiosResponse } from 'axios'

const BASE_URL = 'https://abdysh-backend.webtm.ru/api/v1'

export const axiosInstance = axios.create({
   baseURL: BASE_URL,
   headers: {
      'Content-Type': 'application/json',
   },
})

axiosInstance.interceptors.request.use(
   (config) => {
      return config
   },
   (error) => {
      return Promise.reject(error)
   }
)

axiosInstance.interceptors.response.use(
   (response: AxiosResponse) => {
      return Promise.resolve(response)
   },
   (error) => {
      return Promise.reject(error)
   }
)
