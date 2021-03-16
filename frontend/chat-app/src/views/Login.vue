<template>
    <div class="container">
      <!--<div v-if="error" class="error">{{error.message}}</div>-->
      <form class="form" @submit.prevent="pressed">
        <div class="header">
          <h2>Login</h2>
        </div>
        <div class="form-control">
          <label>Email: </label>
          <input type="email" placeholder="login" v-model="email">
        </div>
        <div class="form-control">
          <label>Password: </label>
          <input type="password" placeholder="password" v-model="password">
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
</template>

<script>
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
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,500&display=swap');

*{
  box-sizing: border-box;
}

.container{
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  width: 400px;
  max-width: 100%;
  margin: auto;

}
.header{
  background-color: #f7f7f7;
  border-bottom: 1px solid #f0f0f0;
  padding: 20px 40px;
}
.header h2{
  margin: 0;
}
.form{
  padding: 30px 40px;
}
.form-control{
  margin-bottom: 10px;
  padding-bottom: 20px;
  position: relative;
}
.form-control label{
  display: inline-block;
  margin-bottom: 5px;
}
.form-control input{
  border: 2px solid #f0f0f0;
  border-radius: 4px;
  display: block;
  font-family: inherit;
  font-size: 14px;
  padding: 10px;
  width: 100%;
}
.form button{
  background-color: #8e44ad;
  border: 2px solid#8e44ad;
  border-radius: 4px;
  color: #fff;
  display: block;
  font-family: inherit;
  font-size: 16px;
  padding: 10px;
  width: 100%;
}

</style>
