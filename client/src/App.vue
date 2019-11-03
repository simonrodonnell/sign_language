<template>
  <div id="app">
    <input v-on:keyup="searchForLetter" type="text" v-model="textToSignLanguage">
    <button @click="convertText">Convert String to Sign Language</button>
    <div v-if="imageURL" id="imageDisplay">
      <img :src="imageURL" alt="">
    </div>
    <!-- <div v-for="letter in letters">
    <img :src="letter.url" :alt="letter.letter">
  </div> -->
  <div v-for="phrase in phrases">
    <p>{{phrase.phrase}}</p>
    <video :src="phrase.videoUrl" controls></video>
    <br>
  </div>
</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SignLanguageService from './services/sign_language_service';

export default {
  name: 'app',
  data () {
    return {
      letters: [],
      phrases: [],
      textToSignLanguage: "",
      imageURL: ""
    }
  },
  mounted(){
    this.fetchData();
  },
  methods: {
    fetchData(){
      SignLanguageService.getLetters()
      .then(letters => this.letters = letters);
      SignLanguageService.getPhrases()
      .then(phrases => this.phrases = phrases);
    },
    searchForLetter() {
      let array = this.textToSignLanguage.split("");
      let index = array.length - 1
      let search = array[index]
      if (search === " ") {
        return
      }
      else
      {
        let result = this.letters.find((letter) => {
          return letter.letter.toLowerCase() === search.toLowerCase()
        })
        this.imageURL = result.url
      }
    },
    convertText() {
      let letterArray = this.textToSignLanguage.split("");
      // console.log(letterArray);
      return letterArray.every((Arrayletter) => {

      })
    }
  },
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
