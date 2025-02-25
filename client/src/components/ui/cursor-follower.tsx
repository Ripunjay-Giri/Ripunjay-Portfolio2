import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      {/* Main cursor with enhanced gradient */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          rotate: [0, 180, 360],
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 300,
          rotate: {
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-70 blur-sm" />
      </motion.div>

      {/* Enhanced swirl effect */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          rotate: [360, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 200,
          rotate: {
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 via-purple-500/20 to-pink-500/30 blur-md" />
      </motion.div>

      {/* Enhanced trail effect */}
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 pointer-events-none z-30"
        animate={{
          x: mousePosition.x - 32,
          y: mousePosition.y - 32,
          rotate: [0, -360],
          scale: [0.8, 1, 0.8],
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 150,
          rotate: {
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-tl from-primary/20 via-purple-500/10 to-pink-500/20 blur-xl" />
      </motion.div>
    </>
  );
}