import React, { Component } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const transition = { ease: [0.6, 0.01, -0.05, 0.9] };

let shapeVariants = {
  initial: {
    d: `M 219.3765,236.11307 C 161.46738,332.65152 230.78284,402.58577 258.42129,536.7293 286.05973,670.98509 491.70292,556.03699 611.35984,576.80398 754.26814,601.61212 887.6346,747.09331 1013.8721,723.63222 1139.6709,700.17114 1266.8955,567.93592 1217.5411,434.80267 1168.1867,301.66941 1133.0903,165.2808 1022.4269,99.724456 865.58965,5.8464307 653.58524,41.633008 477.33532,86.815245 381.47817,111.39887 284.85329,126.77767 219.3765,236.11307 Z`
  },
  animate: {
    d: `M 219.3765,236.11307 C 161.31965,332.53291 164.06855,500.03435 247.85515,574.36731 339.55858,655.7636 492.39765,533.89341 612.35982,554.63488 755.6327,579.41254 876.25461,763.95562 1015.8989,723.03325 1127.7243,690.29535 1214.5897,552.84103 1220.0875,434.55855 1225.5853,305.06447 1135.4213,165.36782 1024.4755,99.89202 867.2382,6.1293339 654.69294,41.871944 477.99339,86.99867 381.89171,111.55209 285.02033,126.912 219.3765,236.11307 Z`,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear",
      duration: 2,
    },
  },
  exit: 0,
};



export class Home extends Component {
  onClick = (e) => {
    this.setExit(e.target.id)
  }

  setExit = (link) => {
    if (link === "about") {
      shapeVariants.exit = {
        d: `M 465.73792,841.17175 C 664.26461,887.27564 671.97474,694.47262 772.29141,614.74773 887.04808,523.54693 966.26859,528.64669 1078.1298,465.81059 1189.993,402.97449 1122.0122,217.94711 1000.3167,92.997095 878.37344,-31.11022 630.20376,-18.469563 567.75696,92.516811 505.31015,190.99628 534.54171,210.13902 488.69003,295.25546 443.29885,379.51709 399.56934,301.86159 270.74212,406.82919 141.93945,511.79677 267.23455,795.06786 465.73792,841.17175 Z`,
        transition: { duration: 1.1, ...transition },
      }
    } else if (link === "interests") {
      shapeVariants.exit = {
        d: `M 162.049,234.32462 C 149.95162,367.4893 152.40416,458.33448 228.60416,524.63448 325.01565,606.99761 483.50895,457.59439 631.69108,485.85742 761.99108,507.95742 883.08206,781.57855 1010.082,745.07855 1193.776,695.85789 1360.7704,534.51298 1251.1164,344.58665 1165.6473,196.5498 899.15941,211.88053 798.25941,153.48053 655.25941,69.850527 626.56061,-19.851025 468.83601,-23.991906 285.96497,-23.991906 182.71453,75.115327 162.049,234.32462 Z`,
        transition: { duration: 1.1, ...transition },
      }
    }
  }

  render() {
    return (
      <>
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          className="morph-wrap"
        >
          <svg
            className="morph"
            width="1400"
            height="770"
            viewBox="0 0 1400 770"
          >
            <motion.path variants={shapeVariants} />
          </svg>
        </motion.div>
        <main className="content-wrap">
          <motion.div className="content" initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.5, ...transition }}>
            <h1 className="content-title">morphing shapes</h1>
            <Link to={`/about`} className="label" id="about" onClick={this.onClick}>
              abt
            </Link> 
            <Link to={`/interests`} className="label" id="interests" onClick={this.onClick}>
              interests
            </Link>
            <a
              className="label"
              href="https://instagram.com"
            >
              instagram
            </a>
            <a className="label" href="https://twitter.com/">
              twitter
            </a>
          </motion.div>
        </main>
      </>
    );
  }
}

export default Home;
