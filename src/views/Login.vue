<template>
    <div class="login">
      <div class="login_inputs">
          <div class="inputsA">
            <a href="###">登录</a>
            <a href="###">注册</a>
          </div>
          <van-cell-group>
            <van-field
              v-model="userName"
              :left-icon="smileO"
              placeholder="手机号或账号"
              clearable
            />
            <van-field
              v-model="userPassword"
              clearable
              :left-icon="musicO"
              placeholder="登录密码"
              :right-icon="look"
              type="password"
            />
          </van-cell-group>
      </div>
      <div class="login_buttons">
        <button>登录</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return{
      userName: '',
      userPassword: '',
      smileO: require('../assets/shouji.svg'),
      musicO: require('../assets/suo.svg'),
      look: require('../assets/yees.svg'),

    }
  },
  components: {
    
  }
}
</script>

<style scoped>
.login{
  overflow: hidden;
  font-size: 0;
  background-image: url('../assets/loginBj2.png');
  background-repeat: no-repeat;
  background-size: 175%;
  background-position-x: -75px;
  background-position-y: -245px;
}
.login_inputs{
  font-size: 0;
  width: 100%;
  /* height: 8.25rem; */
}
.inputsA{
  margin-top: 4.65rem;
  margin-bottom: 0.8rem;
}
.inputsA a{
  font-size: 18px;
  color: #007cfe;
  font-weight: 700;
}
.inputsA a:nth-child(1){
  margin-right: 0.75rem;
}
.inputsA a:nth-child(2){
  color: #6f7277;
}

.login_buttons{
  width: 100%;
  height: 5.03rem;
}

.login_buttons button{
  width: 4.81rem;
  height: 0.88rem;
  background-image: linear-gradient(to right,#007CFE,#00B1F6);
  font-size: 0.3rem;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  margin-top: 2.89rem;
}

.inputsBox{
  width: 100%;
  height: 3.1rem;
  margin: 0 auto;
  vertical-align: middle;
}
</style>
