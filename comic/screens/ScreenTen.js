import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  PanResponder
} from 'react-native'
import AnimatedImageAndTextTile from './components/AnimatedImageAndTextTile'
import SpeechBubble from './components/SpeechBubble'
import ThoughtBubble from './components/ThoughtBubble'
import { FullScreenWrapper } from './components/ScreenStyles.styles'

export default class ScreenOne extends Component {
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
    switch (this.state.tapCount) {
      case 0:
        return this.setState({ tapCount: ++this.state.tapCount })
      case 1:
        return navigate(this.props.screenProps[currentScreen].nextScreen)
    }
  }

  render() {
    const currentScreen = this.props.navigation.state.routeName

    const currentProps = this.props.screenProps[currentScreen]

    return (
      <FullScreenWrapper            {...this.panResponder.panHandlers}>
        <SpeechBubble text='Hello penguin' />
        <ThoughtBubble text='Hello penguin' />
        <AnimatedImageAndTextTile 
          tileAnimation='fadeInLeftBig'
          delay={500}
          imageUri={require('../../assets/woods-screen2-tile3.jpg')}
          tapCount={this.state.tapCount}
          tapCountNumber={1}
          text="Welcome to the Night Zoo, CoolDonkey"
          position='absolute'
          bottom={0}
        />
      </FullScreenWrapper>
    )
  }
}