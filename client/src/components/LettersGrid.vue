<template lang="html">
  <div class="">
    <h2>Letters in Sign Language</h2>

    <input v-on:keyup="displayLetterSign(textToSignLanguage)" type="text" v-model="textToSignLanguage">
    <button @click="animateText">Show in Sign Language</button>

    <div v-if="imageURL" id="imageDisplay">
      <img :src="imageURL" alt="">
    </div>

  </div>
</template>

<script>
export default {
  name: "letters-grid",
  props: ["letters"],
  data(){
    return {
      textToSignLanguage: "",
      textToAnimate: [],
      imageURL: ""
    }
  },
  methods: {
    findLetter(searchLetter) {
      let allLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      if (allLetters.includes(searchLetter)) {
        return this.letters.find((letter) => {
          return letter.letter.toLowerCase() === searchLetter.toLowerCase()
        })
      }
      else
      {
        console.log("computer says no")
      }
    },
    displayLetterSign(textInput) {
      let lastIndex = textInput.length - 1;
      let search = textInput[lastIndex];
      let result = this.findLetter(search);
      if (result) {this.imageURL = result.url};
    },
    animateText() {
      this.textToAnimate = this.textToSignLanguage.split("");
      let arrayLength = this.textToAnimate.length;
      const displayAnimateText = function() {
        let loopCount = 0;
        do {
          console.log("This animated letter:", this.textToAnimate)
          this.textToAnimate.splice(0 , 1);
          loopCount += 1
        } while (loopCount < arrayLength)
      };
      setTimeout(function(){
        displayAnimateText();
      }, 1000);
    },
  }
}
</script>

<style lang="css" scoped>
</style>
