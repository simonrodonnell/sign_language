<template lang="html">
  <div id="quiz-container">

    <div v-if="quizStarted">
      <h2>{{score}}/{{numOfQuestions}}</h2>
    </div>

    <div v-if="!quizStarted">

      <select v-model="numOfQuestions">
        <option :value="1">1</option>
        <option :value="2">2</option>
        <option :value="3">3</option>
        <option :value="4">4</option>
        <option :value="5">5</option>
      </select>
      <button @click="startQuiz" type="submit" name="submit">Start Quiz</button>
    </div>

    <div id="quizQuestions" v-for="(question, index) in quizQuestions">

      <div v-if="question.letter" >
        <img :src="question.url" alt="">
        <!-- <p>Answer: {{ question.letter }}</p> -->
        <div v-for="answer in quizAnswers[index]">
          <input type="radio" id="quizAnswer" :name="answer" :value="answer" v-model="quizAnswer">
          <label for="quizAnswer">{{answer}}</label>
        </div>
      </div>

      <div v-if="question.phrase" >
        <video :src="question.videoUrl" controls autoplay></video>
        <!-- <p>Answer: {{ question.phrase }}</p> -->
        <div v-for="answer in quizAnswers[index]">
          <input type="radio" id="quizAnswer" :name="answer" :value="answer" v-model="quizAnswer">
          <label for="quizAnswer">{{answer}}</label>
        </div>
      </div>

      <button @click="checkAnswer(question)" type="submit">Submit Answer</button>

    </div>
  </div>
</template>

<script>
export default {
  name: "quiz",
  data() {
    return {
      quizQuestions: [],
      quizAnswers: [],
      submittedAnswers: [],
      quizStarted: false,
      numOfQuestions: 2,
      quizAnswer: "",
      score: 0
    }
  },
  props: ["letters","phrases"],
  methods: {
    startQuiz(){
      this.quizQuestions = []
      this.quizStarted = true;
      let questionNum = 0;
      while (this.numOfQuestions > questionNum) {
        // set up the answer
        let question = this.randomQuestion()
        // array for 3 wrong answers
        let answerOptions = []
        // add the question to the question array
        if (!this.quizQuestions.includes(question)) {
          this.quizQuestions.push(question)
          // check wrong answer against randomQuestion and add to array
          let wrongAnswerCount = 1;
          while (wrongAnswerCount < 4) {
            let wrongAnswer = this.randomQuestion()
            if (wrongAnswer != question) {
              if (wrongAnswer.phrase) {
                answerOptions.push(wrongAnswer.phrase)
              } else {
                answerOptions.push(wrongAnswer.letter)
              }
            }
            wrongAnswerCount += 1
            console.log("Question Options:", answerOptions)

          }
          if (question.phrase) {
            answerOptions.push(question.phrase)
          } else {
            answerOptions.push(question.letter)
          }

          this.quizAnswers.push(answerOptions)
          questionNum += 1



        }
      }
      // this.quizStarted = false
    },
    checkAnswer(question){
      console.log("this is the question:", question)
      if (question.phrase) {
        if (this.quizAnswer === question.phrase) {

          console.log("this is the answer:", this.quizAnswer)
          this.score += 1
        }
      } else {
        if (this.quizAnswer === question.letter) {
          console.log("this is the answer:", this.quizAnswer)
          this.score += 1
        }
      }
    },
    randomQuestion(category = Math.floor(Math.random() * 2)){
      // ### RANDOM NUMBER TO CHOOSE CATEGORY ###
      // let chooseCategory = Math.floor(Math.random() * 2);

      if (category > 0) {
        // ### SELECT RANDOM LETTER -- NOT ZERO ###

        let selectedLetter = this.letters[Math.floor(Math.random() * this.letters.length)];
        return selectedLetter;

      } else {
        // ### SELECT RANDOM PHRASE -- ZERO ###

        let selectedPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return selectedPhrase;
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
