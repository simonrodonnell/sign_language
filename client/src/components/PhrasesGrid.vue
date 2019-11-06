<template lang="html">
  <div id="phrases-grid-wrapper">
    <h2>Phrases in Sign Language</h2>
    <h3>Select an option or use the search box below</h3>
    <div>
      <select v-model="displayPhrase">
        <option value="" default selected>Select a phrase</option>
        <option v-for="phrase in phrases" :value="phrase">{{phrase.phrase}}</option>
      </select>
    </div>
    <br>
    <p id="invisible">You found me :)</p>

    <div id="display-video">
      <video v-if="displayPhrase" :src="this.displayPhrase.videoUrl" controls autoplay loop></video>
      <h2>{{this.displayPhrase.phrase}}</h2>
    </div>
    <br>
    <label for="search-bar">Search for phrase: </label>
    <input class="textInput" id="search-bar" v-on:keyup="searchForPhrase" type="text" v-model="search">


  </div>
</template>

<script>
export default {
  name: "phrases-grid",
  props: ["phrases", "phrasesCount"],
  data () {
    return {
      displayPhrase: "",
      search: "",
      columnLength: 0
    }
  },
  mounted(){
    this.dividePhraseCount()
  },
  methods: {
    onClick(phrase){
      console.log("The phrase:", phrase)
      this.search = "";
      this.displayPhrase = phrase
    },
    searchForPhrase(){
      let foundPhrase = this.phrases.find((phrase) => {
        return phrase.phrase.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      })
      this.displayPhrase = foundPhrase
    },
    dividePhraseCount() {
      this.columnLength = this.phrasesCount / 2
    }
  }
}
</script>

<style lang="css" scoped>
#phrases-grid-wrapper {
  align-content: center;
}

#search-bar {
  justify-content: center;
}

#phrases-wrapper-left {

  float: left;
  width: 48%;
  margin: 1%;

}

#phrases-wrapper-right {

  float: right;
  width: 48%;
  margin: 1%;
}

#display-video {
  /* float: right; */
}

#invisible {
  color: #2c3e50;
}
.textInput{
  border-radius: 10px;
  color: black;
  margin-left: 10px;
  padding-left: 5px;
}
</style>
