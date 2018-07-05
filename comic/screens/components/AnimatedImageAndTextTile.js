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
    top: PropTypes.number,
    bottom: PropTypes.number
  }

  mapCharacters() {
    const characters = this.props.characters
    let delay = 0
    let left = -10
    return Object.keys(characters).map((each, index) => {
      delay += 200
      left += 20
      return this.renderCharacter(characters, each, index, delay, left)
    })
  }

  renderCharacter(characters, each, index, delay, left) {
    return (
      <Animatable.Image
        key={index}
        ref={this.handleCharacterRef}
        source={characters[each].imageUri}
        animation="bounceInUp"
        duration={2000}
        delay={delay}
        style={{
          height: 100,
          width: 120,
          position: 'absolute',
          bottom: 20,
          left: `${left}%`
        }}
        onAnimationEnd={this.characterAnimation}
      />
    )
  }

  handleCharacterRef = ref => (this.character = ref)

  characterAnimation = endState => {
    if (endState.finished) {
      this.character
        .bounce(1000)
        .then(() => this.character.jello(1500))
        .then(endState => console.log('Character animation finished'))
    }
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
      top = null,
      bottom = null,
      imageHeight = null,
      imageWidth = null,
      characters = null,
      startCharacterAnimation = false
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
        {characters && startCharacterAnimation && this.mapCharacters()}
        {tapCount >= tapCountNumber &&
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
    overflow: 'hidden'
  }
})
