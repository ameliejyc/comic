import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  PanResponder
} from 'react-native'
import AnimatedImageAndTextTile from './components/AnimatedImageAndTextTile'
import { FullScreenWrapper, ColumnWrapper, RowWrapper, TopLeftQuarter, BottomLeftQuarter,  TopRightQuarter, BottomRightQuarter } from './components/ScreenStyles.styles'

export default class LayoutFour extends Component {
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

    const { navigate} = this.props.navigation
    if (this.state.tapCount < 7) {
      return this.setState({tapCount: ++this.state.tapCount})
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
      <RowWrapper>
        <ColumnWrapper>
          <TopLeftQuarter>
            <AnimatedImageAndTextTile 
              tileAnimation='fadeInLeftBig'
              delay={500}
              imageUri={require('../../assets/flying-screen1.gif')}
              tapCount={this.state.tapCount}
              tapCountNumber={1}
              text="I am layout 4"
              bottom={0}
            />
            </TopLeftQuarter>
            <BottomLeftQuarter>
              {this.state.tapCount >= 2 && this.displaySecondTile(currentProps)}
            </BottomLeftQuarter>
          </ColumnWrapper>
          <ColumnWrapper>
            <TopRightQuarter>
              {this.state.tapCount >= 4 && this.displayThirdTile(currentProps)}
            </TopRightQuarter>
            <BottomRightQuarter>
              {this.state.tapCount >= 6 && this.displayFourthTile(currentProps)}
            </BottomRightQuarter>
          </ColumnWrapper>
        </RowWrapper>
      </FullScreenWrapper>
    )
  }
}