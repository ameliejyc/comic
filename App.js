import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'
import { Dimensions } from 'react-native' 
import { Font } from 'expo'
import LayoutOne from './comic/screens/LayoutOne'
import LayoutTwo from './comic/screens/LayoutTwo'
import LayoutThree from './comic/screens/LayoutThree'
import LayoutSeven from './comic/screens/LayoutSeven'
import LayoutTen from './comic/screens/LayoutTen'
import LayoutEleven from './comic/screens/LayoutEleven'
import LayoutTwelve from './comic/screens/LayoutTwelve'

import storyOne from './comic/data/storyOne'
import bubbleScreens from './comic/data/bubbleScreens'

const screenProps = storyOne
// const screenProps = bubbleScreens

let { width, height } = Dimensions.get('window')

const ComicBook = createStackNavigator(
  {
    // storyOne screens
    ScreenOne: { screen: LayoutOne },
    ScreenTwo: { screen: LayoutThree },
    ScreenThree: { screen: LayoutSeven },
    ScreenFour: { screen: LayoutTwo },
    ScreenFive: { screen: LayoutOne }
    
    // bubbleScreens
    // ScreenOne: { screen: LayoutTen },
    // ScreenTwo: { screen: LayoutEleven } ,
    // ScreenThree: { screen: LayoutTwelve } 
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
  constructor() {
    super()

    this.state = {
      windowWidth: width,
      windowHeight: height,
      assetsLoaded: false
    }
    
    Dimensions.addEventListener('change', () => {
      this.setState({
        windowWidth: Dimensions.get('window').width,
        windowHeight: Dimensions.get('window').height
      })
      screenProps.windowWidth = this.state.windowWidth
      screenProps.windowHeight = this.state.windowHeight
    })
  }

  async componentDidMount() {
    try {
      await Font.loadAsync({
        oldrichium: require('./comic/assets/fonts/Oldrichium.otf'),
        oldrichiumBold: require('./comic/assets/fonts/OldrichiumBold.otf')
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
