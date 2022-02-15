import React, { Component } from 'react';

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const transition = { ease: [0.6, 0.01, -0.05, 0.9] };

const shapeVariants = {
  initial: {
    d: `M 162.049,234.32462 C 149.95162,367.4893 152.40416,458.33448 228.60416,524.63448 325.01565,606.99761 483.50895,457.59439 631.69108,485.85742 761.99108,507.95742 883.08206,781.57855 1010.082,745.07855 1193.776,695.85789 1360.7704,534.51298 1251.1164,344.58665 1165.6473,196.5498 899.15941,211.88053 798.25941,153.48053 655.25941,69.850527 626.56061,-19.851025 468.83601,-23.991906 285.96497,-23.991906 182.71453,75.115327 162.049,234.32462 Z`,
    scaleX: 1,
    scaleY: 1
  },
  animate: {
    d: `M 142.50794,314.05645 C 130.41056,447.22113 149.16315,489.22741 225.36315,555.52741 321.77464,637.89054 444.42682,550.32003 592.60895,578.58306 722.90895,600.68306 879.84105,739.29543 1006.841,702.79543 1190.535,653.57477 1308.7244,458.05909 1199.0704,268.13276 1113.6013,120.09591 900.82738,187.47284 799.92738,129.07284 656.92738,45.442841 592.38756,22.455673 434.66296,18.314792 251.79192,18.314792 163.17347,154.84716 142.50794,314.05645 Z`,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear",
      duration: 4,
    },
  },
  exit: {
    d: `M 219.3765,236.11307 C 161.46738,332.65152 230.78284,402.58577 258.42129,536.7293 286.05973,670.98509 491.70292,556.03699 611.35984,576.80398 754.26814,601.61212 887.6346,747.09331 1013.8721,723.63222 1139.6709,700.17114 1266.8955,567.93592 1217.5411,434.80267 1168.1867,301.66941 1133.0903,165.2808 1022.4269,99.724456 865.58965,5.8464307 653.58524,41.633008 477.33532,86.815245 381.47817,111.39887 284.85329,126.77767 219.3765,236.11307 Z`,
    transition: { duration: 1.1, ...transition },
  },
};

export class Interests extends Component {
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
            <h3 className="subtitle">interests.</h3>
            <p>absolutely none.</p>
            <Link to={`/`} className="label">← Back</Link>
          </motion.div>
        </main>
      </>
    )
  }
}

export default Interests
