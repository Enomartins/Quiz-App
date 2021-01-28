<template>
  <div id="app">

    <!-- Navigation -->
    <nav class="navbar bg-light navbar-light navbar-expand-md py-3">
        <div class="container">

            <a href="index.html" class="navbar-brand">SMART</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div id="navbarResponsive" class="collapse navbar-collapse" >
                <ul class="navbar-nav ml-auto">
                    <li v-if="loggedIn" class="nav-item mx-3"><router-link to="/">Take Quiz</router-link></li>
                    <li class="nav-item mx-3"><router-link to="/about">About</router-link></li>
                    <li v-if="loggedIn" class="nav-item mx-3"><router-link to="/dashboard">My Dashboard</router-link></li>
                    <li v-if="!loggedIn" class="nav-item mx-3 p-1 bg-dark"><router-link to="/login">LOGIN</router-link></li>
                    <li v-if="!loggedIn" class="nav-item mx-3 p-1 bg-dark"><router-link to="/register">REGISTER</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
    <!--End of Navigation -->
    
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase'


export default {
  data() {
    return {
      loggedIn: false,
      user: ''
    }
  },
  mounted() {
    if (firebase.auth().currentUser) {
      this.loggedIn = true
      this.user = firebase.auth().currentUser.email
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}





</style>
