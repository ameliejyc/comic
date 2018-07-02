import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import * as Animatable from 'react-native-animatable'

export default class ThoughtBubble extends Component {
  static propTypes = {
    text: PropTypes.string,
    top: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number
  }

  render() {
    const { text, top, bottom, left, right } = this.props
    return (
      <Animatable.View
        animation="fadeIn"
        style={[styles.bubble, { top, bottom, left, right }]}
      >
      <View style={styles.thoughtBubbleCircleTopCenterSmall} />
      <View style={styles.thoughtBubbleCircleTopCenterBig} />
        <View style={styles.thoughtBubbleSquare}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </Animatable.View>
    )
  }
}

const styles = StyleSheet.create({
  bubble: {
    position: 'absolute',
    alignItems: 'center'
  },
  text: {
    color: 'black',
    fontSize: 17,
    lineHeight: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    fontFamily: "oldrichium"
  },
  thoughtBubbleSquare: {
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: 'rgba(246, 246, 38, 0.7)'
  },
  thoughtBubbleCircleBottomLeft: {
    position: 'absolute',
    left: 40,
    bottom: -26,
    width: 0,
    height: 0,
    borderTopWidth: 26,
    borderTopColor: 'rgba(246, 246, 38, 0.7)',
    borderRightWidth: 26,
    borderRightColor: 'transparent',
    borderLeftWidth: 26,
    borderLeftColor: 'transparent'
  },
  thoughtBubbleCircleBottomRight: {
    position: 'absolute',
    right: 40,
    bottom: -26,
    width: 0,
    height: 0,
    borderTopWidth: 26,
    borderTopColor: 'rgba(246, 246, 38, 0.7)',
    borderRightWidth: 26,
    borderRightColor: 'transparent',
    borderLeftWidth: 26,
    borderLeftColor: 'transparent'
  },
  thoughtBubbleCircleTopLeft: {
    position: 'absolute',
    left: 40,
    top: -26,
    width: 0,
    height: 0,
    borderBottomWidth: 26,
    borderBottomColor: 'rgba(246, 246, 38, 0.7)',
    borderRightWidth: 26,
    borderRightColor: 'transparent',
    borderLeftWidth: 26,
    borderLeftColor: 'transparent'
  },
  thoughtBubbleCircleTopRight: {
    position: 'absolute',
    right: 40,
    top: -26,
    width: 0,
    height: 0,
    borderBottomWidth: 26,
    borderBottomColor: 'rgba(246, 246, 38, 0.7)',
    borderRightWidth: 26,
    borderRightColor: 'transparent',
    borderLeftWidth: 26,
    borderLeftColor: 'transparent'
  },
  thoughtBubbleCircleBottomCenter: {
    position: 'absolute',
    right: '45%',
    bottom: -26,
    width: 0,
    height: 0,
    borderTopWidth: 26,
    borderTopColor: 'rgba(246, 246, 38, 0.7)',
    borderRightWidth: 26,
    borderRightColor: 'transparent',
    borderLeftWidth: 26,
    borderLeftColor: 'transparent'
  },
  thoughtBubbleCircleTopCenterBig: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    borderColor: 'rgba(246, 246, 38, 0.7)',
    borderWidth: 20,
    margin: 5
  },
  thoughtBubbleCircleTopCenterSmall: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    borderColor: 'rgba(246, 246, 38, 0.7)',
    borderWidth: 10
  }
})