<template>
  <BannerCom />
  <div class="container">
    <div class="row align-items-center" v-if="!loading">
      <div class="col-10">
        <el-calendar>
        <template #date-cell="{data}">
          <div class="calendar-item">
            <div class="calendar-time">
              {{ data.day.split('-').slice(2).join('')}}
            </div>
            <div>
              <span class="remark-text calendar-time" 
                    v-for="(item, index) in dealMyDate1(data.day)" :key="index">
                <span class="text-success">{{ item }}</span>
              </span>
              
              <span class="remark-text calendar-time" 
                    v-for="(item, index) in dealMyDate2(data.day)" :key="index">
                <span class="text-danger">{{ item }}</span>
              </span>
            </div>
          </div>
        </template>
      </el-calendar>
      </div>
      <div class="col-2">
        <div class="text-success fs-3 fw-bold">
          - 要教的課
        </div>
        <div class="text-danger fs-3 fw-bold">
          - 要上的課
        </div>
      </div>
    </div>
  </div>
</template>


  
<script>
import moment from 'moment'
import BannerCom from '../components/BannerCom.vue'
import { mapState, mapActions, mapWritableState } from 
'pinia'  
import dataStore from '@/stores/dataStore'
import bannerStore from '@/stores/bannerStore'

export default {
  components: { BannerCom },
  data () {
    return {
      resDate: [
        { date: '2023-08-14', content: '專題討論、研究行事曆' },
        { date: '2023-08-16', content: '訂正作業' },
        { date: '2023-08-15', content: '小組討論' },
        { date: '2023-08-17', content: '信箱、手機驗證' },
        { date: '2023-08-18', content: '第七週課程' },
        { date: '2023-08-21', content: '專題討論' },
        { date: '2023-09-10', content: '作業死線' },
        { date: '2023-09-17', content: '成果發表會' },
        { date: '2023-08-01', content: '進度條' },
        { date: '2023-08-02', content: '骨架屏' },
        { date: '2023-08-03', content: '表格' },
        { date: '2023-08-04', content: '倒數計時' },
        { date: '2023-08-05', content: '步驟條' },
        { date: '2023-08-06', content: '對話框(modal)' },
        { date: '2023-08-07', content: 'Loading' },
        { date: '2023-08-08', content: '彈出框、評分' },
        { date: '2023-08-09', content: '標籤頁、上傳、時間選擇、選擇器' },
      ]
    }
  },
  computed:{
    ...mapState(dataStore,['calenderData', 'loading']),
  },
  methods: {
    ...mapActions(dataStore,['onAuthStateChanged']),
    ...mapActions(bannerStore, ['getBannerInfo']),
    dealMyDate1 (date) {
      let res = '';
      for (let i = 0; i < this.calenderData.teach.length; i++) {
      if (moment(this.calenderData.teach[i].classSchedule).format('YYYY-MM-DD') == date) {
        res = this.calenderData.teach[i].courseName;
        break;
      }
    }
      // console.log(res)
      return res;
    },
    dealMyDate2 (date) {
      let res = '';
      for (let i = 0; i < this.calenderData.study.length; i++) {
      if (moment(this.calenderData.study[i].classSchedule).format('YYYY-MM-DD') == date) {
        res = this.calenderData.study[i].courseName;
        break;
      }
    }
      // console.log(res)
      return res;
    }
  },
  created () {
    this.onAuthStateChanged()
    this.getBannerInfo(
      new URL('../assets/images/banner.jpg', import.meta.url).href,
      'CALENDAR',
      '行事曆',
      '井然有序，做一個時間管理大師'
    )
  }
}



</script>

<style lang="scss" scoped>
.remark-text {
  font-size: 8px;
}
.calendar-item {
  flex-direction: column;
}
.calendar-time {
  height: 16px;
  line-height: 16px;
}
</style>