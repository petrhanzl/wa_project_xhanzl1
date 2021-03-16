<template>
    <div id="app">
      <navbar></navbar>


      <!--
      <div id="nav">
        <router-link to="/about">About</router-link> |
        <router-link to="/login">Login</router-link> |
        <router-link to="/register">Register</router-link> |
        <router-link to="/secret">Secret</router-link>
      </div>
      -->
      <router-view/>
    </div>

</template>

<script>
import TopHeader from './components/Top-Header';
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar,
    }
}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  vertical-align: top;
  align-self: baseline;
  justify-content: center;
}



body{
  background-color: #9b59b6;
  display:flex;
  align-items: center;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  min-height: 100vh;

}

</style>
