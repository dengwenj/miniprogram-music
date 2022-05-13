// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    count: 0,
    hobby: [
      '不睡觉',
      '不吃饭',
      '当社会人'
    ]
  },
  handleClick() {
    this.setData({
      count: this.data.count + 1
    })
  }
})
