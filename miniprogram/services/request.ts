import { BASE_URL } from '../address'

import type { IRequestProps } from './types'

export default function request<T = any>({ url, method, data }: IRequestProps): Promise<T> {
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + url,
      method,
      data,
      success(res) {
        const result: T = (res.data as any)
        resolve(result)
      },
      // fail(err) {
      //   reject(err)
      // }
      fail: reject
    })
  })
}
