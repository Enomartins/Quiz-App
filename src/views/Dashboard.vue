<template>
  <div class="dash">
      <div class="container">
          <div class="row my-4" style="display:flex">
              
              
              <div class="col-5-sm my-5 text-right ml-auto mr-5">
                  <h1>Welcome Martins</h1>
                  <button class="primary btn-lg"><router-link to="/quiz">Take a Quiz</router-link></button>
                  
                  <button @click.prevent="logout" class="primary btn-lg">LOGOUT</button>
              </div>

              
          </div>
          <div class="row px-4">
            <div class="col-4-md mx-5">
              <h2>Quiz Subjects</h2>
              <ul>
                  <li v-for="i in subjects" :key="i.id">{{i.title}}</li>
              </ul>
            </div>
            <div class="col-8-md mx-auto">
                <h2>High Scores</h2>
                <ul>
                    <li v-for="i in subjects" :key="i.id">{{i.title}}</li>
                </ul>
                <hr>

                <br>
                <h2>Performance History</h2>
                <ul>
                    <li v-for="i in subjects" :key="i.id">{{i.title}}</li>
                </ul>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import 'firebase/auth'


export default {
    name: 'dashboard',
    data: () => {
        return{
            subjects: [
                {id:1, title: 'Trivia'},
                {id:2, title: 'Geography'},
                {id:3, title: 'Politics'},
                {id:4, title: 'Music'},
            ],
            quiz: [],
            loggedIn: true,
            currentUser: true
        }
    },

    methods: {
        
        logout(e) {
            e.preventDefault();
            firebase.auth().signOut().then(()=> {
                this.$router.push('/login');
                console.log('out')
            })
        }
    },
    mounted() {
        // this.getQuiz
    }

}
</script>

<style>

</style>