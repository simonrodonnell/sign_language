const facts = [
  "There are about 300 sign languages in use around the world.",
  "British sign language is the fourth most used language in the UK with over 125,000 adults using it.",
  "Sign language uses different grammar structures than spoken language.",
  "The first written record of sign language being used is from the 5th century BC in Ancient Greece.",
  "The first ever deaf school was started in Paris in 1760.",
  "Deaf and blind people can communicate with each other by using tactile signing, which is different from sign language."
]

export default {
  getrandomFact () { return facts[Math.floor(Math.random() * facts.length)]
  }
}
