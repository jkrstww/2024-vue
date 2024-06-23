<template>
    <div class="login-container">
        <div class="login-box">
            <h2>Login</h2>
            <div>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" v-model="loginForm.sn" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model="loginForm.password" required>
                </div>
                <button @click="loginBtn">Login</button>
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
        sn: '2024',
        password: '123'
      }
    }
  },
  methods: {
    loginBtn () {
      login(this.loginForm).then(res => {
        // 封装过后的请求  里边的res就是后端返回的json数据
        if (!res.data) {
          // 错误
          this.$message({
            message: '用户名或者密码错误',
            type: 'warning'
          })
        } else {
          // ok
          this.$message({
            message: '登录成功',
            type: 'success'
          })
          this.$router.push({path: '/main'})
        }
      })
    }
  }
}
</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.login-box {
    width: 100%;
    max-width: 300px;
    padding: 20px;
    background-color: #f4f4f4;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
}

.form-group input[type="text"],
.form-group input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 3px;
}

.form-group input[type="submit"] {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 3px;
    background-color: #5cb85c;
    color: white;
    cursor: pointer;
}

.form-group input[type="submit"]:hover {
    background-color: #4cae4c;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
}
</style>
