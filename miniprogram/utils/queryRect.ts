export default function queryRect(select: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const query = wx.createSelectorQuery()
    query.select(select).boundingClientRect()
    query.exec(resolve)
    // query.exec((res) => {
    //   resolve(res)
    // })
  })
}
