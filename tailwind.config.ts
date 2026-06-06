import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rakuten: {
          red: "#BF0000",
          lightred: "#E60012",
          gold: "#F5A623",
        },
      },
      fontFamily: {
        sans: ["Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
