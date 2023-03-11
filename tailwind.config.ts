import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [
    // "components/**/*.{vue,js,ts}",
    // "layouts/**/*.vue",
    // "pages/**/*.vue",
    // "composables/**/*.{js,ts}",
    // "plugins/**/*.{js,ts}",
    // "App.{js,ts,vue}",
    "app.{js,ts,vue}",
    // "Error.{js,ts,vue}",
    // "error.{js,ts,vue}",
    // "content/**/*.md",
  ],
  theme: {
    extend: {
      colors: {
        primary: "",
      },
    },
  },
};
