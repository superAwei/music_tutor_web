import { defineStore } from 'pinia'

export default defineStore('windowStore', {
  state: () => ({
    goTopIcon: false,
    windowWidth: 0,
    navbarWhite: false,
    homeLoading: false,
  }),
  actions: {
    scroll () {
      window.onscroll = e => {
        if (e.target.scrollingElement.scrollTop > 350) {
          this.goTopIcon = true
        } else {
          this.goTopIcon = false
        }
        if (e.target.scrollingElement.scrollTop > 100) {
          this.navbarWhite = true
        } else {
          this.navbarWhite = false
        }

      }
    },
    getWindowWidth () {
      this.windowWidth = window.innerWidth
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      })
    },
    goTop () {
      console.log(556562)
      document.documentElement.scrollTop = 0
    }
  }
})
