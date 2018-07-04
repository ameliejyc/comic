import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  PanResponder
} from 'react-native'
import AnimatedImageAndSpeechTile from './components/AnimatedImageAndSpeechTile'
import { FullScreenWrapper } from './components/ScreenStyles.styles'

export default class LayoutTen extends Component {
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
    if (this.state.tapCount < 3) {
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
          // tile and image props
          tileAnimation='fadeInLeftBig'
          delay={500}
          imageUri={currentProps.tileOne.backgroundImageUri}
          tapCount={this.state.tapCount}
          // narration props
          tapCountNumberText={1}
          text={currentProps.tileOne.text}
          bottom={0}
          // first bubble props
          textFirstBubble={currentProps.tileOne.bubbleOne.text}
          tapCountNumberFirstBubble={2}
          typeFirstBubble={currentProps.tileOne.bubbleOne.type}
          topFirstBubble={currentProps.tileOne.bubbleOne.top}
          bottomFirstBubble={currentProps.tileOne.bubbleOne.bottom}
          leftFirstBubble={currentProps.tileOne.bubbleOne.left}
          rightFirstBubble={currentProps.tileOne.bubbleOne.right}
          trianglePositionFirstBubble={currentProps.tileOne.bubbleOne.trianglePosition}
          bubblesLayoutFirstBubble={currentProps.tileOne.bubbleOne.bubblesLayout}
          bubblesAlignmentFirstBubble={currentProps.tileOne.bubbleOne.bubblesAlignment}
          // second bubble props
          textSecondBubble={currentProps.tileOne.bubbleTwo.text}
          tapCountNumberSecondBubble={3}
          typeSecondBubble={currentProps.tileOne.bubbleTwo.type}
          topSecondBubble={currentProps.tileOne.bubbleTwo.top}
          bottomSecondBubble={currentProps.tileOne.bubbleTwo.bottom}
          leftSecondBubble={currentProps.tileOne.bubbleTwo.left}
          rightSecondBubble={currentProps.tileOne.bubbleTwo.right}
          trianglePositionSecondBubble={currentProps.tileOne.bubbleTwo.trianglePosition}
          bubblesLayoutSecondBubble={currentProps.tileOne.bubbleTwo.bubblesLayout}
          bubblesAlignmentSecondBubble={currentProps.tileOne.bubbleTwo.bubblesAlignment}
        />
      </FullScreenWrapper>
    )
  }
}