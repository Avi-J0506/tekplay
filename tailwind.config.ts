import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tekPlay: {
          primary: "#121212",
          pink: "#FF00B8",
          cyan: "#00FFFF",
          yellow: "#FAFF00",
          red: "#FF0000",
          purple: "#AD00FF",
          orange: "#FFC700",
        },
      },
      fontFamily: {
        DMSans : ['DM Sans', 'sans-serif'],
        PlayfairDisplay : ['Playfair Display', 'sans-serif'],
      }
    },
  },
  plugins: [],
  
}
export default config
