import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        baseBackground: '#EFF6FF',
        secondBackground: '#DBEAFE',
        counterBackground: '#075985',
        titleColor: '#1E3A8A',
        subTitleColor: '#033b4a',
        navSubitemsBg: '#2C2B2B',
        navSubitemBorder: '#6B7280',
        hoverTextColor: '#94A3B8',
        hoverBgColor: '#0002',
        textOnDarkBg: '#ffffff',
        activityCardText: '#7a8a9e',
      },
    },
  },
  plugins: [],
}
export default config
