<template>
  <home-loading/>
  <!-- header -->
  <section class="header d-flex flex-column justify-content-center">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-lg-6 ">
          <div class="blockquote px-32">
            <h2 class="fs-2 text-white mb-3">
              找尋像好友一樣的音樂導師
            </h2>
            <h3 class="fs-6 text-white mb-24">
              在這裡與熱愛音樂的導師相遇，將你的音樂激情傾注其中。
            </h3>
            <div class="mb-2">
              <input class="form-control mt-0" list="datalistOptions" id="exampleDataList" placeholder="我想學習...">
            </div>
            <div class="pills">
              <a href="#" @click.prevent="goAllCourses('鋼琴')">
                <span class="badge rounded-pill text-bg-primary text-white me-1">鋼琴</span>
              </a>
              <a href="#" @click.prevent="goAllCourses('編曲')">
                <span class="badge rounded-pill text-bg-primary text-white me-1">編曲</span>
              </a>
              <a href="#" @click.prevent="goAllCourses('流行歌唱')">
                <span class="badge rounded-pill text-bg-primary text-white me-1">流行歌唱</span>
              </a>
              <a href="#" @click.prevent="goAllCourses('木吉他')">
                <span class="badge rounded-pill text-bg-primary text-white me-1">木吉他</span>
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
  <!-- 歡迎 -->
  <section>
    <div class="container text-center py-48">
      <h2 class="fw-bold lh-base mb-32">和音樂共舞。<br>尋找心中的旋律。</h2>
      <h4 class="fw-bolder mb-64">Lele Music Tutor</h4>
      <p class="lh-lg  fw-lighter">歡迎來到樂樂音樂家教媒合平台！<br>
        我們深知音樂對於心靈的滋養和生活的豐富意義。<br>
        我們的使命是連結那些渴望學習音樂的您，與充滿熱情且專業的音樂家教師。<br>
        <br>
        <br>
        無論您是初學者抑或已有經驗，樂樂致力於為您找到最合適的音樂導師<br>
        讓學習音樂成為一段充滿樂趣與成長的旅程<br>
      </p>
    </div>

  </section>
  <!-- 圖 -->
  <section>
    <img class="" src="../assets/images/banner.jpg" alt="" style="height: 300px;">
  </section>
  <!-- serve -->
  <section>
    <div class="container py-48 ">
      <h2 class="section-title fs-1 fw-bolder">SERVE</h2>
      <h4 class="letter-spacing-8 fs-6 mb-4 mb-md-5">我們的服務</h4>
      <div class="row align-items-center">
        <div class="col-md-6 mb-3">
           <h3 class="lh-base mb-3 mb-md-4">奏響夢想的旋律。<br>
            從這裡開始。</h3>
            <p class="fs-14 fw-light lh-lg">在尋找音樂之道的路上，樂樂音樂家教媒合平台將您與充滿熱情的音樂老師相結合。<br>無論您是剛起步或已有經驗，我們靈活的課程時間安排讓您自由展現對音樂的想像和熱愛。<br>一同探索音符的世界，實現心中的音樂夢想。<br>在這裡，旋律不僅被演奏，更被細心呵護成成長的足跡。</p>
        </div>
        <div class="col-md-6">
          <img class="img-fluid" src="../assets/images/serve1.jpg" alt="">
        </div>
      </div>

      <div class="row  py-5 flex-row-reverse align-items-center">
        <div class="col-md-6 mb-3">
           <h3 class="lh-base mb-3 mb-md-4">將音符化為人生的篇章。</h3>
            <p class="fs-14 fw-light lh-lg">音樂家的才華在樂樂音樂家教媒合平台綻放，歡迎您將空閑時間轉化為珍貴的教學時光。<br>與學生分享您的音樂造詣，同時獲得寶貴的報酬。<br>這是您與學生共同書寫音符、創造人生旋律的地方。<br>在這裡，您不僅成為指導者，更是啟發夢想、播撒希望的音樂使者。</p>
        </div>
        <div class="col-md-6">
          <img class="img-fluid" src="../assets/images/serve1.jpg" alt="">
        </div>
      </div>
    </div>
  </section>
  <!-- 開課流程 -->
  <section class="bg-grey">
    <div class="container py-48">
      <h2 class="section-title h1 fw-bolder">PROCESS</h2>
      <h4 class="letter-spacing-8 h6 mb-32">簡易的開課流程</h4>
      <p class="fs-14 fw-light lh-lg mb-64">輕鬆開始您的音樂教學之旅！我們的老師只需簡單的四步驟，即可開展線上課程。<br>將您的音樂才華轉化為寶貴的報酬，無壓力、無煩惱。讓音符為您譜寫充實人生的新篇章。</p>
      <div class="row">
        <div class="col-6 col-md-3 d-flex justify-content-center align-items-center mb-5 mb-md-0">
            <div class="step rounded-circle bg-light shadow position-relative d-flex flex-column  align-items-center justify-content-center">
              <span class="h3 position-absolute top-0 start-50 translate-middle">01</span>
              <span class="material-symbols-outlined fs-1 mb-3 text-primary">edit_document</span>
              <p class="fw-bolder">INFORMATION</p>
              <p class="text-secondary fw-light">填寫資訊</p>
            </div>
        </div>
        <div class="col-6 col-md-3 d-flex justify-content-center align-items-center mb-5 mb-md-0">
            <div class="step rounded-circle bg-light shadow position-relative d-flex flex-column  align-items-center justify-content-center">
              <span class="h3 position-absolute top-0 start-50 translate-middle">02</span>
              <span class="material-symbols-outlined fs-1 mb-3 text-primary">contract_edit</span>
              <p class="fw-bolder">INTRODUCE</p>
              <p class="text-secondary fw-light">課程介紹</p>
            </div>
        </div>
        <div class="col-6 col-md-3 d-flex justify-content-center align-items-center">
            <div class="step rounded-circle bg-light shadow position-relative d-flex flex-column  align-items-center justify-content-center">
              <span class="h3 position-absolute top-0 start-50 translate-middle">03</span>
              <span class="material-symbols-outlined fs-1 mb-3 text-primary">preview</span>
              <p class="fw-bolder">PREVIEW</p>
              <p class="text-secondary fw-light">預覽</p>
            </div>
        </div>
        <div class="col-6 col-md-3 d-flex justify-content-center align-items-center">
            <div class="step rounded-circle bg-light shadow position-relative d-flex flex-column  align-items-center justify-content-center">
              <span class="h3 position-absolute top-0 start-50 translate-middle">04</span>
              <span class="material-symbols-outlined fs-1 mb-3 text-primary">task_alt</span>
              <p class="fw-bolder">COMPLETE</p>
              <p class="text-secondary fw-light">完成！</p>
            </div>
        </div>
        <a class="col-8 col-md-5 mx-auto mt-32 btn shadow fw-bolder fs-14 letter-spacing-8 lh-lg py-16">製作課程</a>
      </div>
    </div>
  </section>
  <!-- 精選課程 -->
  <section>
    <div class="container py-48">
      <h2 class="section-title h1 fw-bolder">COURSE</h2>
      <h4 class="letter-spacing-8 fs-6 mb-4 mb-md-5">精選課程</h4>
      <p class="fs-14 fw-light lh-lg mb-7">音樂是靈魂的共鳴，而我們的課程精選優美。踏上專業音樂之旅，探索熱門精選課程，逐步揭開音樂的神秘面紗。這裡，我們致力於將音樂<br>的藝術帶入您的生活，以專業指導和獨特教學方法，激發您的音樂熱情。</p>
    </div>
    <CoursesLoading class="my-48" v-if="loading"/>
    <FeaturedCourses class="my-48" v-if="!loading"/>
    <RouterLink to="/AllCourses" class="d-flex">
      <button type="button" class="btn col-8 col-md-5 mx-auto mt-32 shadow fw-bolder letter-spacing-8 lh-lg py-16">
        更多課程
      </button>
    </RouterLink>

  </section>
  <!-- FQ -->
  <section>
    <div class="container py-6">
      
      <ul class="ps-0 ">
        <h2 class="section-title h1 fw-bolder">FAQ</h2>
      <h4 class="letter-spacing-8 fs-6 mb-4 mb-md-5">常見問題</h4>
        <li class="border-bottom py-4">
          <h3 class="question fw-bolder fs-7 fs-md-5">Ｑ 這個平台如何確保音樂家教的質量？</h3>
          <p class="fw-light pt-3 fs-7 fs-md-5">我們精心篩選並核實每位音樂家教的專業背景和教學經驗。我們採用嚴格的審核標準，確保教師具備高水準的音樂技能和教學能力，從而為學生提供優質的學習體驗。</p>
        </li>
        <li class="border-bottom py-4">
          <h3 class="question fw-bolder fs-7 fs-md-5">Ｑ 我需要擁有昂貴的樂器嗎？</h3>
          <p class="fw-light pt-3 fs-7 fs-md-5">不必。我們的音樂家教能夠根據您的需求和預算，提供適合的建議和方案。無論您是初學者還是有經驗的音樂人，我們都會確保您得到適合的指導，而且您可以根據自己的情況選擇是否購買樂器。</p>
        </li>
        <li class="border-bottom py-4">
          <h3 class="question fw-bolder fs-7 fs-md-5">Ｑ 如何安排教學時間？</h3>
          <p class="fw-light pt-3 fs-7 fs-md-5">我們的平台提供靈活的教學時間選擇，讓您和音樂家教共同商討最合適的上課時間。您可以在平台上瀏覽教師的時間表，選擇符合您日程的時間段，確保教學時間的便利性和彈性。</p>
        </li>
        <li class="border-bottom py-4">
          <h3 class="question fw-bolder fs-7 fs-md-5">Ｑ 我可以隨時取消或改變教學計劃嗎？</h3>
          <p class="fw-light pt-3 fs-7 fs-md-5">是的，我們理解您的時間可能會有變動。您可以提前與您的音樂家教溝通，根據需要進行教學計劃的調整。請確保您在取消或更改計劃時遵循我們的相關政策。</p>
        </li>
        <li class="border-bottom py-4">
          <h3 class="question fw-bolder fs-7 fs-md-5">Ｑ 是否有免費試教？</h3>
          <p class="fw-light pt-3 fs-7 fs-md-5">是的，我們的部分音樂家教提供免費試教，讓您有機會評估教學風格和師生配合是否適合。您可以在平台上查找提供免費試教的教師，並預約試教課程。</p>
        </li>
        <li class="border-bottom py-4">
          <h3 class="question fw-bolder fs-7 fs-md-5">Ｑ 我需要具備多少音樂基礎才能開始學習？</h3>
          <p class="fw-light pt-3 fs-7 fs-md-5">我們歡迎各個程度的學生，無論您是初學者還是有經驗的音樂人。我們的音樂家教將根據您的現有知識和技能，量身定制教學計劃，從基礎教學到高級技巧，都能找到適合您的課程內容。</p>
        </li>
      </ul> 
    </div>
  </section>
  <!-- 合作夥伴 -->
  <section>
    <div class="container py-6">
        <h2 class="section-title h1 fw-bolder">PARTNER</h2>
        <h4 class="letter-spacing-8 fs-6 mb-4 mb-md-5">我們的合作夥伴</h4>
        <p class="fs-14 fw-light lh-lg mb-7">與知名品牌攜手合作，為您提供更廣闊的音樂學習視野，豐富您的音樂旅程。</p>
        <div class="row">
          <div class="col-6 col-md-3 d-flex justify-content-center align-items-center mb-6">
            <img class="brand-img" src="../assets/images/serve1.jpg" alt="">
          </div>
          <div class="col-6 col-md-3 d-flex justify-content-center align-items-center mb-6">
            <img class="brand-img" src="../assets/images/serve1.jpg" alt="">
          </div>
          <div class="col-6 col-md-3 d-flex justify-content-center align-items-center mb-6">
            <img class="brand-img" src="../assets/images/serve1.jpg" alt="">
          </div>
          <div class="col-6 col-md-3 d-flex justify-content-center align-items-center mb-6">
            <img class="brand-img" src="../assets/images/serve1.jpg" alt="">
          </div>
          <div class="col-6 col-md-3 d-flex justify-content-center align-items-center mb-6">
            <img class="brand-img" src="../assets/images/serve1.jpg" alt="">
          </div>
          <div class="col-6 col-md-3 d-flex justify-content-center align-items-center mb-6">
            <img class="brand-img" src="../assets/images/serve1.jpg" alt="">
          </div>
        </div>
    </div>
  </section>


