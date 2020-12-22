import React from "react"
import styles from './SVGMail.module.css'

const SVGMail = () => {

  return(
    <div className={styles.container}>
      <svg
        id="gradient-path"
        version="1.1"
        viewBox="0 0 460 300"
        width="350"
        height="180"
      >
        <defs>
          <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="100%" gradientTransform="rotate(25)">
            <stop offset="0%"   stop-color="#458FF6"/>
            <stop offset="100%" stop-color="#3772c4"/>
          </linearGradient>

        </defs>

        <path
          fill='transparent'
          stroke="url(#linear)"
          stroke-width="12"
          stroke-linecap="round"
          className={styles.path}
          d="M399.27 7.24C203.3 7.23 80.82 7.23 31.82 7.23C18.39 7.23 7.51 18.11 7.51 31.54C7.51 83.63 7.51 215.56 7.51 267.64C7.51 281.07 18.39 291.96 31.82 291.96C114.96 291.96 340.05 291.96 423.19 291.96C436.62 291.96 447.51 281.07 447.51 267.64C447.51 212.98 447.51 72.3 447.51 17.38C447.51 8.53 437 3.89 430.46 9.86C389.87 46.9 285.88 141.8 245.47 178.67C235.2 188.04 219.57 188.31 208.98 179.31C186.84 160.49 131.5 113.44 42.95 38.16">
        </path>

      </svg>
    </div>

  )
}
export default SVGMail


//all in one stroke
//
// <path
//   fill="transparent"
//   stroke="#000"
//   stroke-width="8"
//   d="M399.27 7.24C203.3 7.23 80.82 7.23 31.82 7.23C18.39 7.23 7.51 18.11 7.51 31.54C7.51 83.63 7.51 215.56 7.51 267.64C7.51 281.07 18.39 291.96 31.82 291.96C114.96 291.96 340.05 291.96 423.19 291.96C436.62 291.96 447.51 281.07 447.51 267.64C447.51 212.98 447.51 72.3 447.51 17.38C447.51 8.53 437 3.89 430.46 9.86C389.87 46.9 285.88 141.8 245.47 178.67C235.2 188.04 219.57 188.31 208.98 179.31C186.84 160.49 131.5 113.44 42.95 38.16"></path>



// split in 6 strokes
//
// <path
//   fill="transparent"
//   stroke="#05a"
//   stroke-width="8"
//   id="upper-hor"
//   d="M399.27 7.64L310.56 7.64L186.7 7.64L90.1 7.64L46.51 7.64"></path>
// <path
//   fill="transparent"
//   stroke="url(#vertical)"
//   stroke-width="8"
//   id="left-vert"
//   d="M46.51 7.64C37.39 7.64 31.69 7.64 29.41 7.64C17.31 7.64 7.51 17.44 7.51 29.54C7.51 58.45 7.51 130.72 7.51 246.34"></path>
// <path
//   fill="transparent"
//   stroke="url(#linear)"
//   stroke-width="8"
//   id="bottom-hor"
//   d="M7.51 246.34C7.51 259.21 7.51 267.25 7.51 270.46C7.51 282.56 17.31 292.37 29.41 292.37C80.13 292.37 206.93 292.37 409.8 292.37"></path>
// <path
//   fill="transparent"
//   stroke="url(#vertical)"
//   stroke-width="8"
//   id="right-vert"
//   d="M409.8 292.37C418.23 292.37 423.5 292.37 425.6 292.37C437.7 292.37 447.51 282.56 447.51 270.46C447.51 238.73 447.51 159.38 447.51 32.42"></path>
// <path
//   fill="transparent"
//   stroke="url(#rotate-up)"
//   stroke-width="8"
//   id="right-flap"
//   d="M447.51 32.54C447.51 23.52 447.51 17.88 447.51 15.63C447.51 7.65 438.04 3.48 432.15 8.85C408.47 30.46 349.25 84.5 254.51 170.96"></path>
// <path
//   fill="transparent"
//   stroke="url(#rotate-down)"
//   stroke-width="8"
//   id="left-flap"
//   d="M254.71 170.86C249.4 175.7 246.08 178.73 244.76 179.94C235.01 188.83 220.18 189.09 210.13 180.55C187.86 161.62 132.2 114.3 43.15 38.6">
// </path>
