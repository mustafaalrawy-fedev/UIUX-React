import { Outlet } from 'react-router-dom';
import Header from '../../Components/header/Header';
import Footer from '../../Components/footer/Footer';

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
