import { color } from 'csx'

export const CSS = {
  BREAKPOINT_SMALL: 480,
  BREAKPOINT_MEDIUM: 768,
  BREAKPOINT_LARGE: 1000,
  BREAKPOINT_XLARGE: 1200,
  APP_MAX_WIDTH: '1200px',
  FONT_PRIMARY: 'Raleway, Helvetica, sans-serif',
  FONT_SPECIAL: "'Arima Madurai', cursive",
  TEXT_COLOR_PRIMARY: '#333',
  TEXT_COLOR_SECONDARY: '#ccc',
  TEXT_COLOR_TERTIARY: color('#ccc').darken(0.8).toHexString(),
  TEXT_COLOR_H1: '#333',
  TEXT_COLOR_H2: color('#333').lighten(0.1).toHexString(),
  TEXT_COLOR_H3: color('#333').darken(0.05).toHexString(),
  BG_COLOR_PRIMARY: '#ddd',
  BG_COLOR_MENU: '#222822',
  BG_COLOR_MENU_HOVER: color('#222822').lighten(0.2).toHexString(),
  BG_COLOR_FIRST: '#cff09e',
  BG_COLOR_SECOND: '#a8dba8',
  BG_COLOR_THIRD: '#79bd9a',
  BG_COLOR_FOURTH: '#3b8686',
  BG_COLOR_FIFTH: color('#3b8686').darken(0.1).toHexString(),
  BG_COLOR_SIXTH: '#0b486b'
}

export default {
  CSS
}