</template>

<script>
import FeaturedCourses from '../components/FeaturedCourses.vue'
import CoursesLoading from '../components/CoursesLoading.vue'
import { mapActions, mapState } from 'pinia'
import dataStore from '../stores/dataStore'
import HomeLoading from '../components/HomeLoading.vue'
import goStore from '../stores/goStore'

export default {
  components: { FeaturedCourses, CoursesLoading, HomeLoading },
  computed: {
    ...mapState(dataStore, ['loading'])
  },
  methods: {
    ...mapActions(dataStore, ['onAuthStateChanged']),
    ...mapActions(goStore, ['goAllCourses']),
  },
  created() {
    this.onAuthStateChanged()
  }
} 
</script>

<style lang="scss" scoped>
  .header {
    background-image: url('../assets/images/banner.jpg');
    background-size: cover;
    background-position: center center;
    min-height: 100vh;
  }
  .blockquote {
    background: hsla(0,0%,100%,.3);  
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(5px);
  
    /* stylings */
    padding: 1em 0;
    border-radius: .3em;
    margin: 0 auto;
    box-shadow: 0 0 0 1px hsla(0,0%,100%,.3) inset,
	            0 .5em 1em rgba(0, 0, 0, 0.6);
	  text-shadow: 0 1px 1px hsla(0,0%,100%,.3);
  }
  // a :hover{
  //   scale: 1.2;
  // }

.step{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    @media (min-width:992px) {
      width: 200px;
      height: 200px;
    }
  }

</style>
