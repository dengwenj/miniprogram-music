import { getBanners } from '../../services/api/music'
import queryRect from '../../utils/queryRect'
import throttle from '../../utils/throttle'
import { rankingStore } from '../../store/index'

const throttleRect = throttle(queryRect, 300)

Page({
  data: {
    swiperHeight: 0,
    banners: [],
    recommendSongs: []
  },

  onLoad() {
    // 获取页面数据
    this.getPageData()

     // 发起共享数据的请求
     rankingStore.dispatch("getRankingDataAction")

     // 从store获取共享的数据
     rankingStore.onState("hotRanking", (res: any) => {
       const recommendSongs = res?.tracks?.slice(0, 6)
       this.setData({ recommendSongs })
     })
    
  },

  getPageData() {
    getBanners().then((res) => {
      // setData 在设置 data 数据上是同步的
      // 通过最新的数据对 wxml 进行渲染，渲染的过程时异步的， 两个数据不一样
      this.setData({ banners: res.banners })
      // console.log(this.data.banners); 获取到的最新数据

      // react 里面 this.setState 是异步的（不包含定时器，promise 对象等等），渲染的过程也是异步的
    })
  },

  /**
   * 处理函数
   */
  handleClickSearch() {
    wx.navigateTo({
      url: '../search-detail/index'
    })
  },
  async handleImageLoaded() {
    const res = await throttleRect('.swiper-image')
    this.setData({ swiperHeight: res[0].height })
  }
})