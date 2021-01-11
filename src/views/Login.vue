<template>
  <div class="login">
      <div class="container w-100">
      
      <form class="float-right col-md-5 my-5">
        <h2 class="mb-3 text-center">Login</h2>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      
      <div class="text-center my-3">
          <button type="submit" class="btn btn-primary px-5">Login</button>
      </div>
      
      <router-link to="/register">Do not have an account? Register Here</router-link>
    </form>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Login'

}
</script>

<style>

</style>