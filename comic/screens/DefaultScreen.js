import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  PanResponder
} from 'react-native'
import AnimatedImageAndTextTile from './components/AnimatedImageAndTextTile'
import { FullScreenWrapper, ColumnWrapper, RowWrapper } from './components/ScreenStyles.styles'

export default class ScreenOne extends Component {
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
    if (this.state.tapCount < 5) {
      return this.setState({tapCount: ++this.state.tapCount})
    }
      return navigate(this.props.screenProps[currentScreen].nextScreen)
  }

  // render tiles
  displaySecondTile = currentProps => {
    return 
  }

  render() {
    const currentScreen = this.props.navigation.state.routeName

    const currentProps = this.props.screenProps[currentScreen]

    return (
      <FullScreenWrapper            {...this.panResponder.panHandlers}>
        <AnimatedImageAndTextTile 
          tileAnimation='fadeInLeftBig'
          delay={500}
          imageUri={require('../../assets/flying-screen1.gif')}
          tapCount={this.state.tapCount}
          tapCountNumber={1}
          text="Welcome to the Night Zoo, Baby"
          position='absolute'
          bottom={0}
        />
        {this.state.tapCount >= 2 && this.displaySecondTile(currentProps)}
      </FullScreenWrapper>
    )
  }
}