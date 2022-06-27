type ColorToken =
  | 'white'
  | 'black'
  | 'gray'
  | 'darkgray'
  | 'blue'
  | 'red'
  | 'paragraph'
  | 'warning';

type ColorTheme = {
  scheme: Record<ColorToken, `#${string}`>;
};

const pallete: Readonly<ColorTheme> = {
  scheme: {
    white: '#ffffff',
    black: '#000000',
    gray: '#fafafa',
    darkgray: '#888888',
    blue: '#3d9cf7',
    red: '#F31260',
    paragraph: '#333333',
    warning: '#F5A524',
  },
};

export default pallete;
