import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PanResponder, Animated } from 'react-native'
import AnimatedImageAndTextTile from '../components/AnimatedImageAndTextTile'
import { FullScreenWrapper, RowWrapper, VerticalHalfLeft, VerticalHalfRight } from '../components/ScreenStyles.styles'

export default class LayoutTwo extends Component {
  static propTypes = {
    // tile: PropTypes.string
  }

  constructor(props) {
    super(props)

    this.state = {
      tapCount: 0,
      xPositionTileTwo: new Animated.Value(-150)
    }
  }

  // remove and put into shared NavigationOptions
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
      return this.setState({tapCount: ++this.state.tapCount})
    }
      return navigate(this.props.screenProps[currentScreen].nextScreen)
    }

  displaySecondTile = currentProps => {
    return (
      <AnimatedImageAndTextTile 
        tileAnimation='fadeInLeftBig'
        beginTransitionAnimation={this.beginTransitionTileTwo}
        imageUri={currentProps.tileTwo.backgroundImageUri}
        imageWidth={this.props.screenProps.windowWidth/2 + 290}
        xPosition={this.state.xPositionTileTwo}
        tapCount={this.state.tapCount}
        tapCountNumber={3}
        text={currentProps.tileTwo.text}
        bottom={currentProps.tileTwo.bottom}
        top={currentProps.tileTwo.top}
      />
    )
  }

  beginTransitionTileTwo = endState => {
    if (endState.finished) {
      Animated.timing(this.state.xPositionTileTwo, {
        toValue: 140,
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
              delay={currentProps.tileOne.delay}
              imageUri={currentProps.tileOne.backgroundImageUri}
              tapCount={this.state.tapCount}
              tapCountNumber={1}
              text={currentProps.tileOne.text}
              bottom={currentProps.tileOne.bottom}
              top={currentProps.tileOne.top}
            />
            </VerticalHalfLeft>
          <VerticalHalfRight>
            {this.state.tapCount >= 2 && this.displaySecondTile(currentProps)}
          </VerticalHalfRight>
        </RowWrapper>
      </FullScreenWrapper>
    )
  }
}