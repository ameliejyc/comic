const comicTheme = {
  palette: {
    white: '#fff',
    black: '#000',
    mediumPurple: '#56227f',
    deepPurple: '#341644',
    yellowTransparent: 'rgba(246, 246, 38, 0.7)',
    whiteTransparent: 'rgba(255, 255, 255, 0.8)',
    blackTransparent: 'rgba(0, 0, 0, 0.4)'
  }
}

comicTheme.base = {
  background: comicTheme.palette.deepPurple,
  narrationBackground: comicTheme.palette.mediumPurple,
  speechBackground: comicTheme.palette.whiteTransparent,
  thoughtBackground: comicTheme.palette.yellowTransparent,
  shadow: comicTheme.palette.blackTransparent
}

comicTheme.text = {
  narration: comicTheme.palette.white,
  character: comicTheme.palette.black
}

module.exports = comicTheme