// This file reads the text configuration and provides it to the app

export const textConfig = {
  greeting: {
    name: "Huii, Madam ji! 😊",
    message: "A Gift For You"
  },

  letter: {
    title: "Read My Letter",
    subtitle: "Click to see your special letter",
    recipient: "To My KuchuPuchu",
    paragraphs: [
      "I want to confess something that’s been in my heart for a long time: I truly love you. Every moment with you feels special, and I can’t imagine my life without you.",
      "You mean so much to me, and I hope you know how deeply I care for you. Thank you for being you, and for making my world brighter just by being in it."
    ],
    signature: "Yours sincerely,\nNishant"
  },

  gallery: {
    title: "Some Special Moments",
    subtitle: "Swipe to see more ✨",
    photos: [
      { src: "./images/pic1.gif", caption: "Thanks for making me smile  💕" },
      { src: "./images/pic2.gif", caption: "I’m so lucky to have you by my side 😊" },
      { src: "./images/pic3.jpg", caption: "the most amazing person in my life ✨" }
    ],
    scrollIndicators: 3, // number of dots
    dividerIcon: "📷"
  },

  game: {
    title: "Play a Game!",
    subtitle: "Catch some hearts to unlock a special message for you 💖",
    completionMessage: "You've completed the game! ✨ But you can play again if you want!",
    winMessage: "You caught my heart! Just like how you've captured my real heart forever..."
  },

  ui: {
    envelopeHint: "Click to open",
    envelopePreview: "💌 A letter for you..."
  },


};
