import React, { Component } from 'react'
import { StyleSheet, Animated } from 'react-native'
import PropTypes from 'prop-types'
import SpeechBubble from './SpeechBubble'
import ThoughtBubble from './ThoughtBubble'
import TextBox from './TextBox'
import * as Animatable from 'react-native-animatable'

export default class AnimatedImageAndSpeechTile extends Component {
  static propTypes = {
    tileAnimation: PropTypes.string,
    delay: PropTypes.number,
    beginTransitionAnimation: PropTypes.func,
    backgroundColor: PropTypes.string,
    imageUri: PropTypes.string,
    text: PropTypes.string,
    top: PropTypes.number,
    bottom: PropTypes.number,
    imageHeight: PropTypes.number,
    imageWidth: PropTypes.number,
    xPosition: PropTypes.string,
    yPosition: PropTypes.string,
    tapCount: PropTypes.number,
    tapCountNumberText: PropTypes.number,
    tapCountNumberFirstBubble: PropTypes.number,
    textFirstBubble: PropTypes.string,
    typeFirstBubble: PropTypes.string,
    topFirstBubble: PropTypes.number,
    bottomFirstBubble: PropTypes.number,
    rightFirstBubble: PropTypes.number,
    leftFirstBubble: PropTypes.number,
    trianglePositionFirstBubble: PropTypes.string,
    tapCountNumberSecondBubble: PropTypes.number,
    textSecondBubble: PropTypes.string,
    typeSecondBubble: PropTypes.string,
    topSecondBubble: PropTypes.number,
    bottomSecondBubble: PropTypes.number,
    rightSecondBubble: PropTypes.number,
    leftSecondBubble: PropTypes.number,
    trianglePositionSecondBubble: PropTypes.string
  }

  renderFirstBubble() {
    return this.props.typeFirstBubble === 'speech' ? (
      <SpeechBubble
        text={this.props.textFirstBubble}
        top={this.props.topFirstBubble}
        bottom={this.props.bottomFirstBubble}
        right={this.props.rightFirstBubble}
        left={this.props.leftFirstBubble}
        trianglePosition={this.props.trianglePositionFirstBubble}
      />
    ) : (
      <ThoughtBubble
        text={this.props.textFirstBubble}
        top={this.props.topFirstBubble}
        bottom={this.props.bottomFirstBubble}
        right={this.props.rightFirstBubble}
        left={this.props.leftFirstBubble}
      />
    )
  }

  renderSecondBubble() {
    return this.props.typeSecondBubble === 'speech' ? (
      <SpeechBubble
        text={this.props.textSecondBubble}
        top={this.props.topSecondBubble}
        bottom={this.props.bottomSecondBubble}
        right={this.props.rightSecondBubble}
        left={this.props.leftSecondBubble}
        trianglePosition={this.props.trianglePositionSecondBubble}
      />
    ) : (
      <ThoughtBubble
        text={this.props.textSecondBubble}
        top={this.props.topSecondBubble}
        bottom={this.props.bottomSecondBubble}
        right={this.props.rightSecondBubble}
        left={this.props.leftSecondBubble}
      />
    )
  }

  render() {
    const {
      tileAnimation,
      delay = null,
      beginTransitionAnimation = () => {},
      backgroundColor,
      imageUri,
      imageHeight = null,
      imageWidth = null,
      xPosition = null,
      yPosition = null,
      tapCount = 0,

      text,
      top = null,
      bottom = null,
      tapCountNumberText = 0,

      tapCountNumberFirstBubble = 0,
      textFirstBubble = null,
      tapCountNumberSecondBubble = 0,
      textSecondBubble = null
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
          style={[
            {
              left: xPosition,
              top: yPosition,
              height: imageHeight ? imageHeight : '100%',
              width: imageWidth ? imageWidth : '100%'
            }
          ]}
        />
        {tapCount >= tapCountNumberFirstBubble &&
          textFirstBubble &&
          this.renderFirstBubble()}
        {tapCount >= tapCountNumberSecondBubble &&
          textSecondBubble &&
          this.renderSecondBubble()}
        {tapCount >= tapCountNumberText &&
          text && <TextBox text={text} top={top} bottom={bottom} />}
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
