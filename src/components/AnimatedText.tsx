"use client";

import { TypeAnimation } from "react-type-animation";

const AnimatedText = () => {
  return (
    <TypeAnimation
      sequence={["I'm a Frontend Developer", 2000, "I'm a Web Developer", 2000]}
      speed={50}
      repeat={Infinity}
    />
  );
};

export default AnimatedText;
