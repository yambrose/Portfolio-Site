/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      // Build your palette here
      "blueberry": {
        50: "#e4e4e7",
        100: "#cacbd0",
        200: "#b1b2ba",
        300: "#9899a5",
        400: "#808191",
        500: "#696a7e",
        600: "#52536e",
        700: "#3c3d60",
        800: "#292a43",
        900: "#181927",
      },
      "mulberry": {
        50: "#e6e4e7",
        100: "#cdcacf",
        200: "#b6b0b9",
        300: "#9f97a3",
        400: "#8a7e8f",
        500: "#75667c",
        600: "#624e6b",
        700: "#50375a",
        800: "#37263e",
        900: "#201624",
      },
      "rose": {
        50: "#e6e4e5",
        100: "#cfcacc",
        200: "#b9b0b4",
        300: "#a3979d",
        400: "#8f7e86",
        500: "#7c6571",
        600: "#6b4d5c",
        700: "#583648",
        800: "#3d2532",
        900: "#23161d",
      },
      "vermillion": {
        50: "#e6e4e4",
        100: "#cfcac9",
        200: "#b8b1af",
        300: "#a29896",
        400: "#8e7f7c",
        500: "#7a6763",
        600: "#69504a",
        700: "#553a34",
        800: "#3a2824",
        900: "#221715",
      },
      "darkYellow": {
        50: "#e5e5e2",
        100: "#cccbc6",
        200: "#b3b3aa",
        300: "#9b9b8d",
        400: "#848371",
        500: "#6e6d52",
        600: "#595736",
        700: "#434129",
        800: "#2e2d1c",
        900: "#1b1a10",
      },
      "harlequin": {
        50: "#e3e5e2",
        100: "#c8ccc6",
        200: "#adb4ab",
        300: "#939d8f",
        400: "#788673",
        500: "#5e7156",
        600: "#435c38",
        700: "#32452a",
        800: "#23301d",
        900: "#141c11",
      },
      "spring_green": {
        50: "#e2e5e4",
        100: "#c7ccc9",
        200: "#abb4af",
        300: "#909d95",
        400: "#74877c",
        500: "#577162",
        600: "#395d49",
        700: "#2b4637",
        800: "#1e3026",
        900: "#111c16",
      },
      "cerulean": {
        50: "#e3e5e5",
        100: "#c7cccd",
        200: "#acb3b5",
        300: "#919c9f",
        400: "#768589",
        500: "#5b6f74",
        600: "#3d5a61",
        700: "#2d4449",
        800: "#1f2f33",
        900: "#121b1d",
      },
    },
    width: {
      massive: '26rem',
      huge: '30rem',
      biggest: '36rem',
      biggester: '52rem', // Added size
    },
    minWidth: {
      massive: '26rem',
      huge: '30rem',
      biggest: '36rem',
      biggester: '52rem', // Added size
    },
    maxWidth: {
      massive: '26rem',
      huge: '30rem',
      biggest: '36rem',
      biggester: '52rem', // Added size
    },
    height: {
      massive: '26rem',
      huge: '30rem',
      biggest: '36rem',
      biggester: '52rem', // Added size
    },
    minHeight: {
      massive: '26rem',
      huge: '30rem',
      biggest: '36rem',
      biggester: '52rem', // Added size
    },
    maxHeight: {
      massive: '26rem',
      huge: '30rem',
      biggest: '36rem',
      biggester: '52rem', // Added size
    },
    rounded: {
      'massive': '2rem',
      'huge': '3rem',
      'biggest': '4rem',
      'biggester': '6.5rem', // Added size
    },
    textShadow: {
      default: '1px 1px 0 rgba(0, 0, 0, 0.5)',
      md: '2px 2px 0 rgba(0, 0, 0, 0.5)',
      lg: '3px 3px 0 rgba(0, 0, 0, 0.5)',
      none: 'none',
    },
  },
},
plugins: [
  function ({ addUtilities }) {
    const textShadowUtilities = {
      '.text-shadow': {
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
      },
      '.text-shadow-md': {
        textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)',
      },
      '.text-shadow-lg': {
        textShadow: '3px 3px 2px rgba(0, 0, 0, 0.5)',
      },
      '.text-shadow-none': {
        textShadow: 'none',
      },
    }

    addUtilities(textShadowUtilities, ['responsive', 'hover'])
  }
],
}
