const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
      flowbite.content()
  ],
  theme: {
    extend: {
        screens: {         
            'xmd': {'max': '767px'},
           'sm': {'max': '500px'},
            'xsm': {'max': '400px'}

      },
    },
  },
  darkMode: "class",
  plugins: [
          require("tw-elements/plugin.cjs"),
             flowbite.plugin(),
           ]
}
