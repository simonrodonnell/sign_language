const phrases_baseURL = "http://localhost:3000/api/phrases/"
const letters_baseURL = "http://localhost:3000/api/letters/"

export default {
  getPhrases(){
    return fetch(phrases_baseURL)
    .then(res => res.json())
  },
  getAlphabet(){
    return fetch(letters_baseURL)
    .then(res => res.json())
  },

  }
