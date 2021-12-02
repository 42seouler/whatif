export const globalColors = {
  fontWhiteColor: '#F2F2F2',
  fontGreyColor: '#969696',
  darkGrey: '#121212',
  buttonBackgroundColor: '#262626',
  rallyGreen: '#1EB980',
  rallyDarkGreen: '#045D56',
  rallyOrange: '#FF6859',
  rallyYellow: '#FFCF44',
  rallyPurple: '#B15DFF',
  rallyBlue: '#72DEFF',
  red: '#ff0000',
  yellow: '#ffff00',
  green: '#008000',
};

export const globalFonts = {
  NanumBarunGothic: 'NanumBarunGothic',
  NanumBarunGothicBold: 'NanumBarunGothicBold',
  NanumBarunGothicLight: 'NanumBarunGothicLight',
  NanumBarunGothicUltraLight: 'NanumBarunGothicUltraLight',
  bmhannaProOtf: 'BMHANNAProOTF',
  bmhannaAirOtf: 'BMHANNAAirOTF',
};

export const Pick = <T, K extends keyof T>(obj: T, keys: K[]) =>
  keys
    .map(key => ({[key]: obj[key]}))
    .reduce((result, value) => ({...result, ...value}), {});

export const PickToArr = <T, K extends keyof T>(obj: T, keys: K[]) =>
  keys.map(key => obj[key]);

export const fonts = {};
