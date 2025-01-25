import { motion } from 'motion/react';

const ImageSlider = ({ url, imageIdx, currentColor, handleDotClick }) => {
  return (
    <>
      <div className='absolute bottom-10 left-[50%] w-full h-10 flex items-center justify-center  translate-x-[-50%] z-20'>
        {url.map((slide, index) => {
          return (
            <motion.span
              whileHover={{ scale: imageIdx === index ? 1 : 1.3 }}
              key={slide}
              //   className={`w-5 h-5 rounded-full mx-2 cursor-pointer ${
              //     imageIdx === index ? colors[imageIdx] : 'bg-white'
              className={`w-3 h-3 rounded-full mx-1.5 cursor-pointer transition duration-300 ${
                imageIdx === index ? 'transform scale-130' : null
              }`}
              style={{
                backgroundColor:
                  imageIdx === index ? `var(${currentColor})` : 'white',
              }}
              //   className={`w-5 h-5 rounded-full mx-2 cursor-pointer ${
              //     imageIdx === index ? `bg-(${currentColor})` : 'bg-white'
              //   }`}
              //   className={`w-5 h-5 rounded-full mx-2 cursor-pointer ${
              //     imageIdx === index && imageIdx === 0
              //       ? `bg-(--main-color-1)`
              //       : imageIdx === index && imageIdx === 1
              //       ? 'bg-(--main-color-2)'
              //       : imageIdx === index && imageIdx === 2
              //       ? 'bg-(--main-color-3)'
              //       : 'bg-white'
              //   }`}
              onClick={() => handleDotClick(index)}
            ></motion.span>
          );
        })}
      </div>
    </>
  );
};

export default ImageSlider;
