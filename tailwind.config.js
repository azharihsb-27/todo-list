/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#F9FBFA',
      black: '#212121',
      gray: '#E6EAF3',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        smHeading: '1.5rem',
        lgHeading: '2rem',
        sm: '0.75rem',
        lg: '1rem',
      },
    },
  },
  plugins: [daisyui],
};
