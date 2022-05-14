import { getTopMvs } from '../../services/api/video' 

Page<{ topMvs: any[] }, any>({
  data: {
    topMvs: [],
    hasMore: true

  },

  async onLoad() {
    this.getTopMvData(0)
  },

  async getTopMvData(offset: number) {
    // 展示加载动画
    wx.showNavigationBarLoading()

    const res = await getTopMvs(offset)
    // 关闭加载动画
    wx.hideNavigationBarLoading()
    
    if (offset === 0) {
      this.setData({ topMvs: res.data, hasMore: res.hasMore })
      return
    }

    this.setData({ topMvs: [...this.data.topMvs, ...res.data], hasMore: res.hasMore })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.getTopMvData(0)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if (!this.data.hasMore) return
    this.getTopMvData(this.data.topMvs.length)
  },

  /**
   * 处理函数
   */
  handleVideoItemClick(e: any) {
    const { id } = e.currentTarget.dataset.item

    // 跳转到详情页
    wx.navigateTo({
      url: `../video-detail/index?id=${id}`
    })
  }
})
