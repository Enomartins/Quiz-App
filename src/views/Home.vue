<template>
  <div class="home">
   
   <div class="text-center my-5">
      <h1>Welcome to the Quiz</h1>
      <h4 class="text-danger">Time left</h4>

      <button class="btn btn-success btn-lg mt-4" type="submit">End/Submit</button>
   

      <div class="qst mx-auto my-5 bg-dark text-light w-50 p-5">
        <h6>Question {{serialNum + 1}}</h6>
        <h5>
          {{quiz[serialNum].question}}
        </h5>
      </div>
      <div class="answ mx-auto w-50">
        <div class="row m-0">
          <span class="my-auto mr-2">A</span>
          <input class="my-auto" type="radio" name="answer" id="answer">
          
          <p class="my-auto ml-3">{{quiz[serialNum].incorrect_answers[0]}}</p>
        </div>

        <div class="row m-0">
          <span class="my-auto  mr-2">B</span>
          <input class="my-auto" type="radio" name="answer" id="answer">
          
          <p class="my-auto  ml-3">{{quiz[serialNum].incorrect_answers[1]}}</p>
        </div>

        <div class="row m-0">
          <span class="my-auto  mr-2">C</span>
          <input class="my-auto" type="radio" name="answer" id="answer">
          
          <p class="my-auto  ml-3">{{quiz[serialNum].correct_answer}}</p>
        </div>

        <div class="row m-0">
          <span class="my-auto  mr-2">D</span>
          <input class="my-auto" type="radio" name="answer" id="answer">
          
          <p class="my-auto  ml-3">{{quiz[serialNum].incorrect_answers[2]}}</p>
        </div>
      </div>

      <div class="move text-center mt-3 w-50 mx-auto">
        <button @click="back" class="btn btn-danger" type="submit">PREVIOUS</button>
        <button @click="next" class="btn btn-success" type="submit">NEXT</button>
      </div>

   </div>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',

  components: {
  },

  data () {
    return {
      // quiz: [],
      serialNum: 0
    };
  },

  methods: {
    next () {
      if (this.serialNum == 9) {
        this.serialNum = 0
      }
      else {
        this.serialNum = this.serialNum + 1
      }
    },
    back () {
      if (this.serialNum == 0) {
        this.serialNum = 9
      }
      else {
        this.serialNum = this.serialNum - 1
      }
    }
  },

  mounted() {
    console.log(this.quiz)
    // this.quiz = this.$store.state.aQuiz
  },
  computed: {
    quiz() {
      return this.$store.state.aQuiz.results || localStorage.list.results
    }
  }
}
</script>

<style lang="css" scoped>

  @media (max-width: 900px) {
    .answ, .qst {
      width: 90%!important ;
      padding-left: 1em !important;
      padding-right: 1em!important;
    }
  }
  
</style>