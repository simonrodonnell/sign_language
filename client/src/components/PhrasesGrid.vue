<template lang="html">
  <div id="phrases-grid-wrapper">

    <input id="search-bar" v-on:keyup="searchForPhrase" type="text" v-model="search">

    <div id="display-video">
      <h2>{{this.displayPhrase.phrase}}</h2>
      <video v-if="displayPhrase" :src="this.displayPhrase.videoUrl" controls autoplay loop></video>
    </div>

    <div id="phrases-wrapper" v-for="phrase in phrases">
      <p id="phrase" @click="onClick(phrase)">{{phrase.phrase}}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "phrases-grid",
  props: ["phrases"],
  data () {
    return {
      displayPhrase: "",
      search: ""
    }
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
}

#phrases-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 25%;
  flex-wrap: wrap;
  height: 65px;
  column-width: 50px;
  overflow: auto;
  columns: 2;
  flex: 0, 50%;
  flex-grow: 0;
}

#display-video {
  float: right;
}
</style>
