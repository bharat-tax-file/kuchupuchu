// This file reads the text configuration and provides it to the app

export const textConfig = {
  greeting: {
    name: "Huii, Madam ji! 😊",
    message: "A Gift For You from Nishant 💖",
  },

  letter: {
    title: "Poem for You",
    subtitle: "Click to see your special poem 💌",
    recipient: "Poem for My KuchuPuchu",
    paragraphs: [
      "She teases, then turns, like a spark on the breeze,\nPulling me closer with effortless ease.\nHer eyes catch mine—then slip away fast,\nA storm in her gaze that refuses to pass.",
      "She dances on borders where longing ignites,\nOne step in the sun, one lost in the night.\nHer silence speaks louder than words ever could,\nA push and a pull I’ve never understood.",
      "If only she'd stay where her glances remain,\nNot vanish like whispers dissolved in the rain.\nFor in that space between near and afar,\nMy heart learns the shape of who we truly are."
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
    envelopePreview: "💌 A Poem for you..."
  },


};
