"use client"

import React from 'react' 
import { motion } from "motion/react"
type ProgressBarProps = {
  progress: number; // value from 0 to 100
};

const page = () => {
   return (
    <div className="App m-12 w-44">
      <ProgressBar progress={50} />
    </div>
  );
}



const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <>
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden relative">
        <motion.div
          className="h-full bg-blue-500 transform-gpu origin-left relative overflow-hidden"
          style={{ scaleX: progress / 100, transformOrigin: "left" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          transition={{ duration: 0.9 }}
        >
          {/* Stripe overlay */}
          <motion.div
            className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:40px_100%]"
            animate={{ backgroundPositionX: ["0%", "100%"] }}
            transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
          />
        </motion.div>
      </div>

      <div className="w-full mt-3 h-4 bg-gray-200 rounded-full overflow-hidden relative">
        <motion.div
          className="h-full bg-blue-500 transform-gpu origin-left relative overflow-hidden"
          style={{ scaleX: progress / 100, transformOrigin: "left" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          transition={{ duration: 0.9 }}
        >
          {/* Bold Blue-White Contrast Stripes */}
          <motion.div
            className="absolute inset-0 bg-[repeating-linear-gradient(152deg,#ffffff33_0px,#ffffff33_10px,transparent_10px,transparent_20px)] bg-[length:40px_100%]"
            animate={{ backgroundPositionX: ["0px", "40px"] }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          />
        </motion.div>
      </div>

      <div className="w-full mt-3 h-4 bg-gray-200 rounded-full overflow-hidden relative">
        <motion.div
          className="h-full bg-blue-500 transform-gpu origin-left relative overflow-hidden"
          style={{ scaleX: progress / 100, transformOrigin: "left" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          transition={{ duration: 0.9 }}
        >
          {/* light reflection */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>
    </>
  );
}; 

export default page