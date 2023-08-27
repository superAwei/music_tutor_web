<template>
  <div class="container my-32">
    <div class="row justify-content-center">
      <div class="col-12 col-md-6">
        <div class="progress-container">
          <div class="progress"
              :style="{'width': `${(createCourseStep - 1)*33.3333}%`}">
          </div>
          <div class="circle fs-4 fw-bold"
          :class="{ 'active': createCourseStep > 0}">1</div>
          <div class="circle fs-4 fw-bold"
          :class="{ 'active': createCourseStep > 1}">2</div>
          <div class="circle fs-4 fw-bold"
          :class="{ 'active': createCourseStep > 2}">3</div>
          <div class="circle fs-4 fw-bold"
          :class="{ 'active': createCourseStep > 3}">4</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 
'pinia'  
import dataStore from '@/stores/dataStore'


export default {
  computed: {
  ...mapState(dataStore, ['createCourseStep'])
  },
  methods: {

  },
  created () {

  }
}
</script>


<style lang="scss" scoped>
.progress-container {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.progress-container::before {
  background-color: #e0e0e0;
  content: '';
  height: 4px;
  left: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  z-index: -1;
}
.progress {
  background-color: #ff715f;
  height: 4px;
  left: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: .4s ease;
  width: 0%;
  z-index: -1;
}
.circle {
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  border: 4px solid  #e0e0e0;
  color: #999;
  display: flex;
  height: 60px;
  justify-content: center;
  transition: .4s ease;
  width: 60px;
}
.circle.active {
  border-color: #ff715f;
  color: #ff715f;
}
</style>