// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ["trpc-nuxt"],
  },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "~/assets/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: true,
    config: {
      content: [
        "components/**/*.{vue,js,ts}",
        "pages/**/*.vue",
        "app.{js,ts,vue}",
      ],
      theme: {
        extend: {
          colors: {
            primary: "",
          },
        },
      },
    },
    injectPosition: 0,
    viewer: false,
  },
});
