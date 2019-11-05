use sign_language;
db.dropDatabase();

db.letters.insertMany([
 {
   letter: "a",
   url: "https://media.spreadthesign.com/image/500/alphabet-letter-508-1.jpg"
 },
 {
   letter: "b",
   url: "https://media.spreadthesign.com/image/500/alphabet-letter-509-1.jpg"
 },
 {
   letter: "c",
   url: "https://media.spreadthesign.com/image/500/alphabet-letter-510-1.jpg"
 },
 {
   letter: "d",
   url: "https://media.spreadthesign.com/image/500/alphabet-letter-511-1.jpg"
 },
 {
   letter: "e",
   url: "https://media.spreadthesign.com/image/500/alphabet-letter-512-1.jpg"
 },
 {
   letter: "f",
   url: "https://media.spreadthesign.com/image/500/alphabet-letter-513-1.jpg"
 },
 {
   letter: "g",
   url: "https://media.spreadthesign.com/image/500/alphabet-letter-514-1.jpg"
 },
 {
   letter: "h",
   url: "https://media.spreadthesign.com/image/500/alphabet-letter-515-1.jpg"
 },
 {
   letter: "i",
   url: "https://media.spreadthesign.com/image/500/alphabet-letter-516-1.jpg"
 },
 {
   letter: "j",
   url: "https://media.spreadthesign.com/image/500/alphabet-letter-517-1.jpg"
 },
 {
   letter: "k",
   url: "https://media.spreadthesign.com/image/500/alphabet-letter-518-1.jpg"
 },
 {
   letter: "l",
   url: "https://media.spreadthesign.com/image/500/alphabet-letter-519-1.jpg"
 },
 {
   letter: "m",
   url: "https://media.spreadthesign.com/image/500/alphabet-letter-520-1.jpg"
 },
 {
   letter: "n",
   url: "https://media.spreadthesign.com/image/500/alphabet-letter-521-1.jpg"
 },
 {
   letter: "o",
   url: "https://media.spreadthesign.com/image/500/alphabet-letter-522-1.jpg"
 },
 {
   letter: "p",
   url: "https://media.spreadthesign.com/image/500/alphabet-letter-523-1.jpg"
 },
 {
   letter: "q",
   url: "https://media.spreadthesign.com/image/500/alphabet-letter-524-1.jpg"
 },
 {
   letter: "r",
   url: "https://media.spreadthesign.com/image/500/alphabet-letter-525-1.jpg"
 },
 {
   letter: "s",
   url: "https://media.spreadthesign.com/image/500/alphabet-letter-526-1.jpg"
 },
 {
   letter: "t",
   url: "https://media.spreadthesign.com/image/500/alphabet-letter-527-1.jpg"
 },
 {
   letter: "u",
   url: "https://media.spreadthesign.com/image/500/alphabet-letter-528-1.jpg"
 },
 {
   letter: "v",
   url: "https://media.spreadthesign.com/image/500/alphabet-letter-529-1.jpg"
 },
 {
   letter: "w",
   url: "https://media.spreadthesign.com/image/500/alphabet-letter-530-1.jpg"
 },
 {
   letter: "x",
   url: "https://media.spreadthesign.com/image/500/alphabet-letter-531-1.jpg"
 },
 {
   letter: "y",
   url: "https://media.spreadthesign.com/image/500/alphabet-letter-532-1.jpg"
 },
 {
   letter: "z",
   url: "https://media.spreadthesign.com/image/500/alphabet-letter-533-1.jpg"
 }
]);

