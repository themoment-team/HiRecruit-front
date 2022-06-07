type ColorToken = 'white' | 'black' | 'gray' | 'paragraph' | 'blue' | 'warning';

type ColorTheme = {
  scheme: Record<ColorToken, string>;
};

const pallete: Readonly<ColorTheme> = {
  scheme: {
    white: '#fff',
    black: '#000',
    gray: '#f4f4f4',
    paragraph: '#333',
    blue: '#3d9cf7',
    warning: '#F5A524',
  },
};

export default pallete;
