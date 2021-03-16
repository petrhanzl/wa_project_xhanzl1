<template>
    <div>
      Logged in
      <span v-if="loggedIn">Yes</span>

      <span v-else>No</span>
      <div>
        <button @click="signOut">Sign Out</button>
      </div>

    </div>
</template>

<script>
import firebase from 'firebase';
import 'firebase/auth';
import router from "@/router";

    export default {
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
        methods: {
          async signOut(){
            try {
              const data = await firebase.auth().signOut();
              console.log(data);
              await router.push('login')
            } catch (e) {
              console.error(e);
            }

          }
        }
    }
</script>

<style lang="scss" scoped>
body{
  background-color: #9b59b6;
  margin: 0;
}
</style>
