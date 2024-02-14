import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "up-down": "moveUpDown 5s ease-in-out infinite",
        gradient: "animatedgradient 6s ease infinite alternate",
      },
      backgroundSize: {
        "300%": "300%",
      },
      keyframes: {
        animatedgradient: {
          "0%": {backgroundPosition: "0% 50%"},
          "50%": {backgroundPosition: "100% 50%"},
          "100%": {backgroundPosition: "0% 50%"},
        },
        moveUpDown: {
          "0%, 100% ": {
            transform: "translateY(0)",
          },
          "  50%": {
            transform: "translateY(20px)",
          },
        },
      },
    },
  },
  daisyui: {
    themes: [
      "halloween",
      {
        mytheme: {
          primary: "#ff00cc", // A vibrant pink for primary actions and elements
          secondary: "#120022", // A dark, almost black purple for secondary elements, blending with black
          accent: "#ff4dd2", // A lighter pink for accentuating elements
          neutral: "#1d1d2c", // A deep, dark shade for neutral backgrounds, close to black
          "base-100": "#2a002e", // A very dark shade of purple/black for base backgrounds
          info: "#0099ff", // Keeping a bright blue for information, as it can complement the black/pink theme
          success: "#00d084", // A green that works well with dark themes
          warning: "#ff7700", // An orange shade for warnings, ensuring visibility
          error: "#ff4081", // A pink/red for errors, fitting the overall color scheme
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
