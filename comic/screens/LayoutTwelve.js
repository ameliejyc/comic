import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PanResponder } from 'react-native'
import AnimatedImageAndSpeechTile from './components/AnimatedImageAndSpeechTile'
import {
  FullScreenWrapper,
  ColumnWrapper,
  HorizontalHalfTop,
  HorizontalHalfBottom
} from './components/ScreenStyles.styles'

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
        textFirstBubble={currentProps.tileTwo.textFirstBubble}
        tapCountNumberFirstBubble={6}
        typeFirstBubble={currentProps.tileTwo.typeFirstBubble}
        topFirstBubble={currentProps.tileTwo.topFirstBubble}
        bottomFirstBubble={currentProps.tileTwo.bottomFirstBubble}
        rightFirstBubble={currentProps.tileTwo.rightFirstBubble}
        leftFirstBubble={currentProps.tileTwo.leftFirstBubble}
        trianglePositionFirstBubble={currentProps.tileTwo.trianglePositionFirstBubble}
        bubblesLayoutFirstBubble={currentProps.tileTwo.bubblesLayoutFirstBubble}
        bubblesAlignmentFirstBubble={currentProps.tileTwo.bubblesAlignmentFirstBubble}
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
              textFirstBubble={currentProps.tileOne.textFirstBubble}
              tapCountNumberFirstBubble={2}
              typeFirstBubble={currentProps.tileOne.typeFirstBubble}
              topFirstBubble={currentProps.tileOne.topFirstBubble}
              bottomFirstBubble={currentProps.tileOne.bottomFirstBubble}
              leftFirstBubble={currentProps.tileOne.leftFirstBubble}
              rightFirstBubble={currentProps.tileOne.rightFirstBubble}
              trianglePositionFirstBubble={currentProps.tileOne.trianglePositionFirstBubble}
              bubblesLayoutFirstBubble={currentProps.tileOne.bubblesLayoutFirstBubble}
              bubblesAlignmentFirstBubble={currentProps.tileOne.bubblesAlignmentFirstBubble}
              // second bubble props
              textSecondBubble={currentProps.tileOne.textSecondBubble}
              tapCountNumberSecondBubble={3}
              typeSecondBubble={currentProps.tileOne.typeSecondBubble}
              topSecondBubble={currentProps.tileOne.topSecondBubble}
              bottomSecondBubble={currentProps.tileOne.bottomSecondBubble}
              leftSecondBubble={currentProps.tileOne.leftSecondBubble}
              rightSecondBubble={currentProps.tileOne.rightSecondBubble}
              trianglePositionSecondBubble={currentProps.tileOne.trianglePositionSecondBubble}
              bubblesLayoutSecondBubble={currentProps.tileOne.bubblesLayoutSecondBubble}
              bubblesAlignmentSecondBubble={currentProps.tileOne.bubblesAlignmentSecondBubble}
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