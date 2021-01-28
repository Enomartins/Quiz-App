<template>
  <div class="login">
      <div class="container w-100">
        <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
          {{message}}
        </b-alert>
      <div>
    <b-form @submit="onSubmit" @reset="onReset">
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
          v-model="form.password"
          placeholder="Enter Password"
          required
        ></b-form-input>
      </b-form-group>

      

      

      <b-button @click.prevent="onSubmit" type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>

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
          password: ''
        },
        showDismissibleAlert: false,
        message: ''
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
          this.message = "Login successfully"
          this.$router.push('/dashboard')
          
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage, "this is an error")
          this.showDismissibleAlert = true;
          this.message = "Email or Password Error"
          // ..
        });
        console.log("login in.....", this.email, this.password)
        
       
      }
    }

}
</script>

<style>

</style>