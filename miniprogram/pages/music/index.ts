import { getBanners } from '../../services/api/music'


Page({
  data: {
    swiperHeight: 60,
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
  handleImageLoaded() {
    const query = wx.createSelectorQuery()
    query.select('.swiper-image').boundingClientRect()
    query.exec((res) => {
      this.setData({ swiperHeight: res[0].height })
    })
  }
})