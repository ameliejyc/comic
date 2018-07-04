const bubbleScreens = {
  ScreenOne: {
    layoutType: 10,
    tileOne: {
      backgroundImageUri: require('../assets/desert-screen2-tile1.jpg'),
      text: "Speech/thought layout 10",
      textFirstBubble: 'This is for you, Night Zookeeper.',
      textSecondBubble: 'This is for you, Night Zookeeper. Hmm does this work? lets see',
      typeFirstBubble: 'thought',
      topFirstBubble: 20,
      rightFirstBubble: 20,
      bubblesLayoutFirstBubble: 'onBottom',
      bubblesAlignmentFirstBubble: 'right',
      typeSecondBubble: 'speech',
      trianglePositionSecondBubble: 'Right',
      bottomSecondBubble: '40%',
      leftSecondBubble: 20
    },
    nextScreen: 'ScreenTwo'
  },
  ScreenTwo: {
    layoutType: 11,
    tileOne: {
      backgroundImageUri: require('../assets/desert-screen2-tile1.jpg'),
      text: "Speech/thought layout 11",
      textFirstBubble: 'This is for you, Night Zookeeper.',
      textSecondBubble: 'This is for you, Night Zookeeper.',
      typeFirstBubble: 'speech',
      topFirstBubble: 20,
      trianglePositionFirstBubble: 'BottomRight',
      typeSecondBubble: 'speech',
      trianglePositionSecondBubble: 'Right',
      bottomSecondBubble: '40%'
    },
    tileTwo: {
      backgroundImageUri: require('../assets/desert-screen2-tile1.jpg'),
      textFirstBubble: 'I am thinking of an animal...',
      textSecondBubble: 'This is for you, ',
      typeFirstBubble: 'thought',
      bubblesLayoutFirstBubble: 'onBottom',
      bubblesAlignmentFirstBubble: 'right',
      topFirstBubble: 20,
      typeSecondBubble: 'speech',
      trianglePositionSecondBubble: 'TopRight',
      bottomSecondBubble: 20
    },
    nextScreen: 'ScreenThree'
  },
  ScreenThree: {
    layoutType: 12,
    tileOne: {
      backgroundImageUri: require('../assets/desert-screen2-tile1.jpg'),
      textFirstBubble: 'This is for you, Night Zookeeper.',
      textSecondBubble: 'This is for you, Night Zookeeper.',
      typeFirstBubble: 'speech',
      topFirstBubble: 20,
      leftFirstBubble: 20,
      trianglePositionFirstBubble: 'BottomRight',
      typeSecondBubble: 'speech',
      trianglePositionSecondBubble: 'TopLeft',
      bottomSecondBubble: 20,
      rightSecondBubble: 20
    },
    tileTwo: {
      backgroundImageUri: require('../assets/desert-screen2-tile1.jpg'),
      text: "Speech/thought layout 12",
      textFirstBubble: 'I am thinking...',
      typeFirstBubble: 'thought',
      rightFirstBubble: 20,
      bottomFirstBubble: '40%',
      bubblesLayoutFirstBubble: 'left'
    },
    nextScreen: 'ScreenOne'
  }
}

module.exports = bubbleScreens

// available props for Bubbles
textFirstBubble: String
textSecondBubble: String

typeFirstBubble: 'thought' || 'speech'
typeSecondBubble: 'thought' || 'speech'

topFirstBubble: 20 /* sit on top */
rightFirstBubble: 20 /* sit right */
bottomFirstBubble: 20 /* sit on bottom */ || '40%' /* sit in middle */
leftFirstBubble: 20 /* sit left */
topSecondBubble: 20 /* sit on top */
rightSecondBubble: 20 /* sit right */
bottomSecondBubble: 20 /* sit on bottom */ || '40%' /* sit in middle */
leftSecondBubble: 20 /* sit left */

// available props for SpeechBubble
trianglePositionFirstBubble: 'Left' || 'Right' || 'BottomLeft' || 'BottomCenter' || 'BottomRight' || 'TopLeft' || 'TopCenter' || 'TopRight'
trianglePositionSecondBubble: 'Left' || 'Right' || 'BottomLeft' || 'BottomCenter' || 'BottomRight' || 'TopLeft' || 'TopCenter' || 'TopRight'

// available props for ThoughtBubble
bubblesLayoutFirstBubble: 'onTop' || 'onBottom' || 'right' || 'left' /* bubbles top, below, right or left */
bubblesLayoutSecondBubble: 'onTop' || 'onBottom' || 'right' || 'left' /* bubbles top, below, right or left */
bubblesAlignmentFirstBubble: 'left' || 'center' || 'right'
bubblesAlignmentSecondBubble: 'left' || 'center' || 'right'