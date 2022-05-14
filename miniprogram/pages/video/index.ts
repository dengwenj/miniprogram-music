import { getTopMvs } from '../../services/api/video' 

Page({
  data: {
    topMvs: []
  },

  async onLoad() {
    const res = await getTopMvs(0, 10)
    this.setData({ topMvs: res })
  }
})
