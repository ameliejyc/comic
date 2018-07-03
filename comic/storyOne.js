const storyOne = {
  One: {
    tileOne: {
      backgroundImageUri: require('../assets/flying-screen1.gif'),
      text: 'Welcome to the Night Zoo, CoolDonkey',
      delay: 500
    },
    nextScreen: 'Two'
  },
  // two is ScreenThree
  Two: {
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
    nextScreen: 'Three'
  },
  // three is ScreenSeven
  Three: {
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
    nextScreen: 'Four'
  },
  // four is ScreenTwo
  Four: {
    tileOne: {
      backgroundImageUri: require('../assets/voids-screen4-tile1.jpg'),
      text: 'His army of mass-produced Voids are taking over.',
      delay: 200
    },
    tileTwo: {
      backgroundImageUri: require('../assets/voids-screen4-tile2.jpg'),
      text: 'And magical animals are going missing!'
    },
    nextScreen: 'Five'
  },
  // five is ScreenOne
  Five: {
    tileOne: {
      backgroundImageUri: require('../assets/will-screen5-tile1.jpg'),
      text:
        "It's your job to battle Nulth and save the animals of The Night Zoo!",
      delay: 200
    },
    nextScreen: 'Six'
  },
  // six is ScreenTen (currently...)
  Six: {
    tileOne: {
      backgroundImageUri: require('../assets/will-screen5-tile1.jpg'),
      textFirstSpeech: 'This is for you, Night Zookeeper.',
      textSecondSpeech: 'This is for you, Night Zookeeper.'
    },
    nextScreen: 'One'
  }
}

module.exports = storyOne