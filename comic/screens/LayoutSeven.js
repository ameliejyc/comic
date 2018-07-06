import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PanResponder, Animated } from 'react-native'
import AnimatedImageAndTextTile from '../components/AnimatedImageAndTextTile'
import { FullScreenWrapper, ColumnWrapper, RowWrapper, HorizontalHalfTop, BottomLeftThird, BottomMiddleThird, BottomRightThird } from '../components/ScreenStyles.styles'

export default class LayoutSeven extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tapCount: 0,
      yPosition: new Animated.Value(500)
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
    if (this.state.tapCount < 4) {
      return this.setState({tapCount: ++this.state.tapCount})
    }
    return navigate(this.props.screenProps[currentScreen].nextScreen)
  }

  displaySecondTile = currentProps => {
    return (
      <AnimatedImageAndTextTile 
        tileAnimation='fadeInLeftBig'
        imageUri={currentProps.tileTwo.backgroundImageUri}
      />
    )
  }

  displayThirdTile = currentProps => {
    return (
      <AnimatedImageAndTextTile 
        tileAnimation='fadeInLeftBig'
        imageUri={currentProps.tileThree.backgroundImageUri}
      />
    )
  }

  displayFourthTile = currentProps => {
    return (
      <AnimatedImageAndTextTile 
        tileAnimation='fadeInLeftBig'
        backgroundColor='black'
        imageUri={currentProps.tileFour.backgroundImageUri}
        beginTransitionAnimation={ this.beginTransitionAnimation}
        yPosition={this.state.yPosition}
        tapCount={this.state.tapCount}
        tapCountNumber={4}
        text={currentProps.tileFour.text}
        bottom={currentProps.tileFour.bottom}
        top={currentProps.tileFour.top}
      />
    )
  }

  beginTransitionAnimation = endState => {
    if (endState.finished) {
      Animated.timing(this.state.yPosition, {
        toValue: 0,
        duration: 500,
      }).start()
    }
  }

  render() {
    const currentScreen = this.props.navigation.state.routeName

    const currentProps = this.props.screenProps[currentScreen]

    return (
      <FullScreenWrapper {...this.panResponder.panHandlers}>
      <ColumnWrapper>
        <HorizontalHalfTop>
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
          </HorizontalHalfTop>
          <RowWrapper>
            <BottomLeftThird>
              {this.state.tapCount >= 2 && this.displaySecondTile(currentProps)}
            </BottomLeftThird>
            <BottomMiddleThird>
              {this.state.tapCount >= 3 && this.displayThirdTile(currentProps)}
            </BottomMiddleThird>
            <BottomRightThird>
              {this.state.tapCount >= 4 && this.displayFourthTile(currentProps)}
            </BottomRightThird>
          </RowWrapper>
        </ColumnWrapper>
      </FullScreenWrapper>
    )
  }
}