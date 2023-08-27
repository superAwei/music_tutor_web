<template>
  <div  :class="{ 'bg-white ':  $route.matched[1].path !== '/' || navbarWhite ,
                  'fixed-top':  $route.matched[1].path == '/',
                  'sticky-top':  $route.matched[1].path !== '/'
                }">
    <nav class="container navbar navbar-expand-lg">
      <div class="container-fluid">
        <RouterLink to="/" class="navbar-brand nav-link d-flex align-items-end">
          <img src="../assets/images/logo.png" alt="logo" class="logo">
          <!-- <span class="test">樂樂音樂家教媒合平台</span> -->
        </RouterLink>
        <li class="nav-item position-relative fs-5 d-lg-none d-block ms-auto" 
            v-if="this.isMember === true">
          <RouterLink to="/CartPage" class="nav-link"
            :class="{ 'text-primary':  $route.name === 'CartPage'}">
            <i class="bi bi-cart-fill me-lg-2"></i>
            <div class="bg-primary text-white rounded-circle text-center position-absolute small-num-mobile"
              v-if="studentData.myCart.length">
              {{ studentData.myCart.length }}
            </div>
          </RouterLink>
        </li>
    
        <button class="navbar-toggler ms-32" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown"
            :class="{'show':isMenuOpen}">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item fs-5">
              <RouterLink to="/CreateCourses/BeATeacherStep1" class="nav-link"
                :class="{ 'text-primary':  $route.matched[1].path === '/CreateCourses'}">
                我要開課
              </RouterLink>
            </li>
            <li class="nav-item fs-5">
              <RouterLink to="/AllCourses" class="nav-link"
                :class="{ 'text-primary':  $route.name === 'AllCourses'}">
                所有課程
              </RouterLink>
            </li>
            <li class="nav-item fs-5">
              <RouterLink to="/UserLogin" class="nav-link"
                  :class="{ 'text-primary':  $route.name === 'UserLogin'}"
                  v-if="this.isMember === false">
                  登入
              </RouterLink> 
            </li>
              <!-- 登入後出現 -->
            <li class="nav-item position-relative fs-5 d-none d-lg-block" 
                v-if="this.isMember === true"
                @click="myCoursesState = 'bookmark', goBookmark()">
              <div class="nav-link"
                :class="{ 'text-primary':  $route.name === 'MyCourses'}"
              >
                <i class="bi bi-bookmarks-fill me-lg-2"></i>
                <div class="bg-primary text-white rounded-circle text-center position-absolute small-num"
                  v-if="bookmarkNum">
                  {{ bookmarkNum }}
                </div>
              </div>
            </li>
            <li class="nav-item position-relative fs-5 d-none d-lg-block" 
                v-if="this.isMember === true">
              <RouterLink to="/CartPage" class="nav-link"
                :class="{ 'text-primary':  $route.name === 'CartPage'}">
                <i class="bi bi-cart-fill me-lg-2"></i>
                <div class="bg-primary text-white rounded-circle text-center position-absolute small-num"
                  v-if="studentData.myCart.length">
                  {{ studentData.myCart.length }}
                </div>
              </RouterLink>
            </li>
            <li class="nav-item dropdown">  
              <button class="btn dropdown-toggle text-primary ps-0 ps-lg-2"
                      type="button" id="dropdownLogin" 
                      data-bs-toggle="dropdown" aria-expanded="false"
                      :class="{ 'text-primary':  $route.name === 'UserLogin'}"
                      v-if="this.isMember === true">
                <i class="bi bi-person-circle me-2 fs-5"></i>
                {{ teacherData.displayName }}
              </button>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownLogin"
                      v-if="this.isMember === true">
                <li>
                  <RouterLink to="/MemberPage" class="dropdown-item">
                    個人主頁
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/MyCourses" class="dropdown-item">
                    我的課程
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/MyCalendar" class="dropdown-item">
                    行事曆
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/AccountSetting" class="dropdown-item">
                    帳戶設定
                  </RouterLink>
                </li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#"
                  @click="signOut()">
                  登出
                </a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions, mapWritableState } from 
'pinia'  
import logInStore from '@/stores/logInStore'
import dataStore from '../stores/dataStore';
import windowStore from '@/stores/windowStore'
import goStore from '@/stores/goStore'

export default {
  data() {
    return {
      isMenuOpen : false
    }
  },
  computed: {
    ...mapState(dataStore, ['user','teacherData', 'isMember', 'studentData', 'bookmarkNum']),
    ...mapWritableState(dataStore, ['myCoursesState']),
    ...mapState(windowStore, ['navbarWhite', 'homeLoading'])
  },
  methods: {
    ...mapActions(logInStore, ['signOut']),
    ...mapActions(goStore,['goBookmark']),
  },
  created () {
    
  },
  mounted() {
    this.isMenuOpen = false; // 重整關閉navbar
  }
}
</script>


<style lang="scss" scoped>
.logo {
    width: 100px;
    height: auto;
    object-fit: cover;
}
.small-num {
  width:20px;
  height: 20px;
  top: 3px;
  left: 20px;
  font-size: 12px;
}
.small-num-mobile{
  width:20px;
  height: 20px;
  top: 0px;
  left: 15px;
  font-size: 12px;
}
.bg-white {
  transition: .4s ease;
}
.fixed-top {
  transition: .4s ease;
}
</style>
