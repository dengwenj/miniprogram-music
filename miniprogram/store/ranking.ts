import { HYEventStore } from 'hy-event-store'

import { getRankings } from '../services/api/music'

const rankingStore = new HYEventStore({
  state: {
    hotRanking: {}
  },
  actions: {
    getRankingDataAction(ctx: any) {
      getRankings(1).then((res: any) => {
        ctx.hotRanking = res.playlist
      })
    }
  }
})

export {
  rankingStore
}
