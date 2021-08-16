module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backdropBlur: {
        nav: '39px',
      },
      colors: {
        orange: '#FFEEE5',
        green: '#FAFFF0',
        purple: '#E5E9FF',
        blue: '#142B69',
        blue2: '#222A72',
        blue3: '#E5F6FF',
        blue4: '#3386E7',
        blue5: '#273B98',
        dark: '#2A3144',
        'trade-blue3': '#0B1466',
        'trade-green': '#27AE60',
        'community-stroke': '#C7E1FF',
        'community-fill': '#E7CA33',
        'mentor-fill': '#1CEBC6',
        'money-fill': '#9FDFFB',
      },
      boxShadow: {
        card: '0px 4px 76px rgba(0, 0, 0, 0.25);',
        about: '0px 4px 36px #E5E9FF;',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
