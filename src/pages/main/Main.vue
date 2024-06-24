<template>
  <suncaper-layout
    theme="dark"
    :logo="logo"
    :sidebar-list="sidebarList"
    :logout="logout"
  />
</template>

<script>
import {mapGetters} from 'vuex'
import Layout from '@/layouts/Layout'
import logo from '@/assets/images/scu.png'

export default {
  name: 'Main',
  data () {
    return {
      logo: {
        src: logo,
        alt: '上程数据',
        firstDes: '四川大学',
        secondDes: '心理咨询平台'
      }
    }
  },
  computed: {
    ...mapGetters({
      userType: 'user/getUserType',
      getSidebarList: 'sidebar/getSidebarList'
    }),
    sidebarList () {
      return this.getSidebarList(this.userType).main
    }
  },
  methods: {
    logout () {
    }
  },
  components: {
    'suncaper-layout': Layout
  }
}
</script>
