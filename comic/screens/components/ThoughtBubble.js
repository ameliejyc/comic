import React, { Component, Fragment } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import * as Animatable from 'react-native-animatable'

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

  renderBubblesOnTop() {
    return (
      <Fragment>
        <View style={styles.thoughtBubbleCircleSmall} />
        <View style={styles.thoughtBubbleCircleBig} />
        <View style={styles.thoughtBubbleSquare}>
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </Fragment>
    )
  }

  renderBubblesOnBottom() {
    return (
      <Fragment>
        <View style={styles.thoughtBubbleSquare}>
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
        <View style={styles.thoughtBubbleCircleBig} />
        <View style={styles.thoughtBubbleCircleSmall} />
      </Fragment>
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
      } else return bubblesAlignment
    }

    return (
      <Animatable.View
        animation="fadeIn"
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
      </Animatable.View>
    )
  }
}

const styles = StyleSheet.create({
  bubble: {
    position: 'absolute'
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
    backgroundColor: 'rgba(246, 246, 38, 0.7)'
  },
  thoughtBubbleCircleBig: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    borderColor: 'rgba(246, 246, 38, 0.7)',
    borderWidth: 20,
    marginVertical: 10,
    marginHorizontal: 25
  },
  thoughtBubbleCircleSmall: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    borderColor: 'rgba(246, 246, 38, 0.7)',
    borderWidth: 10,
    marginHorizontal: 35
  }
})
