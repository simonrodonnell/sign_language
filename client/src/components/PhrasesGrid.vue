<template lang="html">
  <div id="phrases-grid-wrapper">
      <h2>Phrases in Sign Language</h2>
      <h3>Select an option or use the search box below</h3>
    <br>
    <input id="search-bar" v-on:keyup="searchForPhrase" type="text" v-model="search">
    <br>
    <br>

    <div id="phrases-wrapper-left" v-for="(phrase, index) in phrases" v-if="index <= columnLength">
      <p id="phrase" @click="onClick(phrase)">{{phrase.phrase}}</p>
    </div>

    <div id="phrases-wrapper-right" v-for="(phrase, index) in phrases" v-if="index > columnLength">
      <p id="phrase" @click="onClick(phrase)">{{phrase.phrase}}</p>
    </div>

    <div id="display-video">
      <h2>{{this.displayPhrase.phrase}}</h2>
      <video v-if="displayPhrase" :src="this.displayPhrase.videoUrl" controls autoplay loop></video>
    </div>
    <br>
    <p id="invible">You found me :)</p>

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
  text-align: center;
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

#invible {
  color: #e1ecff;
}
</style>
