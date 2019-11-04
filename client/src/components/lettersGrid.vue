<template lang="html">
<div class="">
  <h2>Letters in Sign Language</h2>
  <select class="" name="">
    <option :value="anything" disabled></option>
    <option :value="sign.value" v-for="(sign, index) in letters" :key="index" :sign="sign">{{sign.letter}}</option>
  </select>
</div>
</template>

<script>
export default {
  name: "letters-grid",
  props: ["letters"]
}
</script>

<style lang="css" scoped>
</style>
