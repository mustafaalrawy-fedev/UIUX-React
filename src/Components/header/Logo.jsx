import logoImg from '/image/Logo-image.png';

const Logo = () => {
  return (
    <>
      <img src={logoImg} alt='LogoImg' className='w-28 h-28 object-contain' />
    </>
  );
};

export default Logo;
