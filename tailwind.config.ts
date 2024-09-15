import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4E47FF",
        text: "#252432",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, #9403FD 0%, #FF5733 50%, #00ADFE 100%)",
        "opacity-gradient":
          "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)",
        "custom-opacity-gradient":
          "linear-gradient(180deg,  rgba(0, 173, 254, 0) 0%, rgba(255, 87, 51, 0.6) 50%, rgba(148, 3, 253, .8) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
