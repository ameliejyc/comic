import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  PanResponder
} from 'react-native'
import AnimatedImageAndSpeechTile from './components/AnimatedImageAndSpeechTile'
import { FullScreenWrapper, RowWrapper, VerticalHalfLeft, VerticalHalfRight } from './components/ScreenStyles.styles'

export default class LayoutEleven extends Component {
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
    if (this.state.tapCount < 7) {
      return this.setState({ tapCount: ++this.state.tapCount })
    }
    else {
      return navigate(this.props.screenProps[currentScreen].nextScreen)
    }
  }

  displaySecondTile = currentProps => {
    return (
      <AnimatedImageAndSpeechTile 
        // tile and image props
        tileAnimation='fadeInLeftBig'
        imageUri={currentProps.tileTwo.backgroundImageUri}
        tapCount={this.state.tapCount}
        // narration props
        tapCountNumberText={5}
        text={currentProps.tileTwo.text}
        bottom={0}
        // first bubble props
        textFirstBubble={currentProps.tileTwo.bubbleOne.text}
        tapCountNumberFirstBubble={6}
        typeFirstBubble={currentProps.tileTwo.bubbleOne.type}
        topFirstBubble={currentProps.tileTwo.bubbleOne.top}
        bottomFirstBubble={currentProps.tileTwo.bubbleOne.bottom}
        trianglePositionFirstBubble={currentProps.tileTwo.bubbleOne.trianglePosition}
        bubblesLayoutFirstBubble={currentProps.tileTwo.bubbleOne.bubblesLayout}
        bubblesAlignmentFirstBubble={currentProps.tileTwo.bubbleOne.bubblesAlignment}
        // second bubble props
        textSecondBubble={currentProps.tileTwo.bubbleTwo.text}
        tapCountNumberSecondBubble={7}
        typeSecondBubble={currentProps.tileTwo.bubbleTwo.type}
        topSecondBubble={currentProps.tileTwo.bubbleTwo.top}
        bottomSecondBubble={currentProps.tileTwo.bubbleTwo.bottom}
        trianglePositionSecondBubble={currentProps.tileTwo.bubbleTwo.trianglePosition}
        bubblesLayoutSecondBubble={currentProps.tileTwo.bubbleTwo.bubblesLayout}
        bubblesAlignmentSecondBubble={currentProps.tileTwo.bubbleTwo.bubblesAlignment}
      />
    )
  }

  render() {
    const currentScreen = this.props.navigation.state.routeName

    const currentProps = this.props.screenProps[currentScreen]

    return (
      <FullScreenWrapper {...this.panResponder.panHandlers}>
        <RowWrapper>
          <VerticalHalfLeft>
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
              trianglePositionFirstBubble={currentProps.tileOne.bubbleOne.trianglePosition}
              bubblesLayoutFirstBubble={currentProps.tileOne.bubbleOne.bubblesLayout}
              bubblesAlignmentFirstBubble={currentProps.tileOne.bubbleOne.bubblesAlignment}
              // second bubble props
              textSecondBubble={currentProps.tileOne.bubbleTwo.text}
              tapCountNumberSecondBubble={3}
              typeSecondBubble={currentProps.tileOne.bubbleTwo.type}
              topSecondBubble={currentProps.tileOne.bubbleTwo.top}
              bottomSecondBubble={currentProps.tileOne.bubbleTwo.bottom}
              trianglePositionSecondBubble={currentProps.tileOne.bubbleTwo.trianglePosition}
              bubblesLayoutSecondBubble={currentProps.tileOne.bubbleTwo.bubblesLayout}
              bubblesAlignmentSecondBubble={currentProps.tileOne.bubbleTwo.bubblesAlignment}
            />
          </VerticalHalfLeft>
          <VerticalHalfRight>
            {this.state.tapCount >=4 && this.displaySecondTile(currentProps)}
          </VerticalHalfRight>
        </RowWrapper>
      </FullScreenWrapper>
    )
  }
}