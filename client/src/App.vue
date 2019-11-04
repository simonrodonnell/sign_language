<template>
  <div id="app">
    <img id="bsl-logo" src="../public/bsl_logo.png" alt="bsl_logo">
    <nav>
      <ul>
        <li <a href="home">Home</a></li>
        <li <a href="phrases">Phrases</a></li>
        <li <a href="alphabet">Alphabet</a></li>
      </ul>
    </nav>
    <p>Hello this is sign language website name blah blah blah</p>
    <input v-on:keyup="searchForLetter" type="text" v-model="textToSignLanguage">
    <button @click="convertText">Convert String to Sign Language</button>
    <div v-if="imageURL" id="imageDisplay">
      <img :src="imageURL" alt="">
    </div>
    <letters-grid :letters="letters"/>
    <!-- <div v-for="letter in letters">
    <img :src="letter.url" :alt="letter.letter">
  </div> -->
  <!-- <div v-for="phrase in phrases">
  <p>{{phrase.phrase}}</p>
  <video :src="phrase.videoUrl" controls></video>
  <br>
</div> -->

  <phrases-grid :phrases="phrases" />
  <p>{{this.randomFact}}</p>
</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SignLanguageService from './services/sign_language_service';
import PhrasesGrid from './components/PhrasesGrid.vue';
import LettersGrid from "./components/LettersGrid";

export default {
  name: 'app',
  data () {
    return {
      letters: [],
      phrases: [],
      textToSignLanguage: "",
      imageURL: "",
      randomFact: "",
      facts: ["There are about 300 sign languages in use around the world.",
      "British sign language is the fourth most used language in the UK with over 125,000 adults using it.",
      "Sign language uses different grammar structures than spoken language.",
      "The first written record of sign language being used is from the 5th century BC in Ancient Greece.",
      "The first ever deaf school was started in Paris in 1760.",
      "Deaf and blind people can communicate with each other by using tactile signing, which is different from sign language."]
    }
  },
  mounted(){
    this.fetchData();
    setInterval(() => {
      this.randomFact = this.facts[Math.floor(Math.random()*this.facts.length)]
    }, 10000);
  },
  methods: {
    fetchData(){
      SignLanguageService.getLetters()
      .then(letters => this.letters = letters);
      SignLanguageService.getPhrases()
      .then(phrases => this.phrases = phrases);
    },
    searchForLetter() {
      // let array = this.textToSignLanguage.split("");
      let lastIndex = this.textToSignLanguage.length - 1
      let search = this.textToSignLanguage[lastIndex]
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
      console.log(letterArray);
      // return letterArray.every((Arrayletter) => {
      //
      // })
    },
    // randomFactGen(){
    //   this.randomFact = this.facts[Math.floor(Math.random()*facts.length)]
    // },
  },
  components: {
    "letters-grid": LettersGrid,
      "phrases-grid": PhrasesGrid
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

#bsl-logo {
  width: 150px;
}
</style>
