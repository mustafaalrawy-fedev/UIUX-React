import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  // { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact-us', label: 'Contact Us' },
];

const MobileNavLinks = ({ isOpen, currentColor }) => {
  const handleActiveLink = ({ isActive }) => {
    return {
      backgroundColor: isActive ? `var(${currentColor})` : '',
      color: isActive ? '#FFFFFF' : `var(${currentColor})`,
    };
  };
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className='absolute z-50 w-[calc(100%-(40px))] md:w-[calc(100%-(96px))] left-5 md:left-12 top-24 bg-white shadow-2xl rounded-md'
          >
            <ul className='flex flex-col gap-2'>
              {navLinks.map((links) => {
                const { href, label } = links;
                return (
                  <NavLink
                    key={label}
                    to={href}
                    className={'font-bold rounded-md'}
                    style={handleActiveLink}
                  >
                    <motion.li whileHover={{ x: 10 }} className='p-5 '>
                      {label}
                    </motion.li>
                  </NavLink>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavLinks;
