/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      black: '#000000',
      white: '#FFFFFF',
      grey: '#EEEEEE',
    },
    backgroundColor:{
      black: '#000000',
      white: '#FFFFFF',
      grey: '#EEEEEE',
    },
    textColor:{
      black: '#000000',
      white: '#FFFFFF',
      grey: '#EEEEEE',
    },
    fontSize: {
      'title1': ['6.25rem', {
        lineHeight: '7.5rem',
        fontWeight: '500',
      }],
      'title1-m': ['3.75rem', {
        lineHeight: '5.2rem',
        fontWeight: '500',
      }],
      'title2': ['3.75rem', {
        lineHeight: '5.2rem',
        fontWeight: '500',
      }],
      'title2-m': ['2.75rem', {
        lineHeight: '3.875rem',
        fontWeight: '500',
      }],
      'title3': ['2rem', {
        lineHeight: '3rem',
        fontWeight: '500',
      }],
      'title4': ['1.188rem', {
        lineHeight: '1.375rem',
        fontWeight: '700',
      }],
      'small-price': ['1.125rem', {
        lineHeight: '1.688rem',
        fontWeight: '400',
      }],
      'breadcrumbs': ['1.125rem', {
        lineHeight: '1.688rem',
        fontWeight: '500',
      }],
      'bread-bold': ['1.125rem', {
        lineHeight: '1.688rem',
        fontWeight: '700',
      }],
      'big-price': ['2rem', {
        lineHeight: '3rem',
        fontWeight: '400',
      }],
      'price-bold': ['2rem', {
        lineHeight: '3rem',
        fontWeight: '700',
      }],
      'menu': ['1.25rem', {
        lineHeight: '1.9rem',
        fontWeight: '500',
      }],
      'paragraph': ['1.25rem', {
        lineHeight: '2rem',
        fontWeight: '400',
      }],
    },
    
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'cart': '-2px 6px 5px 0px rgba(0,0,0,0.25)',
      }
    },
  },
  plugins: [],
}
