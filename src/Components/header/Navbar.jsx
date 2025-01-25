import { NavLink } from 'react-router-dom';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  // { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact-us', label: 'Contact Us' },
];

const Navbar = ({ currentColor }) => {
  const handleActiveLink = ({ isActive }) => {
    return {
      backgroundColor: isActive ? `var(${currentColor})` : '',
      color: isActive ? 'white' : `var(${currentColor})`,
      fontWeight: isActive ? 'bold' : 'normal',
      transition: 'background-color 0.3s ease, color 0.3s ease',
    };
  };

  return (
    <>
      <nav className='hidden lg:block relative'>
        <ul className={`flex items-center h-12 bg-white rounded-xl`}>
          {navLinks.map((links) => {
            const { href, label } = links;
            return (
              <li key={label} className={`text-lg h-full rounded-xl`}>
                <NavLink
                  to={href}
                  className={`px-10 font-black h-full flex justify-between items-center w-full rounded-xl outline-0`}
                  style={handleActiveLink}
                >
                  {label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
