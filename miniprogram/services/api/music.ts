import request from '../index'

export const getBanners = () => {
  return request({
    url: '/banner',
    method: 'GET',
    data: {
      type: 2
    }
  })
}

export const getRankings = (idx: number) => {
  return request({
    url: '/top/list',
    method: 'GET',
    data: {
      idx
    }
  })
}
