import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import * as Animatable from 'react-native-animatable'
import { ThoughtBubbleContainer } from './ScreenStyles.styles'

export default class ThoughtBubble extends Component {
  static propTypes = {
    text: PropTypes.string,
    position: PropTypes.string,
    top: PropTypes.number,
    bottom: PropTypes.number,
  }

  render() {
    const { text, position, top, bottom } = this.props
    return (
      <Animatable.View animation="fadeInLeftBig" style={[styles.bubble, {position, top, bottom}]}>
        <ThoughtBubbleContainer>
          <Text style={styles.text}>{text}</Text>
        </ThoughtBubbleContainer>
      </Animatable.View>
    )
  }
}

const styles = StyleSheet.create({
  bubble: {
    // backgroundColor: '#56227f',
    // paddingVertical: 10,
    // paddingHorizontal: 15,
    // margin: 10
  },
  text: {
    color: 'black',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center'
  }
})