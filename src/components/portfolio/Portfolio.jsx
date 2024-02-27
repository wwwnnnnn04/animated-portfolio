import { useRef } from 'react';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
  {
    id: 1,
    title: 'Online platform for learning programming languages',
    img: '/project1.jpg',
    src: 'https://github.com/wwwnnnnn04/vscript_beta',
  },
  {
    id: 2,
    title: 'Book finder',
    img: '/project2.jpg',
    src: 'https://github.com/wwwnnnnn04/react-book',
  },
];
const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    //offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className='container'>
        <div className='wrapper'>
          <img src={item.img} alt='project' ref={ref} />
          <motion.div className='textContainer' style={{ y: y }}>
            <h2>{item.title}</h2>
            <a href={item.src}>
              <button>See code</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>My React Projects</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className='progressBar'
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
