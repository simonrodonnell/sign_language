<template>
  <div id="app">
    <p id="intro-text">THE A TEAM'S SIGN LANGUAGE LEARNING RESOURCE</p>
    <div id="components-wrapper">
      <nav>
        <ul>
          <li :class="(selectedComponent === 'home') ? 'active' : 'passive' " @click="selectComponent('home')" >Home</li>
          <li :class="(selectedComponent === 'letters') ? 'active' : 'passive' " @click="selectComponent('letters')">Alphabet</li>
          <li :class="(selectedComponent === 'phrases') ? 'active' : 'passive' " @click="selectComponent('phrases')">Phrases</li>
          <li :class="(selectedComponent === 'quiz') ? 'active' : 'passive' " @click="selectComponent('quiz')">Quiz</li>
        </ul>
      </nav>
      <homepage v-if="selectedComponent === 'home' " />
      <letters-grid v-if="selectedComponent === 'letters' " :letters="letters"/>
      <phrases-grid v-if="selectedComponent === 'phrases' "  :phrases="phrases" :phrasesCount="phrasesCount" />
      <quiz v-if="selectedComponent === 'quiz' "  :phrases="phrases" :letters="letters" />
    </div>

    <p id="random-fact">{{this.randomFact}}</p>
  </div>
</template>

<script>
import SignLanguageService from './services/sign_language_service';
import PhrasesGrid from './components/PhrasesGrid.vue';
import LettersGrid from "./components/LettersGrid";
import Homepage from "./components/Homepage.vue";
import Quiz from "./components/Quiz.vue";
import RandomFacts from "./assets/RandomFacts.js";

export default {
  name: 'app',
  data () {
    return {
      letters: [],
      phrases: [],
      phrasesCount: 0,
      selectedComponent: "home",
      textToSignLanguage: "",
      imageURL: "",
      randomFact: ""
    }
  },
  mounted(){
    this.fetchData();
    this.randomFact = RandomFacts.getrandomFact();
    setInterval(() => {
      this.randomFact = RandomFacts.getrandomFact()
    }, 10000);
    setTimeout(() => {
      this.countPhrases()
    }, 1000)
  },
  methods: {
    fetchData(){
      SignLanguageService.getLetters()
      .then(letters => this.letters = letters);
      SignLanguageService.getPhrases()
      .then(phrases => this.phrases = phrases);
    },
    selectComponent(component) {
      this.selectedComponent = component
    },
    convertText() {
      let letterArray = this.textToSignLanguage.split("");
      console.log(letterArray);
    },
    countPhrases() {
      let countFunctionThing = this.phrases.length
      return this.phrasesCount = countFunctionThing
    }
  },
  components: {
    "letters-grid": LettersGrid,
    "phrases-grid": PhrasesGrid,
    "homepage": Homepage,
    "quiz": Quiz
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  color: #E6EAF5;
}

html {
  background-color: #3d468b;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6774a3;
  margin-top: 5px;
}

#components-wrapper {
  margin: auto;
  min-height: 325px;
  width: 60%;
  background-color: #2c3e50;
  border: 2px solid #000000;
  border-radius: 5px;
  padding-bottom: 10px;
}

#intro-text {
  padding: 10px
}

#random-fact {
  position: fixed;
  bottom: 0;
  margin: auto;
  width: 100%;
  padding: 10px;
}

nav {
  margin: auto;
  /* width: 60%; */
}

nav li {
  display: inline-block;
  /* margin: 0 10px; */
}

ul {
  list-style: none;
  background-color: #2c3e50;
}

nav li:hover {
  padding: 0 50px;
  background-color: #4775ff;
  cursor: pointer;
}

.active {
  padding: 0 50px;
  background-color: #2c3e50;
}

.passive {
  padding: 0 50px;
  background-color: #65676e;
}

#intro-text {
  font: HelveticaNeue;
  font-weight: bold;
}
</style>
