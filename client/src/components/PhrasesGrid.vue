<template lang="html">
  <div id="phrases-grid-wrapper">
<br>
    <input id="search-bar" v-on:keyup="searchForPhrase" type="text" v-model="search">
<br>
<br>
    <!-- <div id="display-video">
      <h2>{{this.displayPhrase.phrase}}</h2>
      <video v-if="displayPhrase" :src="this.displayPhrase.videoUrl" controls autoplay loop></video>
    </div> -->
    <div id="phrases-wrapper-left" v-for="(phrase, index) in phrases" v-if="index <= 14">
      <p id="phrase" @click="onClick(phrase)">{{phrase.phrase}}</p>
    </div>

    <div id="phrases-wrapper-right" v-for="(phrase, index) in phrases" v-if="index > 14">
      <p id="phrase" @click="onClick(phrase)">{{phrase.phrase}}</p>
    </div>

    <div id="display-video">
      <h2>{{this.displayPhrase.phrase}}</h2>
      <video v-if="displayPhrase" :src="this.displayPhrase.videoUrl" controls autoplay loop></video>
    </div>
  <br>
  <p id="invible">You found me :)</p>
  <br>




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
