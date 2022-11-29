const theme = {
  breakpoints: {
    sm: 320,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  },
  colors: {
    BLUE: '#3A7CA5',
    BLUE_100: '#75A3C0',
    BLUE_200: '#9CBED2',
    BLUE_300: '#4F7D9A',
    BLUE_400: '#5C7D92',
    BLUE_500: '#347095',
    BLUE_600: '#295774',
    BLUE_700: '#173242',
    LIGHT_BLUE: '#81C3D7',
    LIGHT_BLUE_100: '#A7D5E3',
    LIGHT_BLUE_200: '#C0E1EB',
    LIGHT_BLUE_300: '#80AEBD',
    LIGHT_BLUE_400: '#80A0AB',
    LIGHT_BLUE_500: '#74AFC1',
    LIGHT_BLUE_600: '#5A8997',
    LIGHT_BLUE_650: '#3E5E65',
    LIGHT_BLUE_700: '#344E56',
    YELLOW: '#FFAB00',
    YELLOW_100: '#FFC44C',
    YELLOW_200: '#FFD580',
    YELLOW_300: '#D99D26',
    YELLOW_400: '#BF943F',
    YELLOW_500: '#E59A00',
    YELLOW_600: '#B37800',
    YELLOW_700: '#664400',
    ORANGE: '#FF7F0E',
    ORANGE_100: '#FFA556',
    ORANGE_200: '#FFBF86',
    ORANGE_300: '#D97F30',
    ORANGE_400: '#BF7E46',
    ORANGE_500: '#E5720D',
    ORANGE_600: '#B3590A',
    ORANGE_700: '#663306',
    ERROR: '#F03D3E',
    ERROR_100: '#F57778',
    ERROR_200: '#F89E9E',
    ERROR_250: '#F9C8C8',
    ERROR_300: '#CE5151',
    ERROR_400: '#B85E5E',
    ERROR_500: '#D83738',
    ERROR_600: '#A82B2B',
    ERROR_700: '#601819',
    SUCCESS: '#5BB14D',
    SUCCESS_100: '#8CC882',
    SUCCESS_200: '#ADD8A6',
    SUCCESS_300: '#66A25C',
    SUCCESS_400: '#6D9766',
    SUCCESS_500: '#529F45',
    SUCCESS_600: '#407C36',
    SUCCESS_700: '#24471F',
    NOTIFICATION: '#3959FF',
    NOTIFICATION_100: '#748BFF',
    NOTIFICATION_200: '#9CACFF',
    NOTIFICATION_300: '#4E64D9',
    NOTIFICATION_400: '#5C6CBF',
    NOTIFICATION_500: '#3350E5',
    NOTIFICATION_600: '#283EB3',
    NOTIFICATION_700: '#172466',
    GREYSCALE_WHITE: '#FFFFFF',
    GREYSCALE_OFF_WHITE: '#F0EDEE',
    GREYSCALE_GREY: '#7F7E7F',
    GREYSCALE_CHARCOAL: '#474747',
    GREYSCALE_OFF_BLACK: '#1C1C1C',
    GREYSCALE_BLACK: '#000000',
  },
  fonts: {
    headline: 'Abel',
    normal: 'Nunito Sans',
  },
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
} as const;

export type ThemeType = typeof theme;
export default theme;
