import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PanResponder } from 'react-native'
import AnimatedImageAndSpeechTile from '../components/AnimatedImageAndSpeechTile'
import {
  FullScreenWrapper,
  ColumnWrapper,
  HorizontalHalfTop,
  HorizontalHalfBottom
} from '../components/ScreenStyles.styles'

export default class LayoutTwelve extends Component {
  static propTypes = {
    // tile: PropTypes.string
  }

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
    if (this.state.tapCount < 6) {
      return this.setState({ tapCount: ++this.state.tapCount })
    }
    return navigate(this.props.screenProps[currentScreen].nextScreen)
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
        rightFirstBubble={currentProps.tileTwo.bubbleOne.right}
        leftFirstBubble={currentProps.tileTwo.bubbleOne.left}
        trianglePositionFirstBubble={currentProps.tileTwo.bubbleOne.trianglePosition}
        bubblesLayoutFirstBubble={currentProps.tileTwo.bubbleOne.bubblesLayout}
        bubblesAlignmentFirstBubble={currentProps.tileTwo.bubbleOne.bubblesAlignment}
      />
    )
  }

  render() {
    const currentScreen = this.props.navigation.state.routeName

    const currentProps = this.props.screenProps[currentScreen]

    return (
      <FullScreenWrapper {...this.panResponder.panHandlers}>
        <ColumnWrapper>
          <HorizontalHalfTop>
            <AnimatedImageAndSpeechTile 
              // tile and image props
              tileAnimation='fadeInLeftBig'
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
          </HorizontalHalfTop>
          <HorizontalHalfBottom>
            {this.state.tapCount >= 4 && this.displaySecondTile(currentProps)}
          </HorizontalHalfBottom>
        </ColumnWrapper>
      </FullScreenWrapper>
    )
  }
}