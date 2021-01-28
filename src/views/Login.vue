<template>
  <div class="login">
      <div class="container w-100">
      
      <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      

      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

    </b-form>
    
  </div>
  
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app"


export default {
    name: 'Login',

    data () {
      return {
        show: true,
        email: '',
        form: {
          name: '',
          email: '',
          checked: []
        }
      }
    },

    methods: {
      onReset() {
        console.log('reset')
      },

      onSubmit() {
        console.log("submitted")
        firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
        .then((user) => {
          console.log(user)
          this.showDismissibleAlert = true;
          // Signed in 
          // ...
          console.log("Signed in")
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage)
          // ..
        });
      }
    }

}
</script>

<style>

</style>