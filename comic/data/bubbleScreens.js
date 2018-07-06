const bubbleScreens = {
  ScreenOne: {
    layoutType: 10,
    tileOne: {
      backgroundImageUri: require('../assets/desert-screen2-tile1.jpg'),
      text: 'Speech/thought layout 10',
      bubbleOne: {
        text: 'This is for you, Night Zookeeper.',
        type: 'thought',
        top: 20,
        right: 20,
        bubblesLayout: 'onBottom',
        bubblesAlignment: 'right'
      },
      bubbleTwo: {
        text: 'This is for you, Night Zookeeper. Hmm does this work? lets see',
        type: 'speech',
        trianglePosition: 'Right',
        bottom: '40%',
        left: 20
      }
    },
    nextScreen: 'ScreenTwo'
  },
  ScreenTwo: {
    layoutType: 11,
    tileOne: {
      backgroundImageUri: require('../assets/desert-screen2-tile1.jpg'),
      text: 'Speech/thought layout 11',
      bubbleOne: {
        text: 'This is for you, Night Zookeeper.',
        type: 'speech',
        top: 20,
        trianglePosition: 'BottomRight'
      },
      bubbleTwo: {
        text: 'This is for you, Night Zookeeper.',
        type: 'speech',
        trianglePosition: 'Right',
        bottom: '40%'
      }
    },
    tileTwo: {
      backgroundImageUri: require('../assets/desert-screen2-tile1.jpg'),
      bubbleOne: {
        text: 'I am thinking of an animal...',
        type: 'thought',
        bubblesLayout: 'onBottom',
        bubblesAlignment: 'right',
        top: 20
      },
      bubbleTwo: {
        text: 'This is for you, ',
        type: 'speech',
        trianglePosition: 'TopRight',
        bottom: 20
      }
    },
    nextScreen: 'ScreenThree'
  },
  ScreenThree: {
    layoutType: 12,
    tileOne: {
      backgroundImageUri: require('../assets/desert-screen2-tile1.jpg'),
      bubbleOne: {
        text: 'This is for you, Night Zookeeper.',
        type: 'speech',
        top: 20,
        left: 20,
        trianglePosition: 'BottomRight'
      },
      bubbleTwo: {
        text: 'This is for you, Night Zookeeper.',
        type: 'speech',
        trianglePosition: 'TopLeft',
        bottom: 20,
        right: 20
      }
    },
    tileTwo: {
      backgroundImageUri: require('../assets/desert-screen2-tile1.jpg'),
      text: 'Speech/thought layout 12',
      bubbleOne: {
        text: 'I am thinking...',
        type: 'thought',
        right: 20,
        bottom: '40%',
        bubblesLayout: 'left'
      }
    },
    nextScreen: 'ScreenOne'
  }
}

module.exports = bubbleScreens

// available props for Bubbles
text: String
type: 'thought' || 'speech'
top: 20 /* sit on top */
right: 20 /* sit right */
bottom: 20 /* sit on bottom */ || '40%' /* sit in middle */
left: 20 /* sit left */

// available props for SpeechBubble
trianglePosition: 
  'Left' ||
  'Right' ||
  'BottomLeft' ||
  'BottomCenter' ||
  'BottomRight' ||
  'TopLeft' ||
  'TopCenter' ||
  'TopRight'

// available props for ThoughtBubble
bubblesLayout: /* bubbles top, below, right or left */
  'onTop' ||
  'onBottom' ||
  'right' ||
  'left' 
bubblesAlignment: 'left' || 'center' || 'right'
