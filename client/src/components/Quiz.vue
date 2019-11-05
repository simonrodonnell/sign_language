<template lang="html">
  <div id="quiz-container">

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
      <div :class="submittedAnswers[index]">

        <div v-if="question.letter" >
          <img :src="question.url" alt="">
          <p>What letter is this?</p>
          <div v-for="answer in quizAnswers[index]">
            <input type="radio" id="quizAnswer" :name="answer" :value="answer" v-model="quizAnswer">
            <label for="quizAnswer">{{answer}}</label>
          </div>
        </div>

        <div v-if="question.phrase" >
          <video :src="question.videoUrl" controls autoplay></video>
          <p>What is this phrase?</p>
          <div v-for="answer in quizAnswers[index]">
            <input type="radio" id="quizAnswer" :name="answer" :value="answer" v-model="quizAnswer">
            <label for="quizAnswer">{{answer}}</label>
          </div>
        </div>

        <button @click="checkAnswer(question, index)" type="submit">Submit Answer</button>

      </div>

    </div>


    <div v-if="quizStarted">
      <h2>{{score}}/{{numOfQuestions}}</h2>
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
        if (question.letter) {
          // category is letter
          questionIsLetter = true;
          catValue = 1;
        } else {
          // category is phrase
          questionIsLetter = false;
          catValue = 0;
        };
        console.log("catValue:", catValue)
        // array for 3 wrong answers
        let answerOptions = []
        // add the question to the question array
        if (!this.quizQuestions.includes(question)) {
          this.quizQuestions.push(question)
          // check wrong answer against randomQuestion and add to array
          let wrongAnswerCount = 1;
          while (wrongAnswerCount < 4) {
            let wrongAnswer = this.randomQuestion(catValue)
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
    checkAnswer(question, index){
      console.log("this is the question:", question)
      if (question.phrase) {
        if (this.quizAnswer === question.phrase) {
          this.submittedAnswers[index] = "correct"
          console.log("this is the answer:", this.quizAnswer)
          this.score += 1
        } else {
          this.submittedAnswers[index] = "wrong"
        }


      } else {
        if (this.quizAnswer === question.letter) {
          console.log("this is the answer:", this.quizAnswer)
          this.submittedAnswers[index] = "correct"
          this.score += 1
        } else {
          this.submittedAnswers[index] = "wrong"
        }
      }
    },
    randomQuestion(category = Math.floor(Math.random() * 2)){
      // ### RANDOM NUMBER TO CHOOSE CATEGORY ###
      // let chooseCategory = Math.floor(Math.random() * 2);

      if (category > 0) {
        // ### SELECT RANDOM LETTER -- ONE ###

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
.correct {
  border: 5px solid green;
}
.wrong {
  border: 5px solid red;
}
</style>
