import type { Config as TailwindConfig } from "tailwindcss";
// import daisyui from "daisyui";

// Extend TailwindConfig to include DaisyUI options
interface TailwindConfigWithDaisyUI extends TailwindConfig {
  daisyui?: {
    themes: string[];
  };
}

// Use the extended type
const config: TailwindConfigWithDaisyUI = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  daisyui: {
    themes: ["light", "dark"], // must match the theme names you toggle
  },
};

export default config;
