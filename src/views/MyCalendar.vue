<template>
  <BannerCom />
  <div class="container my-32">
    <div class="row">
      <div class="col-auto">
        - 我是老師
      </div>
      <div class="col-auto">
        - 我是學生
      </div>
      <label for="exampleColorInput" class="form-label">自訂顏色</label>
      <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color">
    </div>
  </div>
  <div class="container mb-32" v-if="!loading">
    <FullCalendar :options='calendarOptions' class="tyr">
    <!-- <template v-slot:eventContent='arg'>
      <div :style="{color: arg.event.backgroundColor}">
        <p class="">
          {{ arg.timeText }}
        </p>
        <p>
          {{ arg.event.title }}
        </p>
      </div>
    </template> -->
  </FullCalendar>
  </div>
</template>


  
<script>
import FullCalendar from "@fullcalendar/vue3"
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid' // 右上顯示月週日
import interactionPlugin from "@fullcalendar/interaction" // 拖曳
import listPlugin from "@fullcalendar/list";
import Tooltip from 'tippy.js' //npm i tippy.js
import 'tippy.js/dist/tippy.css'

import BannerCom from '../components/BannerCom.vue'
import { mapState, mapActions, mapWritableState } from 
'pinia'  
import dataStore from '@/stores/dataStore'
import bannerStore from '@/stores/bannerStore'

export default {
  components: { BannerCom, FullCalendar },
  data () {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
        initialView: 'dayGridMonth',
        weekends: true,
        // locale: 'zh-tw',
        dayMaxEventRows: 2.0, // 事件最大展示列數
        aspectRatio: 2,
        handleWindowResize: true, // 響應式
        selectable: true,  // 是否可以選中日曆格   
        expandRows: true, 
        windowResize : function(e){//瀏覽器窗體變化時觸發
          console.log(e)
            },
        views: {
          name: {
            month:'???'
          }
        },
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay listMonth"
        }, //日曆上方的按钮和title
        buttonText: {
          today: "今天",
          month: "月",
          week: "周",
          day: "日",
          list: "列表",
        },
        
        slotLabelFormat: {
          hour: "2-digit",
          minute: "2-digit",
          meridiem: false,
          hour12: false, // 设置时间为24小时
        }, // 视图的一些基本设置
        // eventMouseEnter: this.eventMouseEnter,
        dateClick: info => {
          console.log(info);
        },//點擊日期info是單元格的信息
        eventClick: info => {
          console.log(info);
          // dialogVisible.value = true;
        }, //事件的點擊
        eventDidMount: function(info) {
          var tooltip = new Tooltip(info.el, {
            content: info.event._def.title,
            placement: 'top',
            // trigger: 'hover', 
            // container: 'body'
          }); // 懸浮提示
        },
        // events: [],
        eventSources:[
          {
            events: [],
          }
        ],
        // events: 'https://calendar.google.com/calendar/embed?src=zh-tw.taiwan%23holiday%40group.v.calendar.google.com&ctz=Asia%2FTaipei'
      },

    }
  },
  watch: {
    calenderDataAll() {
      this.calendarOptions.events = this.calenderDataAll
      // this.calendarOptions.eventSources[0].events = this.calenderDataAll
    }
  },
  computed:{
    ...mapState(dataStore,['calenderDataAll', 'calenderData', 'loading']),
  },
  methods: {
    ...mapActions(dataStore,['onAuthStateChanged']),
    ...mapActions(bannerStore, ['getBannerInfo']),
  },
  created () {
    this.onAuthStateChanged()
    this.getBannerInfo(
      new URL('../assets/images/banner.jpg', import.meta.url).href,
      'CALENDAR',
      '行事曆',
      '井然有序，做一個時間管理大師'
    )
  }
}



</script>

<style lang="scss">
.fc-toolbar-title {
  color: #ff715f !important;
}
.fc-button-primary {
    color: #ff715f !important;
    background-color: #ffffff !important;
    border-color: #ff715f !important;
    border-radius: 50rem !important;
    &:hover{
    background-color: #ff715f !important;
    color: #ffffff !important;
    box-shadow: 0!important;
  }
}
.fc-button-primary {
  &:hover{
    background-color: #ff715f !important;
    color: #ffffff !important;
    box-shadow: 0!important;
  }
}
.fc-button-active {
  background-color: #ff715f !important;
  color: #ffffff !important;
  box-shadow: 0!important;
}
.fc-button .fc-icon {
    vertical-align: middle;
    font-size: 1.5em;
    color: #ff715f;
    &:hover{
    background-color: #ff715f !important;
    color: #ffffff !important;
    box-shadow: 0!important;
  }
}
.fc-event {
    position: relative;
    font-size: 0.6em !important;
    line-height: 1.4 !important;
    display: block !important;
    border-radius: 5px;
    color: #333333;
    .fc-daygrid-event-dot {
      display: inline-block !important;
    }
    .fc-event-time {
      display: inline !important;
      
    }
    .fc-event-title {
      padding-left: 4px;
    }
}

</style>