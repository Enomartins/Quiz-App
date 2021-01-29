<template>
<div class="container">

    <div class="time">
        <!-- <h2>{{minutes + "m " + seconds + "s"}}</h2> -->

    </div>

        <div class="question">
        <b-card bg-variant="dark" text-variant="white" title="Card Title" style="text-align: center">
            <b-card-text class="bold">
                {{theTest[index].question}}
            </b-card-text>

            <div class="option">

                <b-form-group label="Options" style="display:flex; margin: 0 auto; text-align: left">
                <b-form-radio-group
                    v-model="submit[index]"
                    :options="theTest[index].options"
                    name="radios-stacked"
                    stacked
                ></b-form-radio-group>
                </b-form-group>

            </div>
            
        </b-card>
    </div>

    <div class="control" style="display:flex; justify-content: center; align-items: center;">
        <b-button @click="back" href="#" variant="primary">BACK</b-button>
        <b-button @click="submiting" href="#" variant="primary">SUBMIT</b-button>
        <b-button @click="next" href="#" variant="primary">NEXT</b-button>
    </div>
    
    
</div>
  
</template>

<script>
import axios from 'axios'

export default {
    name: 'Quiz',
    data() {
        return {
            index: 0,
            theTest: [],
            correct: [],
            submit: [],
            selected: ''            
        }
    },
    mounted() {
            
        
            axios("https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple")
            .then(
                response => {
                        console.log(response.data.results)
                        this.quiz = response.data.results
                        this.sort()
                        this.$store.commit('saveQuiz', response.data)

                        localStorage.questions.results = response.data
                    }
                )
            .catch(error => console.log(error))

            this.timerFunc()
            
        },

        
    
    methods: {
        submiting(e){
            let score=0;
            e.preventDefault()
            for (let indx = 0; indx < this.correct.length; indx++) {
                if(this.correct[indx] ==this.submit[indx]) {
                    score = score + 1;
                }
                
            }
            console.log(score)
        },

        next(e){
            e.preventDefault()
            if(this.index == 9) this.index = 0
            else this.index = this.index + 1
        },

        back(e){
            e.preventDefault()
            if(this.index == 0) this.index=9
            else this.index = this.index - 1
        },
        
        sort() {
            this.quiz.map((item) => {
               // console.log(item)
                this.correct.push(item.correct_answer)

                // random number
                const position = Math.floor(Math.random()*3)
                
                console.log(position)
                let option = item.incorrect_answers
                option.splice(position, 0, item.correct_answer);
                this.theTest.push({
                    question: item.question,
                    options: option
                }) 
            })
        }
    },
    // watch: {
    //     selected(val) {
    //         this.submit[this.index] = val
    //     }
    // }

}
</script>

<style scoped>
    button {
        margin: 2rem 0;
    }
</style>