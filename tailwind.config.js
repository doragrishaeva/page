/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      text: '#282828',
      highlight: '#8808cb',
      secondary: '#f0f0f0',
      description: '#252525'
    },
    extend: {
     boxShadow: {
        'md': '0px 0px 4px 0px rgba(0, 0, 0, 0.2)',
        'lg': '0px 0px 2px 0px rgba(0, 0, 0, 0.3)',
      },
      spacing: {
        small1: '4px',
        small2: '8px',
        small3: '12px',
        default: '16px',
        medium1: '20px',
        medium2: '24px',
        medium3: '32px',
        large1: '40px',
        large2: '48px',
        large3: '56px'
      },
      height: {
				header: '90px'
			},
      fontSize: {
        title: [
          '60px',
          {
            lineHeight: '70px',
            fontWeight: '600'
          }
        ],
        subtitle: [
          '40px',
          {
            lineHeight: '52px',
            fontWeight: '600'
          }
        ],
        regular: [
          '16px',
          {
            lineHeight: '21px',
            fontWeight: '400'
          }
        ],
        regularPlus: [
          '20px',
          {
            lineHeight: '26px',
            fontWeight: '400'
          }
        ],
      }
    },
  },
  plugins: [],
}

