<template>
    <div>
      Login
      <form @submit.prevent="pressed">
        <div class="email">
          <input type="email" placeholder="login" v-model="email">
        </div>
        <div class="password">
          <input type="password" placeholder="password" v-model="password">
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
</template>

<script>
import firebase from 'firebase';
import 'firebase/auth';
import { signIn } from '@/api/handlers/users'
import router from "@/router";

    export default {
        data() {
          return {
            email: '',
            password: ''
          }
        },
        methods: {
          pressed(){
            signIn(this.email, this.password);
            router.push('secret')
            .then()
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
