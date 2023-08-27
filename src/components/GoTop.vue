<template>
  <div class="goTop"
      :class="{'d-none' : !goTopIcon }">
    <a href="#" @click.prevent="goTop">
      <img src="../assets/images/gotop.png" alt="">
    </a>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import windowStore from '@/stores/windowStore'
export default {
  computed: {
    ...mapState(windowStore, ['goTopIcon'])
  },
  methods: {
    ...mapActions(windowStore, ['scroll', 'goTop']),
  },
  mounted () {
    this.scroll()
  }
}
</script>

<style lang="scss" scoped>
.goTop{
  position: fixed;
  right: 20px;
  bottom: 10px;
  z-index: 99;
  font-size: 40px;
}
</style>
