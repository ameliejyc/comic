import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  PanResponder
} from 'react-native'
import AnimatedImageAndSpeechTile from './components/AnimatedImageAndSpeechTile'
import { FullScreenWrapper } from './components/ScreenStyles.styles'

export default class ScreenTen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tapCount: 0
    }
  }

  static navigationOptions = {
    header: null
 }

  panResponder = {}

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
      onPanResponderGrant: this.handlePanResponderGrant
    })
  }

  handleStartShouldSetPanResponder = e => {
    return true
  }

  handlePanResponderGrant = e => {
    const currentScreen = this.props.navigation.state.routeName

    const { navigate } = this.props.navigation
    if (this.state.tapCount < 2) {
      return this.setState({ tapCount: ++this.state.tapCount })
    }
    else {
      return navigate(this.props.screenProps[currentScreen].nextScreen)
    }
  }

  render() {
    const currentScreen = this.props.navigation.state.routeName

    const currentProps = this.props.screenProps[currentScreen]

    return (
      <FullScreenWrapper {...this.panResponder.panHandlers}>
      <AnimatedImageAndSpeechTile 
        tileAnimation='fadeInLeftBig'
        delay={500}
        imageUri={currentProps.tileOne.backgroundImageUri}
        tapCount={this.state.tapCount}
        textFirstSpeech={currentProps.tileOne.textFirstSpeech}
        tapCountNumberFirstSpeech={1}
        topFirstSpeech={20}
        leftFirstSpeech={20}
        textSecondSpeech={currentProps.tileOne.textSecondSpeech}
        tapCountNumberSecondSpeech={2}
        bottomSecondSpeech={20}
        rightSecondSpeech={20}
      />
      </FullScreenWrapper>
    )
  }
}