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
    const res = await getTopMvs(offset)
    
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
  }
})
