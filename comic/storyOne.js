const storyOne = {
  ScreenOne: {
    layoutType: 1,
    tileOne: {
      backgroundImageUri: require('../assets/flying-screen1.gif'),
      text: 'Welcome to the Night Zoo, CoolDonkey',
      delay: 500
    },
    nextScreen: 'ScreenTwo'
  },
  ScreenTwo: {
    layoutType: 3,
    tileOne: {
      backgroundImageUri: require('../assets/desert-screen2-tile1.jpg'),
      text: 'A magical place, where anything is possible',
      delay: 200
    },
    tileTwo: {
      backgroundImageUri: require('../assets/woods-screen2-tile2.jpg'),
      text: 'It was once a beautiful place'
    },
    tileThree: {
      backgroundImageUri: require('../assets/woods-screen2-tile3.jpg'),
      text: 'Home to many magical animals'
    },
    nextScreen: 'ScreenThree'
  },
  ScreenThree: {
    layoutType: 7,
    tileOne: {
      backgroundImageUri: require('../assets/nulth-screen3-tile1.gif'),
      text: 'But the evil Lord of Nulth declared war on the Night Zoo and...',
      delay: 200
    },
    tileTwo: {
      backgroundImageUri: require('../assets/nulth-screen3-tile2.jpg')
    },
    tileThree: {
      backgroundImageUri: require('../assets/nulth-screen3-tile3.jpg')
    },
    tileFour: {
      backgroundImageUri: require('../assets/nulth-screen3-tile4.png'),
      text: 'imagination itself!'
    },
    nextScreen: 'ScreenFour'
  },
  ScreenFour: {
    layoutType: 2,
    tileOne: {
      backgroundImageUri: require('../assets/voids-screen4-tile1.jpg'),
      text: 'His army of mass-produced Voids are taking over.',
      delay: 200
    },
    tileTwo: {
      backgroundImageUri: require('../assets/voids-screen4-tile2.jpg'),
      text: 'And magical animals are going missing!'
    },
    nextScreen: 'ScreenFive'
  },
  ScreenFive: {
    layoutType: 1,
    tileOne: {
      backgroundImageUri: require('../assets/will-screen5-tile1.jpg'),
      text:
        "It's your job to battle Nulth and save the animals of The Night Zoo!",
      delay: 200
    },
    nextScreen: 'ScreenSix'
  },
  ScreenSix: {
    layoutType: 10,
    tileOne: {
      backgroundImageUri: require('../assets/desert-screen2-tile1.jpg'),
      text: "This is the speech/thought screen",
      textFirstBubble: 'This is for you, Night Zookeeper.',
      textSecondBubble: 'This is for you, Night Zookeeper.',
      typeFirstBubble: 'thought',
      trianglePositionFirstBubble: 'BottomCenter',
      bubblesLayoutFirstBubble: 'onBottom',
      bubblesAlignmentFirstBubble: 'left',
      typeSecondBubble: 'speech',
      trianglePositionSecondBubble: 'TopCenter',
    },
    nextScreen: 'ScreenOne'
  }
}

module.exports = storyOne