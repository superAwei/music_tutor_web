<template>
  <div class="container w-75">
    <div class="row">
      <div class="col-12 col-lg-8">
        <img :src="beATeacherData.courseImg" alt="課程照片">
      </div>
      <div class="col-12 col-lg-4 d-flex flex-column">
        <p class="fs-2 fw-bold">{{ beATeacherData.courseName }}</p>
        <p class="">
          {{ beATeacherData.courseIntro }}
        </p>
      </div>
    </div>
  </div>

  <div class="container my-48 w-75">
    <div class="row align-items-center">
      <div class="col-12 col-lg-8">
        <div class="row align-items-center">
          <div class="col-2">
            <img :src="teacherData.teacherImg" alt="老師照片" class="user-photo">
          </div>
          <div class="col-10 fs-2">
            {{ teacherData.displayName }}
          </div>
        </div>
        <div class="row my-3">
          <div class="col-10">
            {{ teacherData.teacherIntro }}
          </div>
        </div>
        <div class="row my-3">
          <p>關於課程</p>
          <div class="col-auto">
            <div class="d-flex align-items-center">
              <i class="bi bi-clock me-2"></i>
              課程時長<br>{{ beATeacherData.time }}分鐘
            </div>
          </div>
          <div class="col-auto">
            <div class="d-flex align-items-center">
              <i class="bi bi-tools me-2"></i>              
              <div>
                上課方式<br>
                <span class="bg-info rounded-2 px-2 me-2"
                      v-for="item in beATeacherData.courseMethod" :key="item">
                  {{ item }}
                </span>
              </div>
                
            </div>
          </div>
          <div class="col-auto" v-if="beATeacherData.cityName">
            <div class="d-flex align-items-center">
              <i class="bi bi-geo-alt me-2"></i>
              上課地點<br> {{ beATeacherData.cityName }}
            </div>
          </div>
        </div>
       </div>
      <div class="col-12 col-lg-4 p-4 border">
        <h4 class="border-bottom pb-2">購買單堂課程</h4>
        <div class="mb-3">
          <span class="fs-5">售價</span>
          <span class="fs-1">NT${{ beATeacherData.price }}</span> 
        </div>
        <div class="d-flex justify-content-between">
          <button type="button" class="btn btn-outline-danger w-75">
            立即購買
          </button>
          <button type="button" class="btn btn-danger">
            <i class="bi bi-cart-fill"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="row justify-content-center mt-48">
      <div class="col-12 d-flex justify-content-between">
        <button type="button" class="btn btn-outline-primary"
                   @click="goBeATeacherStep2()">
            &emsp;&emsp;上一步&emsp;&emsp;
        </button>
        <button type="button" class="btn btn-primary"
                  @click="goBeATeacherStep4(), SetFirebaseCourseData()">
            &emsp;&emsp;下一步&emsp;&emsp;
        </button>
      </div>
    </div>
  </div>


</template>

<script>
import { mapState, mapActions, mapWritableState } from 
'pinia'  
import dataStore from '@/stores/dataStore'
import goStore from '@/stores/goStore'
import bannerStore from '@/stores/bannerStore'

export default {
  computed: {
    ...mapState(dataStore, ['beATeacherData','teacherData']),
    ...mapWritableState(dataStore, ['createCourseStep'])
  },
  methods: {
    ...mapActions(goStore, ['goBeATeacherStep2', 'goBeATeacherStep4']),
    ...mapActions(dataStore, ['SetFirebaseCourseData']),
    ...mapActions(bannerStore, ['getBannerInfo'])
    
  },
  created () { 
    this.getBannerInfo(
      new URL('../assets/images/banner.jpg', import.meta.url).href,
      'PREVIEW',
      '頁面預覽 ',
      '一探學習體驗，預覽您的課程頁面，確保效果完美呈現'
    )
    this.createCourseStep = 3
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  object-fit: cover;
}
.user-photo {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  object-fit: cover;
}
</style>