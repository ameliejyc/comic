import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'
import AnimationScreen from './AnimationScreen'
import TodoScreen from './TodoScreen'
import GestureContainer from './GestureContainer'
import ScrollScreen from './ScrollScreen'
import ImageReveal from './ImageReveal'
import Interpolation from './Interpolation'
import SlideOne from './SlideOne'
import Tappable from './Tappable'
import ScreenOne from './comic/screens/ScreenOne'
import ScreenThree from './comic/screens/ScreenThree'
import ScreenSeven from './comic/screens/ScreenSeven'
import ScreenTwo from './comic/screens/ScreenTwo'
import ScreenTen from './comic/screens/ScreenTen'

// put this into a story json ?
const screenProps = {
  // one is ScreenOne
  One: {
    tileOne: {
      backgroundImageUri: require('./assets/flying-screen1.gif'),
      text: 'Welcome to the Night Zoo, CoolDonkey'
    },
    nextScreen: 'Two'
  },
  // two is ScreenThree
  Two: {
    tileOne: {
      backgroundImageUri: require('./assets/desert-screen2-tile1.jpg'),
      text: 'A magical place, where anything is possible'
    },
    tileTwo: {
      backgroundImageUri: require('./assets/woods-screen2-tile2.jpg'),
      text: "It was once a beautiful place"
    },
    tileThree: {
      backgroundImageUri: require('./assets/woods-screen2-tile3.jpg'),
      text: "Home to many magical animals"
    },
    nextScreen: 'Three',
  },
  // three is ScreenSeven
  Three: {
    tileOne: {
      backgroundImageUri: require('./assets/nulth-screen3-tile1.gif'),
      text: "But the evil Lord of Nulth declared war on the Night Zoo and..."
    },
    tileTwo: {
      backgroundImageUri: require('./assets/nulth-screen3-tile2.jpg')
    },
    tileThree: {
      backgroundImageUri: require('./assets/nulth-screen3-tile3.jpg')
    },
    tileFour: {
      backgroundImageUri: require('./assets/nulth-screen3-tile4.png')
    },
    nextScreen: 'Four'
  },
  // four is ScreenTwo
  Four: {
    tileOne: {
      backgroundImageUri: require('./assets/voids-screen4-tile1.jpg'),
      text: 'His army of mass-produced Voids are taking over.'
    },
    tileTwo: {
      backgroundImageUri: require('./assets/voids-screen4-tile2.jpg'),
      text: "And magical animals are going missing!"
    },
    nextScreen: 'Five',
  },
  // five is ScreenOne
  Five: {
    tileOne: {
      backgroundImageUri: require('./assets/will-screen5-tile1.jpg'),
      text: "It's your job to battle Nulth and save the animals of The Night Zoo!"
    },
    nextScreen: 'Six',
  },
  // six is ScreenTen (currently...)
  Six: {
    backgroundImageUri: require('./assets/will-screen5-tile1.jpg'),
    text: "This is for you, Night Zookeeper",
    nextScreen: 'Home',
  }
}

const ComicBook = createStackNavigator({
  // Todo: { screen: TodoScreen },
  // Animation: { screen: AnimationScreen },
  // Gesture: { screen: GestureContainer },
  // Scroll: { screen: ScrollScreen },
  // ImageReveal: { screen: ImageReveal },
  // Interpolation: { screen: Interpolation},
  // SlideOne: { screen: SlideOne },
  // Tappable: { screen: Tappable },
    One: { screen: ScreenOne },
    Two: { screen: ScreenThree },
    Three: { screen: ScreenSeven },
    Four: { screen: ScreenTwo },
    Five: { screen: ScreenOne },
    Six: { screen: ScreenTen },
  },
  {
    navigationOptions: {
      gesturesEnabled: true,
      headerStyle: {
        backgroundColor: '#341644',
      }
    }
  },
  {
    headerMode: 'none'
  },
)

export default class App extends Component {
  render() {
    return (
      <ComicBook screenProps={screenProps} />
    )
  }
}
