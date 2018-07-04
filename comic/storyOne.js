const storyOne = {
  ScreenOne: {
    layoutType: 1,
    tileOne: {
      backgroundImageUri: require('../assets/flying-screen1.gif'),
      text: 'Welcome to the Night Zoo, CoolDonkey',
      delay: 500,
      bottom: 0
    },
    nextScreen: 'ScreenTwo'
  },
  ScreenTwo: {
    layoutType: 3,
    tileOne: {
      backgroundImageUri: require('../assets/desert-screen2-tile1.jpg'),
      text: 'A magical place, where anything is possible',
      delay: 200,
      top: 0
    },
    tileTwo: {
      backgroundImageUri: require('../assets/woods-screen2-tile2.jpg'),
      text: 'It was once a beautiful place',
      bottom: 0
    },
    tileThree: {
      backgroundImageUri: require('../assets/woods-screen2-tile3.jpg'),
      text: 'Home to many magical animals',
      bottom: 0
    },
    nextScreen: 'ScreenThree'
  },
  ScreenThree: {
    layoutType: 7,
    tileOne: {
      backgroundImageUri: require('../assets/nulth-screen3-tile1.gif'),
      text: 'But the evil Lord of Nulth declared war on the Night Zoo and...',
      delay: 200,
      bottom: 0
    },
    tileTwo: {
      backgroundImageUri: require('../assets/nulth-screen3-tile2.jpg')
    },
    tileThree: {
      backgroundImageUri: require('../assets/nulth-screen3-tile3.jpg')
    },
    tileFour: {
      backgroundImageUri: require('../assets/nulth-screen3-tile4.png'),
      text: 'imagination itself!',
      bottom: 0
    },
    nextScreen: 'ScreenFour'
  },
  ScreenFour: {
    layoutType: 2,
    tileOne: {
      backgroundImageUri: require('../assets/voids-screen4-tile1.jpg'),
      text: 'His army of mass-produced Voids are taking over.',
      delay: 200,
      bottom: 0
    },
    tileTwo: {
      backgroundImageUri: require('../assets/voids-screen4-tile2.jpg'),
      text: 'And magical animals are going missing!',
      bottom: 0
    },
    nextScreen: 'ScreenFive'
  },
  ScreenFive: {
    layoutType: 1,
    tileOne: {
      backgroundImageUri: require('../assets/will-screen5-tile1.gif'),
      text:
        "It's your job to battle Nulth and save the animals of The Night Zoo!",
      delay: 200,
      bottom: 0
    },
    nextScreen: 'ScreenOne'
  }
}

module.exports = storyOne
