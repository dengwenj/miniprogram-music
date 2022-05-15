import { getBanners } from '../../services/api/music'
import queryRect from '../../utils/queryRect'
import throttle from '../../utils/throttle'

const throttleRect = throttle(queryRect, 300)

Page({
  data: {
    swiperHeight: 0,
    banners: []
  },

  onLoad() {
    // 获取页面数据
    this.getPageData()
  },

  getPageData() {
    getBanners().then((res) => {
      this.setData({ banners: res.banners })
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