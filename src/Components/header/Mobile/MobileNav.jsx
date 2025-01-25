import { useState } from 'react';
import MobileMenuIcon from './MobileMenuIcon';
import MobileNavLinks from './MobileNavLinks';

const MobileNav = ({ currentColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <article className='block lg:hidden'>
        <MobileMenuIcon
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          currentColor={currentColor}
        />
        <MobileNavLinks isOpen={isOpen} currentColor={currentColor} />
      </article>
    </>
  );
};

export default MobileNav;
