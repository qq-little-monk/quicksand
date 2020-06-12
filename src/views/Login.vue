<template>
    <div class="login">
      <div class="login_inputs"></div>
      <div class="login_buttons">
        <button>登录</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  components: {
    
  }
}
</script>

<style>
.login_inputs{
  width: 100%;
  height: 75.5%;
}

.login_buttons{
  width: 100%;
  height: 24.5%;
}

.login_buttons button{
  width: 4.81rem;
  height: 0.88rem;
  background-image: linear-gradient(to right,#007CFE,#00B1F6);
}
</style>
