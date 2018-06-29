import styled, { css } from 'styled-components'
import { Dimensions } from 'react-native'

const windowHeight = Dimensions.get('window').height - 40
const windowWidth = Dimensions.get('window').width - 40
const deviceScale = Dimensions.get('window').scale

const commonStyles = css`
  flex: 1;
  overflow: hidden;
`
// layout components
export const FullScreenWrapper = styled.View`
  background-color: #341644;
  padding: 20px;
  flex: 1;
`

export const RowWrapper = styled.View`
  flex-direction: row;
  ${commonStyles};
`

export const ColumnWrapper = styled.View`
  flex-direction: column;
  ${commonStyles};
`

export const VerticalHalfLeft = styled.View`
  margin-right: 10px;
  ${commonStyles};
  box-shadow: 0 8px 0 rgba(0, 0, 0, 0.4);
`

export const VerticalHalfRight = styled.View`
  margin-left: 10px;
  ${commonStyles};
  box-shadow: 0 8px 0 rgba(0, 0, 0, 0.4);
`

export const HorizontalHalfTop= styled.View`
  margin-bottom: 10px;
  ${commonStyles};
`

export const HorizontalHalfBottom = styled.View`
  margin-top: 10px;
  ${commonStyles};
`

export const TopRightQuarter = styled.View`
  margin: 0 0 10px 10px;
  ${commonStyles};
`

export const BottomRightQuarter = styled.View`
  margin: 10px 0 0 10px;
  ${commonStyles};
`

export const BottomLeftThird = styled.View`
  margin-right: 5px;
  ${commonStyles};
`

export const BottomMiddleThird = styled.View`
  margin: 0 5px;
  ${commonStyles};
`

export const BottomRightThird = styled.View`
  margin-left: 5px;
  ${commonStyles};
`

// individual component styles
export const SpeechBubbleContainer = styled.View`
  font-size: 17px;
  position: relative;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  padding: 30px;

  :before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top-color: rgba(255, 255, 255, 0.7);
    border-bottom: 0;
    margin-left: -20px;
	  margin-bottom: -20px;
  }
`

export const ThoughtBubbleContainer = styled.View`
  display: flex;
  flex-direction: column;
  font-size: 17px;
  background: rgba(165, 155, 45, 0.7);
  border-radius: 25px 25px 25px 0;
  height: 380px;
  width: 460px;
  padding: 30px;

  :before {
    content: '';
    position: absolute;
    left: 0;
    top: 320px;
    width: 0;
    height: 0;
    border: 60px solid transparent;
    border-right-color: rgba(255, 255, 255, 0.7);
    border-left: 0;
    border-bottom: 0;
    margin-left: -60px;
  }
`

