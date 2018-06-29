import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import * as Animatable from 'react-native-animatable'

export default class TextBox extends Component {
  static propTypes = {
    text: PropTypes.string,
    position: PropTypes.string,
    top: PropTypes.number,
    bottom: PropTypes.number,
  }

  render() {
    const { text, position, top, bottom } = this.props
    return (
      <Animatable.View animation="fadeInLeftBig" style={[styles.textContainer, {position, top, bottom}]}>
        <Text style={styles.text}>{text}</Text>
      </Animatable.View>
    )
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: '#56227f',
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 10,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 }
  },
  text: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center'
  }
})
