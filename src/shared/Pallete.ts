type ColorToken =
  | 'white'
  | 'black'
  | 'gray'
  | 'darkgray'
  | 'paragraph'
  | 'blue'
  | 'warning';

type ColorTheme = {
  scheme: Record<ColorToken, string>;
};

const pallete: Readonly<ColorTheme> = {
  scheme: {
    white: '#ffffff',
    black: '#000000',
    gray: '#f4f4f4',
    darkgray: '#888888',
    paragraph: '#333333',
    blue: '#3d9cf7',
    warning: '#F5A524',
  },
};

export default pallete;
