import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { IconMath, IconPlusEqual } from "@tabler/icons-react";
import { theme } from "@tailwindConfig";

type Props = { scrolled: boolean };

const ScrollProgressComponent = ({ scrolled }: Props) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const { colors } = theme as any;

  // Calculate the icon's position based on the scroll progress
  const iconPosition = useTransform(scaleX, (value) => `${value * 100}%`);

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        height: "5px",
        display: "flex",
        alignItems: "center",
        zIndex: 20,
        marginTop: "",
      }}
    >
      <motion.div
        className="progress-bar"
        style={{
          scaleX,
          left: 0,
          right: 0,
          backgroundColor: colors.primary.DEFAULT,
          position: "fixed",
          height: "5px",
          transformOrigin: "0%",
          zIndex: 20,
        }}
      />
      <motion.div style={{ position: "absolute", left: iconPosition }}>
        <IconMath
          className={`bg-primary p-1 rounded-full text-white transition ${
            scrolled ? "w-6 h-6 opacity-100" : "w-0 h-0 opacity-0"
          }`}
        />{" "}
        {/* replace with your actual Icon component */}
      </motion.div>
    </div>
  );
};

export default ScrollProgressComponent;
