import { motion, AnimatePresence } from 'motion/react';

const MobileMenuIcon = ({ isOpen, setIsOpen, currentColor }) => {
  return (
    <>
      <div>
        <AnimatePresence>
          {isOpen ? (
            <motion.svg
              initial={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className='cursor-pointer outline-0 select-none'
              width='24'
              height='16'
              viewBox='0 0 72 48'
              fill={`var(${currentColor})`}
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0 48H52V40H0V48ZM0 28H40V20H0V28ZM0 0V8H52V0H0ZM72 38.36L57.68 24L72 9.64L66.36 4L46.36 24L66.36 44L72 38.36Z'
                fill={`var(${currentColor})`}
              />
            </motion.svg>
          ) : (
            <motion.svg
              initial={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className='cursor-pointer outline-0 select-none'
              width='24'
              height='16'
              viewBox='0 0 24 16'
              fill={`var(${currentColor})`}
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0 16H24V13.3333H0V16ZM0 9.33333H24V6.66667H0V9.33333ZM0 0V2.66667H24V0H0Z'
                fill={`var(${currentColor})`}
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default MobileMenuIcon;
