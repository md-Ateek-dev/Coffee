import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.99,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    scale: 0.99,
    transition: {
      duration: 0.35,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const PageTransition = ({ children }) => {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full min-h-screen"
    >
      {children}
    </motion.main>
  );
};

export default PageTransition;

