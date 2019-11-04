<template lang="html">
<div class="">
  <h2>Letters in Sign Language</h2>
  <input v-on:keyup="searchForLetter" type="text" v-model="textToSignLanguage">
  <!-- <button @click="convertText">Convert String to Sign Language</button> -->
  <div v-if="imageURL" id="imageDisplay">
    <img :src="imageURL" alt="">
  </div>
  <!-- <select class="" name="">
    <option :value="anything" disabled></option>
    <option :value="sign.value" v-for="(sign, index) in letters" :key="index" :sign="sign">{{sign.letter}}</option>
  </select> -->

</div>
</template>

<script>
export default {
  name: "letters-grid",
  props: ["letters"],
  data(){
    return {
      textToSignLanguage: "",
      imageURL: ""
    }
  },
  methods: {
    searchForLetter() {
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
  }
}
}
</script>

<style lang="css" scoped>
</style>
