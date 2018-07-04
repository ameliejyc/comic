import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  PanResponder
} from 'react-native'
import AnimatedImageAndSpeechTile from './components/AnimatedImageAndSpeechTile'
import { FullScreenWrapper, RowWrapper, VerticalHalfLeft, VerticalHalfRight } from './components/ScreenStyles.styles'

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
        textFirstBubble={currentProps.tileTwo.textFirstBubble}
        tapCountNumberFirstBubble={6}
        typeFirstBubble={currentProps.tileTwo.typeFirstBubble}
        topFirstBubble={currentProps.tileTwo.topFirstBubble}
        bottomFirstBubble={currentProps.tileTwo.bottomFirstBubble}
        trianglePositionFirstBubble={currentProps.tileTwo.trianglePositionFirstBubble}
        bubblesLayoutFirstBubble={currentProps.tileTwo.bubblesLayoutFirstBubble}
        bubblesAlignmentFirstBubble={currentProps.tileTwo.bubblesAlignmentFirstBubble}
        // second bubble props
        textSecondBubble={currentProps.tileTwo.textSecondBubble}
        tapCountNumberSecondBubble={7}
        typeSecondBubble={currentProps.tileTwo.typeSecondBubble}
        topSecondBubble={currentProps.tileTwo.topSecondBubble}
        bottomSecondBubble={currentProps.tileTwo.bottomSecondBubble}
        trianglePositionSecondBubble={currentProps.tileTwo.trianglePositionSecondBubble}
        bubblesLayoutSecondBubble={currentProps.tileTwo.bubblesLayoutSecondBubble}
        bubblesAlignmentSecondBubble={currentProps.tileTwo.bubblesAlignmentSecondBubble}
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
              textFirstBubble={currentProps.tileOne.textFirstBubble}
              tapCountNumberFirstBubble={2}
              typeFirstBubble={currentProps.tileOne.typeFirstBubble}
              topFirstBubble={currentProps.tileOne.topFirstBubble}
              bottomFirstBubble={currentProps.tileOne.bottomFirstBubble}
              trianglePositionFirstBubble={currentProps.tileOne.trianglePositionFirstBubble}
              bubblesLayoutFirstBubble={currentProps.tileOne.bubblesLayoutFirstBubble}
              bubblesAlignmentFirstBubble={currentProps.tileOne.bubblesAlignmentFirstBubble}
              // second bubble props
              textSecondBubble={currentProps.tileOne.textSecondBubble}
              tapCountNumberSecondBubble={3}
              typeSecondBubble={currentProps.tileOne.typeSecondBubble}
              topSecondBubble={currentProps.tileOne.topSecondBubble}
              bottomSecondBubble={currentProps.tileOne.bottomSecondBubble}
              trianglePositionSecondBubble={currentProps.tileOne.trianglePositionSecondBubble}
              bubblesLayoutSecondBubble={currentProps.tileOne.bubblesLayoutSecondBubble}
              bubblesAlignmentSecondBubble={currentProps.tileOne.bubblesAlignmentSecondBubble}
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