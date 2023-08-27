import { defineStore } from 'pinia'




export default defineStore('courseCardStore', {
  state: () => ({
    courseCardData:[],
  }),
  actions: {
    // getCourseCardDataInfo(data) {
    //   this.courseCardData = data
    // }
  },
})
