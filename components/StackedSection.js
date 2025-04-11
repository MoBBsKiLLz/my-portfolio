// components/StackedSection.js
import { motion } from "framer-motion";

export default function StackedSection({ children, sectionId }) {
  return (
    <motion.section
      id={sectionId}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen w-full flex items-center justify-center px-0 py-0"
    >
      <div className="w-full max-w-4xl">{children}</div>
    </motion.section>
  );
}
