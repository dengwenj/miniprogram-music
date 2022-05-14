import request from '../index'

export const getTopMvs = (offset: number, limit: number) => {
  return request({
    url: '/top/mv',
    method: 'GET',
    data: {
      offset,
      limit
    }
  })
}
