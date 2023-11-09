import axios, { AxiosError, type AxiosResponse } from 'axios'
import { type Http } from '../../domain/repositories/Http'
export interface IResError {
  message?: string
  extra?: any
}
const headers = {
  'Content-Type': 'application/json'
}

export const currentAxios = axios.create({
  headers
})

currentAxios.interceptors.request.use(
  async (config) => {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzg0MGU3ZDJiZTk5ZmM2NGZhZDQ2NzA5OTRkNjk2NiIsInN1YiI6IjY0YmEzMGZjMTEzODZjMDEwYzE4OGI1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J0dYMWfUlrWvKYZ2zJ0BDz53at4-MILnGB9uPPEYJj8`
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

currentAxios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  async (error) => {
    const errData = httpAxios.axiosErrorHandler(error)
    if (errData.response?.status === 500) {
      console.warn('ERROR 500: ', JSON.stringify(errData))
    }

    return Promise.reject({
      error,
      response: error.response?.data
    })
  }
)

export const httpAxios: Http = {
  get: async <T>(path: string, params?: Record<string, any>, config?: any) => {
    const response = await currentAxios.get(path, {
      ...config,
      params
    })
    return response.data as T
  },
  post: async <T>(path: string, params?: Record<string, any> | string | any[], config?: any) => {
    const response = await currentAxios.post(path, params, config)
    return response.data as T
  },
  put: async <T>(path: string, params?: Record<string, any> | string | any[], config?: any) => {
    const response = await currentAxios.put(path, params, config)
    return response.data as T
  },
  delete: async <T>(path: string, params?: any, config?: any) => {
    const response = await currentAxios.delete(path, {
      ...config,
      params
    })
    return response.data as T
  },
  axiosErrorHandler: <T = IResError, D = any>(error: any) => {
    return error as AxiosError<T, D>
  }
}
