import Logo from './Logo';
import MobileNav from './Mobile/MobileNav';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';

const Header = () => {
  const { currentColor } = useSelector((state) => state.image);
  return (
    <>
      <header className='container flex items-center justify-between gap-2 absolute top-5 z-20 max-w-full'>
        <Logo />
        <Navbar currentColor={currentColor} />
        <MobileNav currentColor={currentColor} />
      </header>
    </>
  );
};

export default Header;
