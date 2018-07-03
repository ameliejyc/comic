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
    if (this.state.tapCount < 6) {
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
        delay={500}
        imageUri={currentProps.tileOne.backgroundImageUri}
        tapCount={this.state.tapCount}
        // narration props
        tapCountNumberText={4}
        text={currentProps.tileOne.text}
        bottom={0}
        // first bubble props
        textFirstBubble={currentProps.tileOne.textFirstBubble}
        tapCountNumberFirstBubble={5}
        typeFirstBubble={currentProps.tileOne.typeFirstBubble}
        topFirstBubble={20}
        trianglePositionFirstBubble={currentProps.tileOne.trianglePositionFirstBubble}
        // second bubble props
        textSecondBubble={currentProps.tileOne.textSecondBubble}
        tapCountNumberSecondBubble={6}
        typeSecondBubble={currentProps.tileOne.typeSecondBubble}
        bottomSecondBubble={20}
        trianglePositionSecondBubble={currentProps.tileOne.trianglePositionSecondBubble}
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
              topFirstBubble={20}
              trianglePositionFirstBubble={currentProps.tileOne.trianglePositionFirstBubble}
              // second bubble props
              textSecondBubble={currentProps.tileOne.textSecondBubble}
              tapCountNumberSecondBubble={3}
              typeSecondBubble={currentProps.tileOne.typeSecondBubble}
              bottomSecondBubble={20}
              trianglePositionSecondBubble={currentProps.tileOne.trianglePositionSecondBubble}
            />
          </VerticalHalfLeft>
          <VerticalHalfRight>
            {this.state.tapCount >=3 && this.displaySecondTile(currentProps)}
          </VerticalHalfRight>
        </RowWrapper>
      </FullScreenWrapper>
    )
  }
}