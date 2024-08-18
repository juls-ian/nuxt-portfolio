module.exports = {
  /*this means that tailwind dark mode is not stirred by system
  settings, we control it by setting classes in html/body*/
  darkMode: "class",
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
