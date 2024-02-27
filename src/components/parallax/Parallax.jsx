import { useRef } from 'react';
import './parallax.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  return (
    <div
      className='parallax'
      ref={ref}
      style={{
        background:
          type === 'education'
            ? 'linear-gradient(180deg,  rgb(34, 3, 45),  rgb(111, 47, 134))'
            : 'linear-gradient(180deg,  rgb(34, 3, 45),  rgb(123, 8, 164))',
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === 'education' ? 'Education' : 'Projects'}
      </motion.h1>
      <motion.div className='mountains'></motion.div>
      <motion.div style={{ y: yBg }} className='planets'></motion.div>
      <motion.div style={{ x: yBg }} className='starts'></motion.div>
    </div>
  );
};
