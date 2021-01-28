<template>
  <div class="dash">
      <div class="container">
          <div class="row my-4" style="display:flex">
              
              
              <div class="col-5-sm my-5 text-right ml-auto mr-5">
                  <h1>Welcome Martins</h1>
                  <button @click="getQuiz" class="primary btn-lg">Take a Quiz</button>
                  
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
import axios from 'axios'
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
        getQuiz() {
            axios("https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple")
            .then(
                response => {
                        console.log(response.data)
                        this.quiz = response.data
                        this.$store.commit('saveQuiz', response.data)

                        localStorage.questions.results = response.data
                        
                        
                    }
                )
            .then(() => 
                this.$router.push({ name: 'Home' })
            )
            .catch(error => console.log(error))
        },

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