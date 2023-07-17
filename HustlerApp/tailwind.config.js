const konstaConfig = require('konsta/config');
module.exports = konstaConfig({
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/forms")
    ],
    darkMode: "media"
});