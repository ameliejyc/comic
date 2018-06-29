import React, { Component } from 'react'
import { StyleSheet, Animated } from 'react-native'
import PropTypes from 'prop-types'
import TextBox from './TextBox'
import * as Animatable from 'react-native-animatable'

export default class AnimatedImageAndTextTile extends Component {
  static propTypes = {
    tileAnimation: PropTypes.string,
    delay: PropTypes.number,
    beginTransitionAnimation: PropTypes.func,
    backgroundColor: PropTypes.string,
    imageUri: PropTypes.string,
    imageHeight: PropTypes.number,
    imageWidth: PropTypes.number,
    xPosition: PropTypes.string,
    yPosition: PropTypes.string,
    tapCount: PropTypes.number,
    tapCountNumber: PropTypes.number,
    text: PropTypes.string,
    position: PropTypes.string,
    top: PropTypes.number,
    bottom: PropTypes.number
  }

  render() {
    const {
      tileAnimation,
      delay = null,
      beginTransitionAnimation = () => {},
      backgroundColor,
      imageUri,
      xPosition = null,
      yPosition = null,
      tapCount = 0,
      tapCountNumber = 0,
      text = null,
      position = null,
      top = null,
      bottom = null,
      imageHeight = null,
      imageWidth = null
    } = this.props

    return (
      <Animatable.View
        animation={tileAnimation}
        delay={delay}
        onAnimationEnd={beginTransitionAnimation}
        style={[styles.imageContainer, { backgroundColor: backgroundColor }]}
      >
        <Animated.Image
          source={imageUri}
          style={[{ left: xPosition, top: yPosition, height: imageHeight ? imageHeight : '100%', width: imageWidth ? imageWidth : '100%' }]}
        />

        {/* characters && <Animatable.Image source={require('../../../assets/animals-screen2-tile3.png')} animation='bounceInDown' style={{height: 150, width: 180}}/>*/}

        {tapCount >= tapCountNumber &&
          text && (
            <TextBox
              text={text}
              position={position}
              top={top}
              bottom={bottom}
            />
          )}
      </Animatable.View>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    overflow: 'hidden'
  }
})
