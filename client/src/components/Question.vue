<template lang="html">

  <div>

    <div :class="questionCorrect">
      <video v-if="question.phrase" :src="question.videoUrl" controls autoplay loop></video>
      <img v-if="question.letter" :src="question.url" alt="">
      <h3 v-if="!questionAnswered && question.phrase" >What is this phrase?</h3>
      <h3 v-if="!questionAnswered && question.letter" >What letter is this?</h3>
      <div v-if="!questionAnswered" v-for="answer in answers">
        <input type="radio" id="quizAnswer" :name="answer" :value="answer" v-model="quizAnswer">
        <label  v-if="question.letter" for="quizAnswer"> {{answer.toUpperCase()}}</label>
        <label v-if="question.phrase" for="quizAnswer"> {{answer}}</label>
      </div>
      <h1 v-if="questionAnswered">That is {{questionCorrect}}!</h1>
      <h4 v-if="questionAnswered && question.phrase">The correct answer is "{{question.phrase}}"</h4>
      <h4 v-if="questionAnswered && question.letter">The correct answer is {{question.letter.toUpperCase()}}</h4>
    </div>

    <button v-if="!questionAnswered && !quizCompleted" @click="submitAnswer" type="submit">Submit Answer</button>
    <button v-if="questionAnswered && !quizCompleted" @click="nextQuestion" type="submit">Next Question</button>
    <button v-if="quizCompleted" @click="finishQuiz" type="submit">Restart Quiz</button>

  </div>



</template>

<script>
import { eventBus } from '../main';

export default {
  name: "question",
  props: ["question", "answers", "quizCompleted"],
  data() {
    return {
      quizAnswer: "",
      questionAnswered: false,
      questionCorrect: null
    }
  },
  methods: {
    submitAnswer(){
      if (this.quizAnswer === "") {
        return
      } else {
        if (this.quizAnswer.length > 1) {
          if (this.quizAnswer === this.question.phrase) {
            this.questionCorrect = "correct"
          } else {
            this.questionCorrect = "wrong"
          }
        } else {
          if (this.quizAnswer === this.question.letter) {
            this.questionCorrect = "correct"
          } else {
            this.questionCorrect = "wrong"
          }
        }
      }
      this.questionAnswered = true
      eventBus.$emit("submit-answer", this.questionCorrect);
    },
    nextQuestion(){
      this.questionAnswered = false;
      eventBus.$emit("next-question");
      this.questionCorrect = null;
      this.quizAnswer = "";
    },
    finishQuiz(){
      eventBus.$emit("quiz-completed")
    }
  }
}
</script>

<style lang="css" scoped>
.correct {
  border: 5px solid green;
}
.wrong {
  border: 5px solid red;
}
</style>
