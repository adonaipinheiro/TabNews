const $COLORS_COMMON = {
  primary: 'rgb(36, 41, 47)',
  primaryDark: '#16191d',
  white: '#FFFFFF',
  black: 'rgb(1, 4, 9)',
  green: 'rgb(31, 136, 61)',
  greenDark: '#18682e',
  grayLight: 'rgb(246, 248, 250)',
  grayDark: 'rgb(208, 215, 222)',
  gray300: 'rgb(48, 54, 61)',
  blue: 'rgb(9, 105, 218)',
  blueLight: 'rgb(240, 246, 252)',
  blueLight300: 'rgb(221, 244, 255)',
  pink: 'rgb(255, 235, 233)',
  pinkDark: 'rgb(255, 129, 130, 0.4)',
  red: 'rgb(209, 36, 47)',
  redDark: 'rgb(207, 34, 46)',
  red300: 'rgb(248, 81, 73)',
  redDark300: 'rgb(218, 54, 51)',
  /** O valor da opacidade tem que estar entre 0 e 9 */
  blackWithOpacity: (opacity = 0) =>
    opacity > 10 || opacity < 0 ? '#000' : `#000${opacity}`,
};

const $COLORS_ELEMENTS = {
  link: $COLORS_COMMON.blue,
  headerText: $COLORS_COMMON.blueLight,
};

const $COLORS_LIGHT = {
  text: 'rgb(31, 35, 40)',
  button: $COLORS_COMMON.green,
  buttonRed: $COLORS_COMMON.red,
  background: $COLORS_COMMON.white,
  error: $COLORS_COMMON.pink,
  errorDark: $COLORS_COMMON.pinkDark,
  inputBackground: $COLORS_COMMON.grayLight,
  inputBorder: $COLORS_COMMON.grayDark,
  inputTextError: $COLORS_COMMON.red,
  inputBorderError: $COLORS_COMMON.redDark,
  ...$COLORS_COMMON,
  ...$COLORS_ELEMENTS,
};

// const $COLORS_DARK = {
//   text: 'rgb(230, 237, 243)',
//   button: 'rgb(35, 134, 54)',
//   buttonRed: 'rgb(248, 81, 73)',
//   background: 'rgb(13, 17, 23)',
//   error: 'rgba(248, 81, 73, 0.1)',
//   errorDark: 'rgba(248, 81, 73, 0.4)',
//   inputBackground: $COLORS_COMMON.grayLight,
//   inputBorder: $COLORS_COMMON.grayDark,
//   inputTextError: $COLORS_COMMON.red300,
//   inputBorderError: $COLORS_COMMON.redDark300,
//   ...$COLORS_COMMON,
//   ...$COLORS_ELEMENTS,
// };

export const $COLORS = $COLORS_LIGHT;
