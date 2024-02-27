import './education.scss';
import { motion } from 'framer-motion';

const variants = {
  initial: {
    x: -200,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      straggerChildren: 0.1,
    },
  },
};

export const Education = () => {
  return (
    <motion.div
      className='education'
      variants={variants}
      initial='initial'
      whileInView='animate'
    >
      <motion.div className='textContainer' variants={variants}>
        <p>
          You should always <br />
          strive to learn
        </p>
        <hr />
      </motion.div>
      <motion.div className='titleContainer' variants={variants}>
        <div className='title'>
          <img src='/people.jpg' alt='study' />
          <h1>
            <motion.b whileHover={{ color: 'purple' }}>My education</motion.b>{' '}
            and
          </h1>
        </div>
        <div className='title'>
          <h1>
            <motion.b whileHover={{ color: 'purple' }}>courses</motion.b> taken
          </h1>
        </div>
      </motion.div>
      <motion.div className='listContainer' variants={variants}>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Vocational education</h2>
          <p>
            Belarusian State University of Informatics and Radioelectronics
            affiliate Minsk Radioengineering College <br /> Diploma of
            vocational education in Information Technology software <br />
            September 2019 – July 2023 / Minsk, Belarus
          </p>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>University degree</h2>
          <p>
            Belarusian State University of Informatics and Radioelectronics
            <br /> Diploma of vocational education in Software engineering
            <br />
            September 2023 – July 2027 / Distance learning
          </p>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Course "Front-end development"</h2>
          <p>
            Computer Academy STEP
            <br /> Certificate of complited studies in "Front-end development"
            <br />
            February 2020 – January 2021 / Minsk, Belarus
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
