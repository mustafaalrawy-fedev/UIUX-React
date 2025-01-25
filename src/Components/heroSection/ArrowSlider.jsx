import { motion } from 'motion/react';

const ArrowSlider = ({ imageIdx, imagesLen, currentColor, handleDotClick }) => {
  const handleNextClick = () => {
    if (imageIdx < imagesLen - 1) {
      handleDotClick(imageIdx + 1);
    }
  };

  const handlePrevClick = () => {
    if (imageIdx > 0) {
      handleDotClick(imageIdx - 1);
    }
  };

  return (
    <>
      {/* Arrow Left */}
      <motion.svg
        whileHover={{
          scale: imageIdx > 0 ? 1.5 : 1,
          fill: imageIdx > 0 ? `var(${currentColor})` : '#FFFFFF',
          transition: { ease: 'circInOut' },
        }}
        whileTap={{ scale: 1.1 }}
        className={`hidden lg:block absolute top-[50%] -translate-y-[50%] left-16 outline-0 z-20 ${
          imageIdx === 0
            ? 'cursor-not-allowed opacity-50'
            : 'cursor-pointer opacity-100'
        }`}
        onClick={handlePrevClick}
        width='35'
        height='35'
        viewBox='0 0 30 74'
        fill='#FFFFFF'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M29.64 64.6044L11.32 37L29.64 9.39559L24 0.915802L0 37L24 73.0842L29.64 64.6044Z'
          fill={currentColor}
        />
      </motion.svg>

      {/* Arrow Right */}
      <motion.svg
        whileHover={{
          scale: imageIdx < imagesLen - 1 ? 1.5 : 1,
          fill: imageIdx < imagesLen - 1 ? `var(${currentColor})` : '#FFFFFF',
          transition: { ease: 'circInOut' },
        }}
        whileTap={{ scale: 1.1 }}
        className={`hidden lg:block absolute top-[50%] -translate-y-[50%] right-16 outline-0 z-20 ${
          imageIdx === imagesLen - 1
            ? 'opacity-30 cursor-not-allowed'
            : 'opacity-100 cursor-pointer'
        }`}
        onClick={handleNextClick}
        width='35'
        height='35'
        viewBox='0 0 30 74'
        fill='#FFFFFF'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0.359863 64.6044L18.6799 37L0.359863 9.39559L5.99986 0.915802L29.9999 37L5.99986 73.0842L0.359863 64.6044Z'
          fill={currentColor}
        />
      </motion.svg>
    </>
  );
};

export default ArrowSlider;
