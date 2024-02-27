import { SideBar } from '../sidebar/SideBar';
import './navbar.scss';
import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <SideBar />
      <div className='wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          @www_nnnnn
        </motion.span>
        <div className='social'>
          <a href='https://t.me/www_nnnnn'>
            <img src='/telegram.png' alt='telegram' />
          </a>
          <a href='https://wa.me/79113538218'>
            <img src='/whatsapp.png' alt='whatsapp' />
          </a>
        </div>
      </div>
    </div>
  );
};
