import { useSelector } from 'react-redux';
import errorImg from '/image/error-image.png';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const { currentColor } = useSelector((state) => state.image);
  const navigate = useNavigate();
  return (
    <>
      <section className='flex justify-center items-center w-full h-screen'>
        <main className='flex flex-col items-center justify-center'>
          <img src={errorImg} alt='error-image' className='w-40 h-40' />
          <h1 className='text-3xl md:text-5xl font-bold mb-8'>404 Not Found</h1>
          <motion.button
            whileHover={{ scale: 1.1, y: -5, opacity: 0.9 }}
            whileTap={{ scale: 0.95, y: 0, opacity: 1 }}
            className='btn cursor-pointer'
            style={{ backgroundColor: `var(${currentColor})` }}
            onClick={() => navigate(-1)}
          >
            Go Back
          </motion.button>
        </main>
      </section>
    </>
  );
};

export default ErrorPage;
