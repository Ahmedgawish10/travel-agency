const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
      flowbite.content()
  ],
  theme: {
    extend: {
        screens: {         
            'xmd': {'max': '767px'},// Custom sm breakpoint (default is 640px)
           'sm': {'max': '500px'},// Custom sm breakpoint (default is 640px)
            'xsm': {'max': '400px'}// Custom sm breakpoint (default is 640px)

        // Add other custom screen sizes if needed
      },
    },
  },
  darkMode: "class",
  plugins: [
          require("tw-elements/plugin.cjs"),
             flowbite.plugin(),
           ]
}
//حي مكه - شارع السجل المدني - بجوار صيدلية الحجاز - اعلي اسواق الدمرداش