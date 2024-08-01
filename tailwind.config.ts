import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      grayscale: {
        80: '80%',
      },
      animation: {
        'slider': 'slider 26s linear infinite',
      },
      keyframes: {
        slider: {
          '100%': { left: '-100%' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
