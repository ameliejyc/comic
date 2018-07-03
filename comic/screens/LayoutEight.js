import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PanResponder } from 'react-native'
import AnimatedImageAndTextTile from './components/AnimatedImageAndTextTile'
import {
  FullScreenWrapper,
  ColumnWrapper,
  RowWrapper,
  HorizontalHalfBottom,
  TopLeftThird,
  TopMiddleThird,
  TopRightThird
} from './components/ScreenStyles.styles'

export default class LayoutEight extends Component {
  static propTypes = {
    // tile: PropTypes.string
  }

  constructor(props) {
    super(props)

    this.state = {
      tapCount: 0
    }
  }

  // remove and put into shared NavigationOptions
  static navigationOptions = {
    header: null
  }

  // set up panResponder
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
    if (this.state.tapCount < 5) {
      return this.setState({ tapCount: ++this.state.tapCount })
    }
    return navigate(this.props.screenProps[currentScreen].nextScreen)
  }

  displaySecondTile = currentProps => {
    return
  }

  displayThirdTile = currentProps => {
    return
  }

  displayFourthTile = currentProps => {
    return
  }

  render() {
    const currentScreen = this.props.navigation.state.routeName

    const currentProps = this.props.screenProps[currentScreen]

    return (
      <FullScreenWrapper {...this.panResponder.panHandlers}>
        <ColumnWrapper>
          <RowWrapper>
            <TopLeftThird>
              <AnimatedImageAndTextTile
                tileAnimation="fadeInLeftBig"
                delay={200}
                imageUri={currentProps.tileOne.backgroundImageUri}
                tapCount={this.state.tapCount}
                tapCountNumber={1}
                text={currentProps.tileOne.text}
                bottom={0}
              />
            </TopLeftThird>
            <TopMiddleThird>
              {this.state.tapCount >= 2 && this.displayThirdTile(currentProps)}
            </TopMiddleThird>
            <TopRightThird>
              {this.state.tapCount >= 3 && this.displayFourthTile(currentProps)}
            </TopRightThird>
          </RowWrapper>
          <HorizontalHalfBottom>
            {this.state.tapCount >= 4 && this.displayFourthTile(currentProps)}
          </HorizontalHalfBottom>
        </ColumnWrapper>
      </FullScreenWrapper>
    )
  }
}
