<template>
    <div class="registered">
      <div class="registered_inputs">
          <div class="inputsA">
            <a href="###">登录</a>
            <a href="###">注册</a>
          </div>
          <van-cell-group>
            <van-field
              v-model="userName"
              :left-icon="sjIcon"
              placeholder="请输入手机号码"
              clearable
            />
            <van-field
              v-model="yzmVule"
              clearable
              :left-icon="yzm"
              placeholder="请输入验证码"
            >
              <template #button>
                <van-button size="small" type="primary">发送验证码</van-button>
              </template>
            </van-field>
            <van-field
              v-model="userPassword"
              clearable
              :left-icon="suoIcon"
              placeholder="请输入密码"
              :right-icon="look"
              type="password"
            />
            <van-field
              v-model="reUserPassword"
              clearable
              :left-icon="suoIcon"
              placeholder="请再次输入密码"
              :right-icon="look"
              type="password"
            />
          </van-cell-group>
      </div>
      <div class="registered_buttons">
        <button>登录</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Registered',
  data(){
    return{
      userName: '',
      yzmVule: '',
      userPassword: '',
      reUserPassword: '',
      sjIcon: require('../assets/shouji.svg'),
      suoIcon: require('../assets/suo.svg'),
      look: require('../assets/yees.svg'),
      yzm: require('../assets/yanzhengma.svg'),
    }
  },
  components: {
    
  }
}
</script>

<style scoped>
.registered{
  overflow: hidden;
  font-size: 0;
  background-image: url('../assets/loginBj2.png');
  background-repeat: no-repeat;
  background-size: 175%;
  background-position-x: -75px;
  background-position-y: -245px;
}
.registered_inputs{
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
  font-weight: 700;
}
.inputsA a:nth-child(1){
  margin-right: 0.75rem;
  color: #6f7277;
}
.inputsA a:nth-child(2){
  color: #007cfe;
}

.registered_buttons{
  width: 100%;
  height: 3.26rem;
}

.registered_buttons button{
  width: 4.81rem;
  height: 0.88rem;
  background-image: linear-gradient(to right,#007CFE,#00B1F6);
  font-size: 0.3rem;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  margin-top: 1.28rem;
}
</style>
