<template>
  <div class="register">
      <div class="container w-100">
      
      <form class="float-right col-md-5 my-5" @submit="register">
        <h2 class="mb-3 text-center">Register</h2>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>

      <div class="my-3">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>

      <router-link to="/">
      Already have an account? Login Here
    </router-link>
    </form>

    </div>
  </div>
</template>

<script>
import firebase from "firebase/app"


export default {
    name: 'Register',

    data () {
      return {
        email: '',
        password: ''
      }
    },

    methods: {
      register() {
        // console.log("registering.....", this.email, this.password)
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          console.log(user)
          this.$router.replace({name: 'Dashboard'})
        })
        .catch(error => console.log(error))
      }
    }

}

</script>

<style>

</style>