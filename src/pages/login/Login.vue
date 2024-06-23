<template>
  <div class="login-container">
    <video autoplay muted loop id="myVideo">
      <source :src="require('@/assets/images/view.mp4')" type="video/mp4">
    </video>
    <div class="slider">
      <div :class="active === 1 ? 'form' : 'form hidden'">
        <div class="title"> <b>欢迎</b>回来</div>
        <div class="subtitle">登录你的账户</div>
        <div class="inputf">
          <input id="username" v-model="loginForm.sn" type="text" placeholder="请输入用户名" required>
          <span class="label">用户名</span>
        </div>
        <div class="inputf">
          <input id="password" v-model="loginForm.password" type="password" placeholder="请输入密码" required>
          <span class="label">密码</span>
        </div>
        <el-link type="info">忘记密码</el-link>
        <button @click = "loginBtn">登录</button>
      </div>
      <div :class="active === 2 ? 'form' : 'form hidden'">
        <div class="title">开始</div>
        <div class="subtitle">创建你的账户</div>
        <div class="inputf">
          <input type="text" placeholder="学号" />
          <span class="label">学号</span>
        </div>
        <div class="inputf">
          <input type="text" placeholder="联系方式" />
          <span class="label">联系方式</span>
        </div>
        <div class="inputf">
          <input type="text" placeholder="密码" />
          <span class="label">密码</span>
        </div>
        <button>注册</button>
      </div>
      <div :class="active === 1 ? 'card' : 'card active'">
        <div class="head">
          <div class="name">学生<span>心理咨询</span>平台</div>
        </div>
        <div class="description">
          test
        </div>
        <div class="btn">
          {{ active === 1 ? '新用户 ?' : '已有账户 ?' }}
          <button @click="active = (active === 1) ? 2 : 1">{{ active === 1 ? '去注册' : '去登录' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {login} from '@api/api'
export default {
  data () {
    return {
      loginForm: {
        sn: '',
        password: ''
      },
      active: 1
    }
  },
  methods: {
    loginBtn () {
      login(this.loginForm).then(res => {
        if (!res.data) {
          this.$message({
            message: '账号或密码错误！',
            type: 'warning'
          })
        } else {
          this.$message({
            message: '登陆成功！',
            type: 'success'
          })
          this.$router.push('/main')
        }
        console.info(res)
      })
    }
  }
}
</script>

<style scoped>
.login-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
#myVideo {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.slider{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .form{
    width: 400px;
    height: 500px;
    background: rgba(17,25,40,0.75);
    backdrop-filter: blur(16px) saturate(0);
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.15);
    padding: 40px 60px;
    box-shadow: rgba(50,50,93,0.25) 50px 50px 100px -20px,
    rgba(0,0,0,0.5) 30px 30px 60px -30px,
    rgba(217,217,222,0.35) 2px -2px 6px 0;
    display: flex;
    position: relative;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 10px;
    z-index: 3;
    transition: 0.5s ease-in-out;

    &.hidden{
      height: 395px;
      box-shadow: none;
      z-index: 1;
    }

    .title{
      font-size: 18px;
      color: rgb(246,240,255);
      letter-spacing: 1.5px;
      font-weight: 300;
    }
    .subtitle{
      font-size: 11px;
      color: rgb(246,240,255);
      letter-spacing: 1px;
      margin-bottom: 35px;
    }
    .inputf{
      width: 100%;
      position: relative;
      margin-bottom: 35px;
      input{
        width: 100%;
        height: 35px;
        border: none;
        outline: 1.5px solid rgb(200, 200, 220);
        background: transparent;
        border-radius: 8px;
        font-size: 12px;
        padding: 0 15px;
        color: rgb(246,249,255);
        &::placeholder{
          color: rgb(175, 180, 190);
        }
        &:focus{
          outline: 1.5px solid rgb(224,229,240);
          &::placeholder{
            opacity: 0;
          }
          & + .label {
            opacity: 1;
            top: -20px;
          }
        }
        &:not(:placeholder-shown) + .label {
          opacity: 1;
          top: -20px;
        }
      }
      .label {
        position: absolute;
        top: 0;
        left: 0;
        color: rgb(246, 249, 255);
        font-size: 11px;
        font-weight: bold;
        transition: 0.25s ease-out;
        opacity: 0;
      }
    }
    .el-link {
      margin-right: 8px;
      margin-bottom: 10px;
    }
    .el-link .el-icon--right.el-icon {
      vertical-align: text-bottom;
    }
    button {
      width: 100%;
      height: 35px;
      background: rgb(36, 217, 217);
      border: none;
      outline: none;
      border-radius: 5px;
      font-weight: bold;
      font-size: 12px;
      cursor: pointer;
    }
  }
  .card{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0,-50%);
    width: 475px;
    height: 400px;
    background: white;
    background-size: contain;
    padding: 40px;
    border-radius: 0 10px 10px 0;
    transition: 0.5s ease-in-out;
    z-index: 2;

    &.active{
      right: calc(100% - 550px);
      border-radius: 10px 0 0 10px;
    }

    .head{
      font-size: 34px;
      margin-bottom: 35px;
      .name{
        font-weight: 300;
        span{
          color: rgb(36, 217, 217);
          font-weight: bold;
        }
      }
    }
    .description{
      font-size:14px;
      text-align: justify;
      margin-bottom: 35px;
    }
    .btn{
      font-size: 14px;
      button{
        background: rgb(36, 217, 217);
        font-size: 14px;
        padding: 5px 15px;
        border: none;
        outline: none;
        border-radius: 5px;
        cursor: pointer;
        margin-left: 10px;
      }
    }
  }
}
</style>
