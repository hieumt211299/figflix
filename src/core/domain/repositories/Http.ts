import { type IResError } from '../../infrastructure/instance/httpAxios'
import { AxiosError } from 'axios'

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Http {
  get: <T>(path: string, params?: Record<string, any>, config?: any) => Promise<T | any>
  post: <T>(
    path: string,
    params?: Record<string, any> | string | any[],
    config?: any
  ) => Promise<T | any>
  put: <T>(
    path: string,
    params?: Record<string, any> | string | any[],
    config?: any
  ) => Promise<T | any>
  delete: <T>(path: string, params?: any, config?: any) => Promise<T | any>
  axiosErrorHandler: <T = IResError, D = any>(error?: any) => AxiosError<T, D>
}
