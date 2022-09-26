module.exports = {
  'content': [
    './pages/**/*.{html,ts,tsx}',
    './components/**/*.{html,ts,tsx}'
  ],
  'theme': {
    'extend': {
      'spacing': {
        'xxx-small': '0.5rem',
        'xx-small': '0.75rem',
        'x-small': '1rem',
        'small': '1.25rem',
        'normal': '1.5rem',
        'medium': '1.75rem',
        'large': '2rem'
      },
      'colors': {
        'primary': 'rgb(51 51 51)',
        'secondary': 'rgb(119 119 119)',
        'accent': 'rgb(125 207 182)'
      },
      'fontSize': {
        'x-small': '0.8rem',
        'small': '0.9rem',
        'normal': '1rem',
        'medium': '1.1rem',
        'large': '1.2rem',
        'x-large': '1.3rem',
        'xx-large': '1.4rem',
        'xxx-large': '1.5rem'
      },
      'borderRadius': {
        'normal': '6px'
      },
      'fontWeight': {
        'normal': '400',
        'medium': '700'
      }
    },
  },
  'plugins': [],
};
