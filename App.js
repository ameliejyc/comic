import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'
import { Font } from 'expo'
import AnimationScreen from './AnimationScreen'
import TodoScreen from './TodoScreen'
import GestureContainer from './GestureContainer'
import ScrollScreen from './ScrollScreen'
import ImageReveal from './ImageReveal'
import Interpolation from './Interpolation'
import SlideOne from './SlideOne'
import Tappable from './Tappable'
import ScreenOne from './comic/screens/ScreenOne'
import ScreenTwo from './comic/screens/ScreenTwo'
import ScreenThree from './comic/screens/ScreenThree'
import ScreenSeven from './comic/screens/ScreenSeven'
import ScreenTen from './comic/screens/ScreenTen'
import storyOne from './comic/storyOne.js'

const screenProps = storyOne

const ComicBook = createStackNavigator(
  {
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
    Six: { screen: ScreenTen }
  },
  {
    navigationOptions: {
      gesturesEnabled: true,
      headerStyle: {
        backgroundColor: '#341644'
      }
    }
  },
  {
    headerMode: 'none'
  }
)

export default class App extends Component {
  state = {
    assetsLoaded: false
  }

  async componentDidMount() {
    try {
      await Font.loadAsync({
        oldrichium: require('./assets/fonts/Oldrichium.otf'),
        oldrichiumBold: require('./assets/fonts/OldrichiumBold.otf')
      })
    } catch (e) {
      console.warn(
        'There was an error loading assets. Reload the app to try again.'
      )
      console.log(e.message)
    } finally {
      this.setState({ assetsLoaded: true })
    }
  }

  render() {
    if (this.state.assetsLoaded) {
      return <ComicBook screenProps={screenProps} />
    } else {
      // return loading screen here in future
      return null
    }
  }
}
