import { useSelector } from 'react-redux';
import AboutUsHero from './AboutUsHero';
import WhoAreWeSection from './WhoAreWeSection';
import FastFacts from './FastFacts';
import Founders from './Founders';
// import Footer from '../footer/Footer';

const AboutUsPage = () => {
  const { currentColor } = useSelector((state) => state.image);
  return (
    <>
      <AboutUsHero currentColor={currentColor} />
      <WhoAreWeSection currentColor={currentColor} />
      <FastFacts currentColor={currentColor} />
      <Founders currentColor={currentColor} />
      {/* <Footer /> */}
    </>
  );
};

export default AboutUsPage;
