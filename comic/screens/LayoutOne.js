import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  PanResponder
} from 'react-native'
import AnimatedImageAndTextTile from './components/AnimatedImageAndTextTile'
import { FullScreenWrapper } from './components/ScreenStyles.styles'

export default class LayoutOne extends Component {
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
      <FullScreenWrapper {...this.panResponder.panHandlers}>
        <AnimatedImageAndTextTile 
          tileAnimation='fadeInLeftBig'
          delay={currentProps.tileOne.delay}
          imageUri={currentProps.tileOne.backgroundImageUri}
          tapCount={this.state.tapCount}
          tapCountNumber={1}
          text={currentProps.tileOne.text}
          bottom={currentProps.tileOne.bottom}
          top={currentProps.tileOne.top}
        />
      </FullScreenWrapper>
    )
  }
}
