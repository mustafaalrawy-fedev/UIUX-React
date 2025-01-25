import { useDispatch, useSelector } from 'react-redux';
import { getImageIdx, getImgColor } from '../../store/imageSlice/imageSlice';
import ImageSlider from '../../Components/heroSection/ImageSlider';
import ArrowSlider from '../../Components/heroSection/ArrowSlider';

const HeroSection = () => {
  const { url, imagesLen, imageIdx, currentColor } = useSelector(
    (state) => state.image
  );
  const dispatch = useDispatch();

  const handleDotClick = (index) => {
    dispatch(getImageIdx(index));
    dispatch(getImgColor(index));
  };

  return (
    <>
      <section className='relative top-0 left-0 w-full h-screen'>
        {url.map((img, index) => {
          return (
            <img
              loading='lazy'
              key={index}
              src={img}
              alt={`heroImg-${index}`}
              className={`w-[100vw] h-[100vh] object-cover absolute transition duration-500 ${
                imageIdx === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          );
        })}
        <ImageSlider
          url={url}
          imageIdx={imageIdx}
          handleDotClick={handleDotClick}
          currentColor={currentColor}
        />
        <ArrowSlider
          imageIdx={imageIdx}
          imagesLen={imagesLen}
          handleDotClick={handleDotClick}
          currentColor={currentColor}
        />
        <main className='absolute top-[50%] left-5 md:left-12 lg:left-32 -translate-y-[50%] z-[12]'>
          <h1 className='text-white text-5xl lg:text-7xl mb-5'>Hero Title</h1>
          <h3 className='text-(--subTitle-color) font-bold'>
            Hero Sub-title Description
          </h3>
        </main>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent z-10'></div>
      </section>
    </>
  );
};

export default HeroSection;
