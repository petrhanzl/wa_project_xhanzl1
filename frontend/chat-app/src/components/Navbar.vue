<template>
    <div class="navbar">
      <nav>
        <a @click="toLogin">Login</a>
        <a @click="toRegister">Register</a>
        <a href="#">Rooms</a>
        <a href="#">Create Room</a>
        <a @click="Logout">Logout</a>
      </nav>
      <span v-if="loggedIn">You are logged in</span>
    </div>

</template>

<script>
import router from "@/router";
import firebase from "firebase";

export default {
name: "Navbar",
  methods: {
      toLogin(){
        router.push({ path: 'Login' })
      },
      toRegister(){
        router.push({ path: 'Register' })
      },
      Logout(){
        const data = firebase.auth().signOut();
        console.log(data);
        router.push('login')
      }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    })
  },
  data(){
    return {
      loggedIn: false,
    }
  },
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,500&display=swap');
nav{
  height: 40px;
  display: flex;
  align-content: center;
  vertical-align: top;
}
span {
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  color: white;
  background: rgb(53,53,53);
}
nav a {
  display: block;
  width: 100%;
  text-align: center;
  line-height: 40px;
  font-family: 'Open Sans', sans-serif;
  background: rgb(53,53,53);
  color: white;
  text-decoration: none;
}

nav a:hover {
  background: white;
  color:black
}
</style>
