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
