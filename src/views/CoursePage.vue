<template>
  <!-- 課程圖片&說明 -->
  <div class="container mt-48" v-if="!loading">
    <div class="row">
      <div class="col-12 col-lg-8">
        <img :src="courseData.courseImg" alt="課程圖片" class="course-photo">
      </div>
      <div class="col-12 col-lg-4 d-flex flex-column">
        <h1 class="fs-2 fw-bold">{{ courseData.courseName }}</h1>
        <p class="mt-16">{{ courseData.courseIntro}}</p>
        <a href="#" class="border border-primary px-16 py-8 text-primary mt-auto ms-auto cursor-pointer rounded-pill"
            @click.prevent="toggleBookmark(courseData.id)"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="加入 / 移除收藏">
          <i :class="bookmarkState(courseData.id)"></i>
          收藏
        </a>
      </div>
    </div>
  </div>
  <!-- 其他說明 -->
  <div class="container mt-16" v-if="!loading">
    <div class="row align-items-center">
      <!-- 老師簡介&課程細項 -->
      <div class="col-12 col-lg-8">
        <div class="row align-items-center"
          @click="getOneTeacherFirebaseData(courseData.uid)">
          <div class="col-auto cursor-pointer">
            <img :src="courseData.teacherImg" alt="老師照片" class="user-photo">
          </div>
          <div class="col-auto fs-2 cursor-pointer">
            {{ courseData.displayName }}
          </div>
        </div>
        <div class="row my-3">
          <div class="col-12 col-lg-10">
            {{ courseData.teacherIntro }}
          </div>
        </div>
        <div class="row my-3">
          <p class="fs-4 mb-8">關於課程</p>
          <div class="col-auto">
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-4 me-8">timer</span>
              課程時長<br>{{ courseData.time }}分鐘
            </div>
          </div>
          <div class="col-auto">
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-4 ms-8 me-8">group</span>
              <span v-if="courseData.whoBuy">
                已被購買 <br> {{ courseData.whoBuy.length || 0 }} 次
              </span>
            </div>
          </div>
          <div class="col-auto">
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-4 ms-8 me-8">history_edu</span>
              <div>
                上課方式<br>
                <span class="bg-primary text-white rounded-2 px-2 me-2"
                      v-for="item in courseData.courseMethod" :key="item">
                  {{ item }}
                </span>
              </div>
            </div>
          </div>
          <div class="col-auto"
                v-if="courseData.cityName">
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-4 ms-8 me-8">map</span>
              上課地點<br> {{ courseData.cityName }}
            </div>
          </div>
        </div>
      </div>
      <!-- 別人的課顯示 -->
      <div class="col-12 col-lg-4 p-32 border sticky-course-page"
          v-if="this.user.uid !== courseData.uid">
        <h4 class="border-bottom pb-2">購買單堂課程</h4>
        <div class="mb-3">
          <span class="fs-5 me-1">售價</span>
          <span class="fs-1">NT${{ $filters.currency(courseData.price) }}</span> 
        </div>
        <div class="d-flex justify-content-between">
          <button type="button" class="btn btn-outline-primary w-75"
                  @click="buyNow(user.uid, courseData.id)">
            立即購買
          </button>
          <button type="button" class="btn btn-primary"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="加入購物車"
                  @click="addCart(user.uid, courseData.id)">
            <i class="bi bi-cart-fill"></i>
          </button>
        </div>
      </div>
      <!-- 自己的課顯示 -->
      <div class="col-12 col-lg-4 p-32 border sticky-course-page"
          v-if="this.user.uid === courseData.uid">
        <h4 class="border-bottom pb-2">購買人數</h4>
        <div class="mb-3">
          <span class="fs-5 me-1">共</span>
          <span class="fs-1" v-if="courseData.whoBuy">
            {{ courseData.whoBuy.length || 0}}人
          </span> 
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <button type="button" class="btn btn-outline-primary w-25"
          data-bs-toggle="modal" data-bs-target="#editMyCourseModal">
            編輯
          </button>
          <span class="text-primary fs-8">(課程審核通過後將無法再編輯)</span>
        </div>
      </div>
      <!-- 課程評價 -->
      <div class="row mb-16">
        <div class="col-12 col-lg-8">
          <p class="fs-4 mb-3">課程評價</p>
          <feedback-com/>
        </div>
      </div>
      <!-- 猜你喜歡 -->
      <div class="row mb-16">
        <div class="col-12 col-lg-8">
          <p class="fs-4 mb-3">猜你喜歡</p>
          <you-like-courses />
        </div>
      </div>
    </div>
  </div>


  <!-- 編輯Modal -->
  <edit-my-course-modal></edit-my-course-modal>

</template>
  
<script>
import { mapState, mapActions, mapWritableState } from 
'pinia'  
import dataStore from '@/stores/dataStore'
import goStore from '@/stores/goStore'
import EditMyCourseModal from '../components/EditMyCourseModal.vue'
import cartStore from '../stores/cartStore'
import FeedbackCom from '../components/FeedbackCom.vue'
import YouLikeCourses from '../components/YouLikeCourses.vue'

export default {
  components: { EditMyCourseModal, FeedbackCom, YouLikeCourses,  },
  data () {
    return {
      id: ''
    }
  },
  computed: {
    ...mapState(dataStore, ['bookmarkState','user','teacherData', 'loading']),
    ...mapWritableState(dataStore, ['courseData']),
  
  },
  methods: {
    ...mapActions(dataStore, ['onAuthStateChanged','toggleBookmark','getOneCoursesFirebaseData', 'getOneTeacherFirebaseData']),
    ...mapActions(cartStore, ['addCart','buyNow']),
    
  },
  created () {
    this.onAuthStateChanged()
    // 防止從新整理產生讀不到資料
    this.id = this.$route.params.coursePageId
    this.getOneCoursesFirebaseData(this.id)

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
.course-photo {
  height: 500px;
  object-fit: cover;
  @media (max-width: 768px)  {
    height: 300px;
  }
  @media (max-width: 576px)  {
    height: 200px;
  }
}
// 桌面版才有固定效果
.sticky-course-page {
  @media (min-width:992px) {
    position: sticky;
    top: 100px;
  }
}
</style>