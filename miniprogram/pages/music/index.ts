// pages/home/index.ts
Page({
  data: {

  },

  onLoad() {

  },

  /**
   * 处理函数
   */
  handleClickSearch() {
    wx.navigateTo({
      url: '../search-detail/index'
    })
  }
})