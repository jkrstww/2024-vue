<template>
  <div class="header">
    <div class="header-left">
      <a
          href="javascript:;"
          class="header-icon"
          @click="collapseTrigger"
          role="button"
      >
        <s-icon
            v-if="collapse"
            icon="el-icon-s-fold"
        />
        <s-icon
            v-else
            icon="el-icon-s-unfold"
        />
      </a>
      <span class="header-title text-center">欢迎您，{{userName}} {{roleName}}</span>
    </div>
    <div class="header-right">
      <s-icon
          icon="el-icon-user-solid"
          class="text-center"
      />
      <span class="text-center" >
          {{userName}}
        </span>
      <a
          href="javascript:;"
          class="header-logout"
          @click="logout"
          role="button"
      >
        <s-tooltip effect="dark" content="退出" placement="bottom">
          <s-icon
              icon="el-icon-switch-button"
          />
        </s-tooltip>
      </a>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
import router from '@/router'
import {Tooltip} from 'element-ui'

export default {
  name: 's-header',
  props: {
    collapseTrigger: Function,
    collapse: Boolean,
    userName: String,
    roleName: String
  },
  components: {
    's-icon': Icon,
    's-tooltip': Tooltip
  },
  methods: {
    logout () {
      this.$confirm('确定退出登录吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        router.push('/login')
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import "../assets/styles/var";
.header {
  width: 100%;
  height: 60px;
  padding: 0 23px;
  line-height: 59px;
  box-sizing: border-box;
  background: #ffffff;
  border-bottom: 1px solid @borderBottomColor;
  overflow: hidden;
  > span {
    vertical-align: middle;
  }
}
.header-left {
  display: inline-block;
}
.header-right {
  font-size: 14px;
  float: right;
  display: inline-block;
}
.header-title {
  font-size: 14px;
  margin-left: 10px;
}
.header-icon {
  font-size: 22px;
  color: inherit;
  outline: none;
  display: inline-block;
  text-decoration: none;
  vertical-align: top;
  &:hover {
    color: @dch;
  }
}
.header-logout {
  .header-icon;
  .text-center;
  font-size: 14px;
  margin-left: 10px;
  line-height: normal;
  &:hover {
    color: red;
  }
}
.text-center{
  vertical-align: middle;
}
</style>
