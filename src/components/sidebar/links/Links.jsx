import { motion } from 'framer-motion';

export const Links = () => {
  const items = ['Homepage', 'Education', 'Projects', 'Contact'];
  return (
    <div className='links'>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </div>
  );
};
