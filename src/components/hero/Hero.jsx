import './hero.scss';
import { motion } from 'framer-motion';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
export const Hero = () => {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div
          className='textContainer'
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          <motion.h2 variants={textVariants}>RENATA ALLAKHVERDIEVA</motion.h2>
          <motion.h1 variants={textVariants}>React developer</motion.h1>
          <motion.div variants={textVariants} className='buttons'>
            <a href='#Contact'>
              <motion.button variants={textVariants}>Contact Me</motion.button>
            </a>
          </motion.div>
        </motion.div>
        <div className='imageContainer'>
          <img src='/hero.png' alt='hero' />
        </div>
      </div>
    </div>
  );
};
