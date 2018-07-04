import React, { Component, Fragment } from 'react'
import { Text, StyleSheet, View, Animated } from 'react-native'
import PropTypes from 'prop-types'

export default class ThoughtBubble extends Component {
  static propTypes = {
    text: PropTypes.string,
    top: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    bubblesLayout: PropTypes.string,
    bubblesAlignment: PropTypes.string
  }
  
  state = {
    opacitySmallCircle: new Animated.Value(0),
    opacityLargeCircle: new Animated.Value(0),
    opacitySquare: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.sequence([
      Animated.timing(this.state.opacitySmallCircle, {
        toValue: 1,
        duration: 300
      }),
      Animated.timing(this.state.opacityLargeCircle, {
        toValue: 1,
        duration: 200
      }),
      Animated.timing(this.state.opacitySquare, {
        toValue: 1,
        duration: 200
      })
    ]).start()
  }

  renderBubblesOnTop() {
    return (
      <Fragment>
        <Animated.View style={[styles.thoughtBubbleCircleSmall, { opacity: this.state.opacitySmallCircle }]} />
        <Animated.View style={[styles.thoughtBubbleCircleBig, { opacity: this.state.opacityLargeCircle} ]} />
        <Animated.View style={[styles.thoughtBubbleSquare, { opacity: this.state.opacitySquare }]}>
          <Text style={styles.text}>{this.props.text}</Text>
        </Animated.View>
      </Fragment>
    )
  }

  renderBubblesOnBottom() {
    return (
      <Fragment>
        <Animated.View style={[styles.thoughtBubbleSquare, { opacity: this.state.opacitySquare }]}>
          <Text style={styles.text}>{this.props.text}</Text>
        </Animated.View>
        <Animated.View style={[styles.thoughtBubbleCircleBig, { opacity: this.state.opacityLargeCircle} ]} />
        <Animated.View style={[styles.thoughtBubbleCircleSmall, { opacity: this.state.opacitySmallCircle }]} />
      </Fragment>
    )
  }

  renderBubblesOnRight() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Animated.View style={[styles.thoughtBubbleSquare, { opacity: this.state.opacitySquare }]}>
          <Text style={styles.text}>{this.props.text}</Text>
        </Animated.View>
        <Animated.View style={[styles.thoughtBubbleCircleBigSide, { opacity: this.state.opacityLargeCircle}]} />
        <Animated.View style={[styles.thoughtBubbleCircleSmallSide, { opacity: this.state.opacitySmallCircle}]} />
      </View>
    )
  }

  renderBubblesOnLeft() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Animated.View style={[styles.thoughtBubbleCircleSmallSide, { opacity: this.state.opacitySmallCircle}]} />
        <Animated.View style={[styles.thoughtBubbleCircleBigSide, { opacity: this.state.opacityLargeCircle}]} />
        <Animated.View style={[styles.thoughtBubbleSquare, { opacity: this.state.opacitySquare}]}>
          <Text style={styles.text}>{this.props.text}</Text>
        </Animated.View>
      </View>
    )
  }

  render() {
    const {
      top,
      bottom,
      left,
      right,
      bubblesLayout,
      bubblesAlignment
    } = this.props

    const formatAlignment = bubblesAlignment => {
      if (bubblesAlignment === 'left') {
        return 'flex-start'
      } else if (bubblesAlignment === 'right') {
        return 'flex-end'
      } else return 'center'
    }

    return (
      <View
        style={[
          styles.bubble,
          {
            top,
            bottom,
            left,
            right,
            alignItems: formatAlignment(bubblesAlignment)
          }
        ]}
      >
        {bubblesLayout === 'onTop' && this.renderBubblesOnTop()}
        {bubblesLayout === 'onBottom' && this.renderBubblesOnBottom()}
        {bubblesLayout === 'right' && this.renderBubblesOnRight()}
        {bubblesLayout === 'left' && this.renderBubblesOnLeft()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bubble: {
    position: 'absolute',
    maxWidth: '100%',
  },
  text: {
    color: 'black',
    fontSize: 17,
    lineHeight: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    fontFamily: 'oldrichium'
  },
  thoughtBubbleSquare: {
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: 'rgba(246, 246, 38, 0.7)',
  },
  thoughtBubbleCircleBig: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    borderColor: 'rgba(246, 246, 38, 0.7)',
    borderWidth: 15,
    marginVertical: 5,
    marginHorizontal: 45,
    opacity: 1
  },
  thoughtBubbleCircleSmall: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    borderColor: 'rgba(246, 246, 38, 0.7)',
    borderWidth: 8,
    marginHorizontal: 52
  },
  thoughtBubbleCircleBigSide: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    borderColor: 'rgba(246, 246, 38, 0.7)',
    borderWidth: 15,
    marginVertical: 15,
    marginHorizontal: 5
  },
  thoughtBubbleCircleSmallSide: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    borderColor: 'rgba(246, 246, 38, 0.7)',
    borderWidth: 8,
    marginVertical: 22
  }
})
