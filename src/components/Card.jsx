import { motion } from "motion/react";

const Card = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <motion.img
      className="
        absolute
        w-14
        md:w-16
        lg:w-20
        cursor-grab
        select-none
        drop-shadow-xl
      "
      src={image}
      style={style}
      whileHover={{ scale: 1.08 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    />
  ) : (
    <motion.div
      className="
        absolute
        px-5
        py-3
        text-lg
        rounded-2xl
        bg-storm/90
        backdrop-blur-md
        ring-1
        ring-white/10
        text-white
        shadow-xl
        cursor-grab
        whitespace-nowrap
      "
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

export default Card;