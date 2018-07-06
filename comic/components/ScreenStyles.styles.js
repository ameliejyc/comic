import styled, { css } from 'styled-components'
import { Dimensions } from 'react-native'
import { base } from '../comicTheme'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width
const deviceScale = Dimensions.get('window').scale
const maxWidthMobile = 812

// mobile aspect ratios are 16:9
// tablet aspect ratios are 4:3
const mobileAspectRatioHeightForTablet = (windowWidth / 16) * 9
const tabletPaddingforMobileAspectRatio = (windowHeight - mobileAspectRatioHeightForTablet) / 2

const commonStyles = css`
  flex: 1;
  overflow: hidden;
`

export const FullScreenWrapper = styled.View`
  background-color: ${base.background};
  padding: ${windowWidth > maxWidthMobile ? `${tabletPaddingforMobileAspectRatio}px 20px` : '20px'};
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
  box-shadow: 0 8px 0 ${base.shadow};
`

export const VerticalHalfRight = styled.View`
  margin-left: 10px;
  ${commonStyles};
  box-shadow: 0 8px 0 ${base.shadow};
`

export const HorizontalHalfTop= styled.View`
  margin-bottom: 10px;
  ${commonStyles};
`

export const HorizontalHalfBottom = styled.View`
  margin-top: 10px;
  ${commonStyles};
`

export const LeftThird = styled.View`
  margin-right: 10px;
  ${commonStyles};
`

export const MiddleThird = styled.View`
  margin: 0 10px;
  ${commonStyles};
`

export const RightThird = styled.View`
  margin-left: 10px;
  ${commonStyles};
`

export const TopRightQuarter = styled.View`
  margin: 0 0 10px 10px;
  ${commonStyles};
`

export const TopLeftQuarter = styled.View`
  margin: 0 10px 10px 0;
  ${commonStyles};
`

export const BottomRightQuarter = styled.View`
  margin: 10px 0 0 10px;
  ${commonStyles};
`

export const BottomLeftQuarter = styled.View`
  margin: 10px 10px 0 0;
  ${commonStyles};
`

export const BottomLeftThird = styled.View`
  margin: 10px 10px 0 0;
  ${commonStyles};
`

export const BottomMiddleThird = styled.View`
  margin: 10px 10px 0;
  ${commonStyles};
`

export const BottomRightThird = styled.View`
  margin: 10px 0 0 10px;
  ${commonStyles};
`

export const TopLeftThird = styled.View`
  margin: 0 10px 10px 0;
  ${commonStyles};
`

export const TopMiddleThird = styled.View`
  margin: 0 10px 10px;
  ${commonStyles};
`

export const TopRightThird = styled.View`
  margin: 0 0 10px 10px;
  ${commonStyles};
`


