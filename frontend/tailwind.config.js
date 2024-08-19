/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("tailwindcss-animated")],

  // daisyui: {
  //   themes: [
  //     {
  //       light: {
  //         ...require("daisyui/src/theming/themes")["[data-theme=light]"],
  //         primary: "#ffa41b",
  //       },
  //     },
  //   ],
  // },//i replaced this with the theme above
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00b8ff",

          secondary: "#00ec00",

          accent: "#00bdff",

          neutral: "#03040b",

          "base-100": "#ffffff",

          info: "#00eeff",

          success: "#00c29b",

          warning: "#ff5800",

          error: "#ff708e",
        },
      },
    ],
  },
};
