<template>
  <BannerCom />
  <!-- <div class="container my-48">
    <div class="row justify-content-center">
      <div class="col-9 timeline">
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <div class="timeline-pointer text-center step-1"
        :class="{ 'active':  $route.fullPath === '/CreateCourses/BeATeacherStep1'}">
          <p>必要資訊</p>
        </div>
      </div>
      <div class="col-3">
        <div class="timeline-pointer text-center step-2"
        :class="{ 'active':  $route.fullPath === '/CreateCourses/BeATeacherStep2'}">
          <p>課程介紹</p>
        </div>
      </div>
      <div class="col-3">
        <div class="timeline-pointer text-center step-3"
        :class="{ 'active':  $route.fullPath === '/CreateCourses/BeATeacherStep3'}">
          <p>預覽頁面</p>
        </div> 
      </div>
      <div class="col-3">
        <div class="timeline-pointer text-center step-4"
        :class="{ 'active':  $route.fullPath === '/CreateCourses/BeATeacherStep4'}">
          <p>開課完成</p>
        </div> 
      </div>
    </div>
  </div> -->


  <ProgressBar />
  <RouterView />
</template>

<script>
import BannerCom from '../components/BannerCom.vue'
import ProgressBar from '../components/ProgressBar.vue'
import { mapState, mapActions, mapWritableState } from 
'pinia'  
import dataStore from '@/stores/dataStore'


export default {
  components: { BannerCom, ProgressBar },
  computed: {
  
  },
  methods: {
    ...mapActions(dataStore, ['onAuthStateChanged']),
  },
  created () {

  }
}
</script>

<style lang="scss" scoped>
.timeline {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 29px;
    left: 0;  
    right: 0;
    height: 4px;
    background-color: #dee2e6;
  }
  &-pointer {
    position: relative;
    color: #C1C1C1;
    p {
      padding-top: 64px;
      margin-bottom: 0;
      line-height: 1.5;
    }
    &::before {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 60px;
      border: 1px solid #C1C1C1;
      border-radius: 50%;
      background-color: #C1C1C1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 36px;
      color: #FFFFFF;
      z-index: 1;
    }
    &.step-1::before {
      content: '1';
    }
    &.step-2::before {
      content: '2';
    }
    &.step-3::before {
      content: '3';
    }
    &.step-4::before {
      content: '4';
    }
    &.active {
      color: #FFC107;
      &::before {
        color: #FFFFFF;  
        background-color: #FFC107;
        border-color: #FFC107;
      }
    }
  }
}

</style>