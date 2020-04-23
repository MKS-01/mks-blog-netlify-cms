import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Montserrat",
    "Lora",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
  ],
  bodyFontFamily: ["Yrsa", "Montserrat", "Georgia", "serif"],
})

export const { scale, rhythm, options } = typography
export default typography

// import Typography from "typography"
// import Wordpress2016 from "typography-theme-wordpress-2016"

// Wordpress2016.overrideThemeStyles = () => {
//   return {
//     "a.gatsby-resp-image-link": {
//       boxShadow: `none`,
//     },
//   }
// }

// delete Wordpress2016.googleFonts

// const typography = new Typography(Wordpress2016)

// // Hot reload typography in development.
// if (process.env.NODE_ENV !== `production`) {
//   typography.injectStyles()
// }

// export default typography
// export const rhythm = typography.rhythm
// export const scale = typography.scale
