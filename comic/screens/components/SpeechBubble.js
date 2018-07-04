import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import * as Animatable from 'react-native-animatable'

export default class SpeechBubble extends Component {
  static propTypes = {
    text: PropTypes.string,
    top: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number
  }

  render() {
    const { text, top, bottom, left, right, trianglePosition } = this.props
    return (
      // maxWidth stops text taking complete width of page, but unsure if this is necessary
      <Animatable.View
        animation="fadeIn"
        style={[styles.bubble, { maxWidth: trianglePosition === 'Left' || trianglePosition === 'Right' ? '80%' : '100%', top, bottom, left, right }]}
      >
        <View style={styles.speechBubbleSquare}>
          <Text style={styles.text}>{text}</Text>
          <View style={styles[`speechBubbleTriangle${trianglePosition}`]} />
        </View>
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
    fontFamily: "oldrichium"
  },
  speechBubbleSquare: {
    // height: '130%', // may be necessary to counteract the maxWidth on bubble when left or right triangles
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  speechBubbleTriangleLeft: {
    position: 'absolute',
    left: -26,
    bottom: '30%',
    width: 0,
    height: 0,
    borderTopWidth: 13,
    borderTopColor: 'transparent',
    borderRightWidth: 26,
    borderRightColor: 'rgba(255, 255, 255, 0.8)',
    borderBottomWidth: 13,
    borderBottomColor: 'transparent'
  },
  speechBubbleTriangleRight: {
    position: 'absolute',
    right: -26,
    bottom: '30%',
    width: 0,
    height: 0,
    borderTopWidth: 13,
    borderTopColor: 'transparent',
    borderLeftWidth: 26,
    borderLeftColor: 'rgba(255, 255, 255, 0.8)',
    borderBottomWidth: 13,
    borderBottomColor: 'transparent'
  },
  speechBubbleTriangleBottomLeft: {
    position: 'absolute',
    left: 40,
    bottom: -26,
    width: 0,
    height: 0,
    borderTopWidth: 26,
    borderTopColor: 'rgba(255, 255, 255, 0.8)',
    borderRightWidth: 26,
    borderRightColor: 'transparent',
    borderLeftWidth: 26,
    borderLeftColor: 'transparent'
  },
  speechBubbleTriangleBottomRight: {
    position: 'absolute',
    right: 40,
    bottom: -26,
    width: 0,
    height: 0,
    borderTopWidth: 26,
    borderTopColor: 'rgba(255, 255, 255, 0.8)',
    borderRightWidth: 26,
    borderRightColor: 'transparent',
    borderLeftWidth: 26,
    borderLeftColor: 'transparent'
  },
  speechBubbleTriangleTopLeft: {
    position: 'absolute',
    left: 40,
    top: -26,
    width: 0,
    height: 0,
    borderBottomWidth: 26,
    borderBottomColor: 'rgba(255, 255, 255, 0.8)',
    borderRightWidth: 26,
    borderRightColor: 'transparent',
    borderLeftWidth: 26,
    borderLeftColor: 'transparent'
  },
  speechBubbleTriangleTopRight: {
    position: 'absolute',
    right: 40,
    top: -26,
    width: 0,
    height: 0,
    borderBottomWidth: 26,
    borderBottomColor: 'rgba(255, 255, 255, 0.8)',
    borderRightWidth: 26,
    borderRightColor: 'transparent',
    borderLeftWidth: 26,
    borderLeftColor: 'transparent'
  },
  speechBubbleTriangleBottomCenter: {
    position: 'absolute',
    right: '45%',
    bottom: -26,
    width: 0,
    height: 0,
    borderTopWidth: 26,
    borderTopColor: 'rgba(255, 255, 255, 0.8)',
    borderRightWidth: 26,
    borderRightColor: 'transparent',
    borderLeftWidth: 26,
    borderLeftColor: 'transparent'
  },
  speechBubbleTriangleTopCenter: {
    position: 'absolute',
    right: '50%',
    top: -26,
    width: 0,
    height: 0,
    borderBottomWidth: 26,
    borderBottomColor: 'rgba(255, 255, 255, 0.8)',
    borderRightWidth: 26,
    borderRightColor: 'transparent',
    borderLeftWidth: 26,
    borderLeftColor: 'transparent'
  }
})
