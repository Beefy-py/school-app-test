"use client";

import { useMouse } from "@mantine/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

const BeeCursorFollowerComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { ref, x, y } = useMouse();

  return (
    <div
      ref={ref}
      className=""
      style={{ height: "100vh", width: "100vw", position: "relative" }}
    >
      <motion.div
        ref={ref}
        className="box"
        animate={{ x: x + 100, y: y - 50 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 30,
          restDelta: 0.001,
        }}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          position: "absolute",
          zIndex: 20,
          cursor: "grab",
        }}
      >
        <Image src={"/gifs/bee.gif"} alt="bee" width={30} height={30} />
      </motion.div>
      {children}
    </div>
  );
};

export default BeeCursorFollowerComponent;
