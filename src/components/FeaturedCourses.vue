<template>
  <div class="container px-0">
    <swiper
      :loop="true"
      :slidesPerView="1"
      :spaceBetween="20"
      :freeMode="true"
      :pagination="{clickable: true}"
      navigation
      :scrollbar="{ draggable: true }"
      :breakpoints="{
      '768': {
        slidesPerView: 2,
        spaceBetween: 20,
        },
      '992': {
        slidesPerView: 3,
        spaceBetween: 20,
        },
      '1200': {
        slidesPerView: 4,
        spaceBetween: 20,
        },
      }"
      class="mySwiper px-3"
    >

      <SwiperSlide v-for="(item) in top6courses" :key="item.id" class="mb-48">
        <div class="blog-card">
          <div class="meta cursor-pointer" 
              @click="goCoursePage(item.id)">
            <div class="photo" 
                :style="{backgroundImage: `url(${item.data.courseImg})`}">
            </div>
            <ul class="details d-flex flex-column">
              <li class="fs-6">
                <i class="bi bi-tags me-6"></i>
                {{ item.data.courseCategory }}
              </li>
              <li class="mt-auto ms-auto fs-5">
                <i class=""
                :class="bookmarkState(item.id)"
                @click.stop="toggleBookmark(item.id)"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="加入 / 移除收藏"
                ></i>
              </li>
            </ul>
          </div>
          <div class="description cursor-pointer"
              @click="goCoursePage(item.id)">
            <h2 class="fs-5 fw-bold d-flex">
              {{ item.data.courseName }}
            </h2>
            <h3 class="fs-6">by {{ item.data.displayName }}</h3>
            <p class="d-flex align-items-center"> 
              <span class="material-symbols-outlined fs-6 me-4">timer</span>
              {{ item.data.time }}
              <span class="material-symbols-outlined fs-6 ms-8 me-4">map</span>
              {{ item.data.cityName || '線上' }}
              <span class="material-symbols-outlined fs-6 ms-8 me-4">group</span>
              {{ item.data.whoBuy.length}}
            </p>
          </div>
          <div class="px-16 pb-16 mt-auto">
            <span class="fs-5 fw-bold">NT$ {{ $filters.currency(item.data.price) }}</span>
          </div>
        </div>
      </SwiperSlide>
    </swiper>
  </div>
</template>
<script>
  // Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import { Navigation, FreeMode, Pagination, Scrollbar } from 'swiper'
import { mapState, mapActions } from 
'pinia'  
import dataStore from '@/stores/dataStore'
import goStore from '@/stores/goStore'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      // modules: [Navigation, FreeMode, Pagination, Scrollbar]
    }
  },
  computed: {
    ...mapState(dataStore, ['coursesData', 'bookmarkState', 'top6courses'])
  },
  methods: {
    ...mapActions(dataStore, ['toggleBookmark', 'getOneCoursesFirebaseData']),
    ...mapActions(goStore, ['goCoursePage']),
  },
  created () {

  }
};
</script>

<style lang="scss" scoped>
$color_white: #fff;
$color_prime: #ff715f;
$color_grey: #e2e2e2;
$color_grey_dark: #a2a2a2;

.blog-card {
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 7px -1px rgba(#000, .1);
  margin-bottom: 1.6%;
  background: $color_white;
  line-height: 1.4;
  font-family: sans-serif;
  border-radius: 5px;
  overflow: hidden;
  z-index: 0;
  a {
    color: inherit;
    &:hover {
      color: $color_prime;
    }
  }
  &:hover {
    .photo {
      transform: scale(1.3) rotate(3deg);
    }
  }
  .meta {
    position: relative;
    z-index: 0;
    height: 200px;
  }
  .photo {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    transition: transform .2s;
  }


  .details,
  .details ul {
    margin: auto;
    padding: 0;
    list-style: none;
  }

  .details {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -100%;
    margin: auto;
    transition: left .2s;
    background: rgba(#000, .6);
    color: $color_white;
    padding: 10px;
    width: 100%;
    font-size: .9rem;
    a {
      text-decoration: dotted underline
    }
    ul li {
      display: inline-block;
    }
    .author:before {
      font-family: FontAwesome;
      margin-right: 10px;
      content: "\f007";
    }

    .date:before {
      font-family: FontAwesome;
      margin-right: 10px;
      content: "\f133";
    }

    .tags {
      ul:before {
        font-family: FontAwesome;
        content: "\f02b";
        margin-right: 10px;
      }
      li {
        margin-right: 2px;
        &:first-child {
          margin-left: -4px;
        }
      }
    }
  }
  .description {
    padding: 1rem;
    background: $color_white; //防止圖片溢出
    position: relative;
    z-index: 1;
    h2 {
      line-height: 1;
    }
    h3 {
      color: $color_grey_dark;
      margin-top: 5px;
    }
  }
  p {
    position: relative;
    margin: 1rem 0 0;
    &:first-of-type {
      margin-top: 1.25rem;
      &:before {
        content: "";
        position: absolute;
        height: 5px;
        background: $color_prime;
        width: 35px;
        top: -0.75rem;
        border-radius: 3px;
      }
    }
  }
  &:hover {
    .details {
      left: 0%;
    }
  }
}
</style>