import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  // { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact-us', label: 'Contact Us' },
];

const SideMap = () => {
  return (
    <>
      <section className='w-full md:w-1/3'>
        <main className='font-bold mb-10 text-start md:text-center'>
          <h1 className='text-white'>SideMap</h1>
          <h3 className='text-(--subTitle-color)'>All Our Pages</h3>
        </main>
        <nav>
          <ul className='flex flex-col items-start md:items-center gap-4 text-white font-bold'>
            {navLinks.map((link) => {
              const { href, label } = link;
              return (
                <motion.li whileHover={{ x: 10 }} key={label}>
                  <Link
                    to={href}
                    className='relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-1 after:bg-white after:transition-all after:duration-500 hover:after:w-full'
                  >
                    {label}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>
      </section>
    </>
  );
};

export default SideMap;
