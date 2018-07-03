import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, PanResponder, Animated } from 'react-native'
import { FullScreenWrapper, RowWrapper, ColumnWrapper, VerticalHalfLeft, TopRightQuarter, BottomRightQuarter } from './components/ScreenStyles.styles'

import AnimatedImageAndTextTile from './components/AnimatedImageAndTextTile'

export default class ScreenThree extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tapCount: 0,
      xPositionTileOne: new Animated.Value(-150),
      xPositionTileTwo: new Animated.Value(-150),
      yPositionTileThree: new Animated.Value(0)
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

    const { navigate} = this.props.navigation
    if (this.state.tapCount < 5) {
      return this.setState({tapCount: ++this.state.tapCount})
    }
      return navigate(this.props.screenProps[currentScreen].nextScreen)
  }

  displaySecondTile = currentProps => {
    return (
      <AnimatedImageAndTextTile 
        tileAnimation='fadeInLeftBig'
        beginTransitionAnimation={ this.beginTransitionTileTwo}
        imageUri={currentProps.tileTwo.backgroundImageUri}
        imageWidth={600}
        xPosition={this.state.xPositionTileTwo}
        tapCount={this.state.tapCount}
        tapCountNumber={3}
        text={currentProps.tileTwo.text}
        bottom={0}
      />
    )
  }

  displayThirdTile = currentProps => {
    return (
      <AnimatedImageAndTextTile 
        tileAnimation='fadeInLeftBig'
        beginTransitionAnimation={ this.beginTransitionTileThree}
        imageUri={currentProps.tileThree.backgroundImageUri}
        imageHeight={307}
        yPosition={this.state.yPositionTileThree}
        tapCount={this.state.tapCount}
        tapCountNumber={5}
        text={currentProps.tileThree.text}
        bottom={0}
      />
    )
  }

  beginTransitionTileOne = endState => {
    if (endState.finished) {
      Animated.timing(this.state.xPositionTileOne, {
        toValue: 100,
        duration: 3000,
      }).start()
    }
  }

  beginTransitionTileTwo = endState => {
    if (endState.finished) {
      Animated.timing(this.state.xPositionTileTwo, {
        toValue: 100,
        duration: 3000,
      }).start()
    }
  }

  beginTransitionTileThree = endState => {
    if (endState.finished) {
      Animated.timing(this.state.yPositionTileThree, {
        toValue: -150,
        duration: 3000,
      }).start()
    }
  }

  render() {
    const currentScreen = this.props.navigation.state.routeName

    const currentProps = this.props.screenProps[currentScreen]

    return (
      <FullScreenWrapper {...this.panResponder.panHandlers}>
        <RowWrapper>
          <VerticalHalfLeft>
          <AnimatedImageAndTextTile 
            tileAnimation='fadeInLeftBig'
            delay={200}
            beginTransitionAnimation={this.beginTransitionTileOne}
            imageUri={currentProps.tileOne.backgroundImageUri}
            imageWidth={600}
            xPosition={this.state.xPositionTileOne}
            tapCount={this.state.tapCount}
            tapCountNumber={1}
            text={currentProps.tileOne.text}
            top={0}
          />
          </VerticalHalfLeft>
          <ColumnWrapper>
            <TopRightQuarter>
              {this.state.tapCount >= 2 && this.displaySecondTile(currentProps)}
            </TopRightQuarter>
            <BottomRightQuarter>
              {this.state.tapCount >= 4 && this.displayThirdTile(currentProps)}
            </BottomRightQuarter>
          </ColumnWrapper>
        </RowWrapper>
      </FullScreenWrapper>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '150%',
  }
})