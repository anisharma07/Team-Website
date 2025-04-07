/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        modal: "#1f2937",
        purpleSecondary: "#BEA5FF",
        blueSecondary: "#4ED4FF",
        pinkScrollbar: "#9b75ff",
        eventGreen: "#00FFAB",
        eventRed: "#FF4545",
      },

      fontFamily: {
        abc: ["Londrina Outline", "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
        aldrich: ['"Aldrich"', '"Poppins"', "sans-serif"],
        press2P: ['"Press Start 2P"', "sans-serif"],
        spaceMono: ['"Space Mono"', "monospace"],
        spaceGrotesk: ['"Space Grotesk"', "sans-serif"],
        digitalNumbers: ["digital-clock-font", "poppins", "sans-serif"],
        cyberpunk: ["cyberpunk-font", '"Press Start 2P"', "sans-serif"],
      },

      screens: {
        xxs: { max: "320px" },
        ixs: { max: "400px" },
        sssm: { max: "440px" },
        ssm: { max: "786px" },
        rssm: { min: "787px" },
        sm: { max: "769px" },
        msmd: { min: "786px", max: "886px" },
        md: { max: "1012px" },
        lg: { max: "1199px" },
        xl: { max: "1699px" },
      },
    },
  },
  plugins: [],
};
