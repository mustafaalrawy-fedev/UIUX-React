import { useSelector } from 'react-redux';
import AboutUsArticle from './AboutUsArticle';
import OurSponsorsSection from './OurSponsorsSection';
// import Footer from '../footer/Footer';

const HomePage = () => {
  const { currentColor } = useSelector((state) => state.image);

  return (
    <>
      <AboutUsArticle currentColor={currentColor} />
      <OurSponsorsSection currentColor={currentColor} />
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
