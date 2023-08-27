<template>
  <div class="col-12 col-lg-8 me-auto">
    <CoursesLoadingList v-if="loading" />
  </div>

  <div class="text-center mt-48"
      v-if="studentData.myCart.length === 0 && !loading">
      <p class="fs-2 fw-bold">購物車無任何品項</p>
      <RouterLink to="/AllCourses">
        <button type="button" class="btn btn-outline-primary mt-16">
          繼續購物
        </button>
      </RouterLink> 
  </div>


  <div class="col-12 col-lg-8 mx-auto mb-3 border rounded-2 h-100"
        v-if="studentData.myCart.length !== 0 && !loading">
    <table class="table table-hover align-middle">
      <thead>
        <tr>
          <th width="" class="" colspan="4">
            <div class="form-check align-items-center">
              <input class="form-check-input me-3" 
                type="checkbox" 
                id="checkAll" 
                name="checkAll"
                value=""
                @click="checkAll()"
                v-model="checkAllValue"> 
              <label for="checkAll" class="text-primary fs-5">全選</label>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item, index in userCartCourses" :key="item.timestamp">
          <td width="8%" class="">
            <div class="form-check">
              <input class="form-check-input" 
                type="checkbox" 
                :id="item.timestamp" 
                :value="index" 
                name="courseMethod1" 
                v-model="cartCheckboxWrap"> 
              <label :for="item.timestamp"></label>
            </div>
          </td>
          <td width="25%"
              @click="goCoursePage(item[0].id)">
              <div class="table-image cursor-pointer">
                <img :src="item[0].data.courseImg" alt="課程圖片" class="">
              </div>
          </td>
          <td width="60%">
            <div class="container g-0">
              <div class="row align-items-center g-0">
                <div class="col-12 col-lg-8">
                  <div class="fs-5 fw-bold lh-1">
                    {{ item[0].data.courseName }}
                  </div>
                </div>
                <div class="col-12 col-lg-4 text-lg-end">
                  <p v-if="couponValue == 1">
                    NT$ {{ $filters.currency(item[0].data.price) }}
                  </p>
                  <p v-if="couponValue != 1">
                    NT$ {{ $filters.currency(item[0].data.price * couponValue) }}
                  </p>
                  <p class="fs-8 text-delete text-decoration-line-through" 
                        v-if="couponValue != 1">
                    NT$ {{ $filters.currency(item[0].data.price) }}
                  </p>
                </div>
              </div>
            </div>
          </td>
          <td width="7%" class="text-end">
            <div class="cursor-pointer"
              @click="deleteCart(user.uid, item.timestamp, index)">
              <i class="bi bi-trash3-fill"></i>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
import CoursesLoadingList from '../components/CoursesLoadingList.vue'
import { mapState, mapActions, mapWritableState } from 
'pinia' 
import cartStore from '@/stores/cartStore'
import dataStore from '@/stores/dataStore'
import goStore from '@/stores/goStore'

export default {
  components: { CoursesLoadingList },
  computed: {
    ...mapWritableState(cartStore, ['cartCheckboxWrap','payWrap', 'checkAllValue']),
    ...mapWritableState(dataStore, ['studentData','user', 'userCartCourses','couponData']),
    ...mapState(cartStore, ['cartTotal', 'couponValue']),
    ...mapState(dataStore, ['loading']),
  },
  methods: {
    ...mapActions(cartStore, ['deleteCart', 'addToPayWrap', 'checkAll']),
    ...mapActions(dataStore, ['onAuthStateChanged']),
    ...mapActions(goStore, ['goCoursePage']),
  },
  created () {

  }
}
</script>

<style lang="scss" scoped>
.table-image {
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: transform .3s;
    
  }
  &:hover {
    img {
      transform: scale(1.3) rotate(3deg);
    }
  }
}
input {
  width: 25px;
  height: 25px;
}
table {
  font-family: sans-serif;
}
</style>