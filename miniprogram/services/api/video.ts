import request from '../index'

export const getTopMvs = (offset: number, limit: number = 10) => {
  return request({
    url: '/top/mv',
    method: 'GET',
    data: {
      offset,
      limit
    }
  })
}

export const getMvUrl = (id: number | string) => {
  return request({
    url: '/mv/url',
    method: 'GET',
    data: {
      id
    }
  })
}

export const getMvDetail = (mvid: number | string) => {
  return request({
    url: '/mv/detail',
    method: 'GET',
    data: {
      mvid
    }
  })
}

export const getRelatedVideo = (id: number | string) => {
  return request({
    url: '/related/allvideo',
    method: 'GET',
    data: {
      id
    }
  })
}
