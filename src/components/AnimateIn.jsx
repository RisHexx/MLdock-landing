import { motion } from "framer-motion";
import { useRef } from "react";

export default function AnimateIn({
  children,
  delay = 0,
  duration = 0.35,
  y = 16,
  className = "",
}) {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
