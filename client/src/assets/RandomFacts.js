const facts = [
  "There are about 300 sign languages in use around the world.",

  "British sign language is the fourth most used language in the UK with over 125,000 adults using it.",

  "Sign language uses different grammar structures than spoken language.",

  "The first written record of sign language being used is from the 5th century BC in Ancient Greece.",

  "The first ever deaf school was started in Paris in 1760.",

  "Deaf and blind people can communicate with each other by using tactile signing, which is different from sign language.",

  "There is evidence that sign language may have been used in prehistoric times.",

"A wedding ceremony in 1576 was conducted partially in sign language.",

"American Sign Language has more similarities to French Sign Language than British.",

"British Sign Language was recognised as its own language on 18th March 2003.",

"There are 12,556 people using BSL in Scotland, and 7,200 of these are Deaf.",

"If you are talking to a Deaf person who is lipreading, do not shout or over-enunciate, as this distorts the shape of your lips and makes it hard to read.",

"Many Deaf people prefer the ‘D’ to be capitalised, as it shows the pride that the Deaf community have in their language and culture.",

"Makaton is a form of sign language used by people are not Deaf, but who may struggle to communicate due to cognitive impairments, Autism, Down syndrome, etc.",

"Deafness is the third most common disability in the world.",

"Most Deaf people don’t view their Deafness as a disability or a problem that should be fixed.",

"Only 1 in 10 hearing parents learn sign language to communicate with their Deaf children.",

"Gallaudet University is a Deaf college in Washington DC, USA.",

"Some Deaf people will create a special sign for their name, like a nickname.",

"Some Deaf people will use the term ‘Deaf Gain’, rather than ‘hearing loss’.",

"Some Deaf people oppose the use of cochlear implants as they see it as a threat to the existence of Deaf culture.",

"Audism is the name for discrimination against Deaf people.",

"50% of Deaf people in the UK feel they are discriminated against by services such as banks due to inaccessibility.",
]

export default {
  getrandomFact () { return facts[Math.floor(Math.random() * facts.length)]
  }
}