db.phrases.insertMany([
  {
    phrase: "Yes",
    videoUrl: "https://media.spreadthesign.com/video/mp4/1/4121.mp4"
  },
  {
    phrase: "No",
    videoUrl: "https://media.spreadthesign.com/video/mp4/1/4133.mp4"
  },
  {
    phrase: "Hello",
    videoUrl: "https://media.spreadthesign.com/video/mp4/1/4021.mp4"
  },
  {
    phrase: "Programmer",
    videoUrl: "https://media.spreadthesign.com/video/mp4/1/21789.mp4"
  },
  {
    phrase: "Bye Bye",
    videoUrl: "https://media.spreadthesign.com/video/mp4/1/133549.mp4"
  },
  {
    phrase: "Happy Birthday",
    videoUrl: "https://media.spreadthesign.com/video/mp4/1/466591.mp4"
  },
  {
    phrase: "How are you?",
    videoUrl: "https://media.spreadthesign.com/video/mp4/1/6149.mp4"
  },
  {
    phrase: "Where is the restroom?",
    videoUrl: "https://media.spreadthesign.com/video/mp4/1/150958.mp4"
  },
  {
    phrase: "How much is it?",
    videoUrl: "https://media.spreadthesign.com/video/mp4/1/33154.mp4"
  },
  {
    phrase: "What would you recommend?",
    videoUrl: "https://media.spreadthesign.com/video/mp4/1/150904.mp4"
  },
  {
    phrase: "Would you write it please?",
    videoUrl: "https://media.spreadthesign.com/video/mp4/1/128558.mp4"
  },
  {
    phrase: "I would like a haircut",
    videoUrl: "https://media.spreadthesign.com/video/mp4/1/295499.mp4"
  },
  {
    phrase: "Have you eaten?",
    videoUrl: "https://media.spreadthesign.com/video/mp4/1/105788.mp4"
  },
  {
    phrase: "Hacker",
    videoUrl: "https://media.signbsl.com/videos/ict/mp4/171_hacker.mp4"
  },
  {
    phrase: "I have lost my glasses",
    videoUrl: "https://media.spreadthesign.com/video/mp4/1/110290.mp4"
  },
  {
    phrase: "Where is the station?",
    videoUrl: "https://media.spreadthesign.com/video/mp4/1/300490.mp4"
  },
  {
    phrase: "What is the temperature?",
    videoUrl: "https://media.spreadthesign.com/video/mp4/1/150881.mp4"
  },
  {
    phrase: "What is your name?",
    videoUrl: "https://media.spreadthesign.com/video/mp4/1/150891.mp4"
  },
  {
    phrase: "What is the date today?",
    videoUrl: "https://media.spreadthesign.com/video/mp4/1/300395.mp4"
  },
  {
    phrase: "What is your phone number?",
    videoUrl: "https://media.spreadthesign.com/video/mp4/1/150892.mp4"
  },
  {
    phrase: "What is the weather like?",
    videoUrl: "https://media.spreadthesign.com/video/mp4/1/300396.mp4"
  },
  {
    phrase: "Have Fun",
    videoUrl: "https://media.spreadthesign.com/video/mp4/1/19280.mp4"
  },
  {
    phrase: "Home for the holidays",
    videoUrl: "https://media.spreadthesign.com/video/mp4/1/110071.mp4"
  },
  {
    phrase: "What time does the bus arrive?",
    videoUrl: "https://media.spreadthesign.com/video/mp4/1/150898.mp4"
  },
  {
    phrase: "Take me to the airport, please",
    videoUrl: "https://media.spreadthesign.com/video/mp4/1/300363.mp4"
  },
  {
    phrase: "Can I offer you anything to drink?",
    videoUrl: "https://media.spreadthesign.com/video/mp4/1/298273.mp4"
  },
  {
    phrase: "Can I play, too?",
    videoUrl: "https://media.spreadthesign.com/video/mp4/1/298276.mp4"
  },
  {
    phrase: "You are welcome",
    videoUrl: "https://media.spreadthesign.com/video/mp4/1/12823.mp4"
  },
  {
    phrase: "I have to go home",
    videoUrl: "https://media.spreadthesign.com/video/mp4/1/119565.mp4"
  },
  {
    phrase: "Do you want a beer?",
    videoUrl: "https://media.spreadthesign.com/video/mp4/1/33224.mp4"
  },

]);
