import { useRef, useState } from 'react';
import './contact.scss';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export const Contact = () => {
  const ref = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wfpkaha', 'template_rzufuvx', ref.current, {
        publicKey: 'kxxg67swJ7b198mqq',
      })
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };
  return (
    <motion.div
      className='contact'
      variants={variants}
      initial='initial'
      whileInView='animate'
    >
      <motion.div className='textContainer' variants={variants}>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div className='item' variants={variants}>
          <h2>Mail</h2>
          <span>renatatof04@gmail.com</span>
        </motion.div>
        <motion.div className='item' variants={variants}>
          <h2>Adress</h2>
          <span>Saint Petersburg</span>
        </motion.div>
      </motion.div>
      <div className='formContainer'>
        <form ref={ref} onSubmit={sendEmail}>
          <input type='text' placeholder='Name' required name='name' />
          <input type='text' placeholder='Email' required name='email' />
          <textarea rows={8} placeholder='Message' name='message' />
          <button>Submit</button>
          {error && 'Error'}
          {success && 'Success'}
        </form>
      </div>
    </motion.div>
  );
};
