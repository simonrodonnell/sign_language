<template lang="html">
  <div id="quiz-container">
        <h2>Sign Language Quiz</h2>
<br>
    <div v-if="!quizStarted">
      <p>You will be shown a series of images or videos that demonstrate some British Sign Language, have a go and see how many you can identify correctly.</p>
      <br>
      <br>
      <label for="">Choose number of questions: </label>
      <select v-model="numOfQuestions">
        <option :value="1">1</option>
        <option :value="2">2</option>
        <option :value="3">3</option>
        <option :value="4">4</option>
        <option :value="5">5</option>
      </select>
      <br>
      <button class="button" @click="startQuiz" type="submit" name="submit">Start Quiz</button>
      <br>
      <br>
      <br>
      <h2>Have Fun!</h2>
    </div>
    <div v-if="quizStarted">
      <h1>Question {{questionIndex + 1}}</h1>
    </div>

    <question v-if="quizStarted" :question="currentQuestion" :answers="currentAnswers" :quizCompleted="quizCompleted"/>

    <div v-if="quizStarted">
      <h2>{{quizScore}}/{{numOfQuestions}}</h2>
    </div>


  </div>
</template>

<script>
import Question from "./Question.vue";
import { eventBus } from '../main';

export default {
  name: "quiz",
  data() {
    return {
      quizQuestions: [],
      quizAnswers: [],
      submittedAnswers: [],
      quizStarted: false,
      quizCompleted: false,
      numOfQuestions: 5,
      quizAnswer: "",
      questionIndex: 0,
      quizScore: 0
    }
  },
  mounted(){
    eventBus.$on("submit-answer", (answerEval) => {
      this.submittedAnswers[this.questionIndex] = answerEval
      this.quizScore = this.calculateAnswers()
      this.checkQuizComplete()
    });
    eventBus.$on("next-question", () => {
      let questionIndexAdjusted = this.questionIndex - 1
      if (questionIndexAdjusted < this.numOfQuestions) {
        this.questionIndex += 1;
      }
      this.checkQuizComplete()
    });
    eventBus.$on("quiz-completed", () => {
      this.resetData();
    });
  },
  computed: {
    currentQuestion: function() {
      if (this.quizQuestions.length > 0) {
        return this.quizQuestions[this.questionIndex]
      } else {
        return {};
      }
    },
    currentAnswers: function() {
      if (this.quizQuestions.length > 0) {
        return this.quizAnswers[this.questionIndex]
      } else {
        return {};
      }
    }
  },
  props: ["letters","phrases"],
  components: {
    "question": Question
  },
  methods: {
    startQuiz(){
      this.quizQuestions = []
      this.quizStarted = true;
      let questionNum = 0;
      let answerNum = 0
      // set up submittedAnswers
      while (this.numOfQuestions > answerNum) {
        this.submittedAnswers.push("unanswered");
        answerNum += 1;
      }
      while (this.numOfQuestions > questionNum) {
        // randomly select question/answer
        let question = this.randomQuestion()
        //determine whether result is letter or phrase
        let questionIsLetter = null
        let catValue = null
        // category is letter
        if (question.letter) {
          questionIsLetter = true;
          catValue = 1;
          // category is phrase
        } else {
          questionIsLetter = false;
          catValue = 0;
        };
        // array for 3 wrong answers
        let answerOptions = []
        // add the question to the question array
        if (!this.quizQuestions.includes(question)) {
          this.quizQuestions.push(question)
          // check wrong answer against question and add to array
          let wrongAnswerCount = 1;
          while (wrongAnswerCount < 4) {
            let wrongAnswer = this.randomQuestion(catValue)
            if (wrongAnswer != question) {
              if (wrongAnswer.phrase) {
                if (!answerOptions.includes(wrongAnswer.phrase))
                {
                  answerOptions.push(wrongAnswer.phrase)
                  wrongAnswerCount += 1;
                }
              } else {
                if (!answerOptions.includes(wrongAnswer.phrase))
                {
                  answerOptions.push(wrongAnswer.letter)
                  wrongAnswerCount += 1;
                }
              }
            }
          }
          if (question.phrase) {
            answerOptions.push(question.phrase);
          } else {
            answerOptions.push(question.letter);
          }
          this.quizAnswers.push(answerOptions);
          questionNum += 1;
        }
      }
      if (this.questionIndex === this.numOfQuestions){
        this.quizStarted = false
      }
    },
    randomQuestion(category = Math.floor(Math.random() * 2)){
      if (category > 0) {
        // ### SELECT RANDOM LETTER -- ONE ###
        let selectedLetter = this.letters[Math.floor(Math.random() * this.letters.length)];
        return selectedLetter;
      } else {
        // ### SELECT RANDOM PHRASE -- ZERO ###
        let selectedPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return selectedPhrase;
      }
    },
    calculateAnswers(answerOption = "correct"){
      let answersArray = []
      answersArray = this.submittedAnswers.filter((answer) => {
        if (answer === answerOption) {
          return answer;
        };
      })
      return answersArray.length;
    },
    checkQuizComplete(){
      let numOfUnanswered = this.calculateAnswers("unanswered");
      if (numOfUnanswered === 0) {
        this.quizCompleted = true;
      }
    },
    resetData () {
      this.quizQuestions = []
      this.quizAnswers = []
      this.submittedAnswers = []
      this.quizStarted = false
      this.quizCompleted = false
      this.numOfQuestions = 5
      this.quizAnswer = ""
      this.questionIndex = 0
      this.quizScore = 0
    }
  }
}
</script>

<style lang="css" scoped>

  .button{
    border-radius: 10px;
    color: black;
    padding: 4px;
  }

</style>
