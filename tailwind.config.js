module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#000',
      'purple': '#A977FE',
      'light-purple': '#ccaeff',
      'dark-purple': '#7f36ff',
      'grey': '#e2e8f0',
      'medium-grey': '#bbbbbc',
      'dark-grey': '#7B7B7C',
      'transparent': '#FFFFFF80',
      'link': '#0000EE',
      'red': '#ff2052'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
}