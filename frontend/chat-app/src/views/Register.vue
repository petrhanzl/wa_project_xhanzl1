<template>
  <div>
    <div v-if="error" class="error">{{error.message}}</div>
    <form @submit.prevent="pressed">
      Register
      <div class="email">
        <input type="email" v-model="email" placeholder="email">
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="password">
      </div>
      <div class="nickname">
        <input type="text" v-model="nickname" placeholder="nickname">
      </div>
      <button type="submit">Register</button>
    </form>


    </div>
</template>

<script>
import { signup } from '@/api/handlers/users'
import router from "@/router";

    export default {
      methods: {
        pressed(){
          if (!this.email) {
            alert('You must fill in email!')
          } else if (!this.password) {
            alert('You must fill in password!')
          } else if (!this.nickname) {
            alert('You must fill in nickname!')
          } else {
            signup(this.email, this.nickname, this.password);
            router.push('secret');
          }

        }
      },
      data() {
          return{
              email: '',
              password: '',
              nickname: '',
              error: ''
          }
      }
    }
</script>

<style lang="scss" scoped>
.error {
    color: red;
    font-size: 18px;
}
input {
    width: 400px;
    padding: 30px;
    margin: 20px;
    font-size: 21px;


}
button {
    width: 400px;
    height: 75px;
    font-size: 100%;
}
</style>
