import React, { Component } from 'react'
import { StyleSheet, Animated } from 'react-native'
import PropTypes from 'prop-types'
import SpeechBubble from './SpeechBubble'
import ThoughtBubble from './ThoughtBubble'
import * as Animatable from 'react-native-animatable'

export default class AnimatedImageAndSpeechTile extends Component {
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
    tapCountFirstSpeech: PropTypes.number,
    tapCountNumberFirstSpeech: PropTypes.number,
    textFirstSpeech: PropTypes.string,
    topFirstSpeech: PropTypes.number,
    bottomFirstSpeech: PropTypes.number,
    rightFirstSpeech: PropTypes.number,
    leftFirstSpeech: PropTypes.number,
    tapCountSecondSpeech: PropTypes.number,
    tapCountNumberSecondSpeech: PropTypes.number,
    textSecondSpeech: PropTypes.string,
    topSecondSpeech: PropTypes.number,
    bottomSecondSpeech: PropTypes.number,
    rightSecondSpeech: PropTypes.number,
    leftSecondSpeech: PropTypes.number,
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
      tapCountNumberFirstSpeech = 0,
      textFirstSpeech = null,
      topFirstSpeech = null,
      bottomFirstSpeech = null,
      rightFirstSpeech = null,
      leftFirstSpeech = null,
      tapCountNumberSecondSpeech = 0,
      textSecondSpeech = null,
      topSecondSpeech = null,
      bottomSecondSpeech = null,
      rightSecondSpeech = null,
      leftSecondSpeech = null,
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
        {tapCount >= tapCountNumberFirstSpeech && (
          <SpeechBubble
            text={textFirstSpeech}
            top={topFirstSpeech}
            bottom={bottomFirstSpeech}
            right={rightFirstSpeech}
            left={leftFirstSpeech}
          />
        )}
        {tapCount >= tapCountNumberSecondSpeech && (
          <ThoughtBubble
            text={textSecondSpeech}
            top={topSecondSpeech}
            bottom={bottomSecondSpeech}
            right={rightSecondSpeech}
            left={leftSecondSpeech}
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
    overflow: 'hidden',
    position: 'relative'
  }
})