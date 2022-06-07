module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backdropBlur: {
        nav: '39px',
      },
      height: {
				"10v": "10vh",
				"20v": "20vh",
				"30v": "30vh",
				"40v": "40vh",
				"50v": "50vh",
				"60v": "60vh",
				"70v": "70vh",
				"80v": "80vh",
				"90v": "90vh",
				"100v": "100vh",
			},
      colors: {
        orange: '#FFEEE5',
        green: '#FAFFF0',
        darkgreen: '#9ACE19',
        purple: '#E5E9FF',
        blue: '#142B69',
        blue2: '#222A72',
        blue3: '#E5F6FF',
        blue4: '#3386E7',
        blue5: '#273B98',
        dark: '#2A3144',
        brightgreen: '#82FF8E'
      },

      boxShadow: {
        card: '0px 4px 76px rgba(0, 0, 0, 0.25);',
        about: '0px 4px 36px #E5E9FF',
        btn: '0 3px 20px 0 rgb(2 43 105 / 28%)',
      },
      spacing: {
        200: "45rem",
        180: "35rem",
        220: "60rem",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
      translate: ['group-hover'],
    },
  },
  plugins: [],
}
