<template>
  <div class="register">
      <div class="container w-100">
        <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
          {{message}}
        </b-alert>
    <div>
    <b-form @reset="onReset" @submit="onSubmit">
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

      <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          placeholder="Enter Password"
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

      <b-button @click.prevent="onSubmit" type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    
  </div>

    </div>
  </div>
</template>

<script>
import firebase from "firebase/app"
import 'firebase/auth'


export default {
    name: 'Register',

    data () {
      return {
        show: true,
        email: '',
        form: {
          password: '',
          email: ''
        }, 
        showDismissibleAlert: false,
        message: ''
      }
    },

    methods: {
      onSubmit(e) {

        e.preventDefault();
        

        firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then((user) => {
          console.log(user)
          
          this.showDismissibleAlert = true;
          if (user.user.email) {
          this.message = "User created"
          }
          else this.message = "Email or Password Error"
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage, "this is an error")
          this.showDismissibleAlert = true;
          this.message = "Email or Password Error"
          // ..
        });
        console.log("registering.....", this.email, this.password)
        
       
      },
      onReset() {
        console.log('Reset reister')
      }
    }

}

</script>

<style>

</style>