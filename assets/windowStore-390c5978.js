import{s as e}from"./index-1209a71d.js";const i=e("windowStore",{state:()=>({goTopIcon:!1,windowWidth:0,navbarWhite:!1,homeLoading:!1}),actions:{scroll(){window.onscroll=o=>{o.target.scrollingElement.scrollTop>350?this.goTopIcon=!0:this.goTopIcon=!1,o.target.scrollingElement.scrollTop>100?this.navbarWhite=!0:this.navbarWhite=!1}},getWindowWidth(){this.windowWidth=window.innerWidth,window.addEventListener("resize",()=>{this.windowWidth=window.innerWidth})},goTop(){console.log(556562),document.documentElement.scrollTop=0}}});export{i as w};