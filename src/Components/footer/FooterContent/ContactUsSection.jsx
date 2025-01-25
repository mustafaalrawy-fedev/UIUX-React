import { motion } from 'motion/react';

const ContactUsSection = ({ currentColor }) => {
  return (
    <>
      <section className='w-full md:w-1/3'>
        <main className='font-bold mb-10'>
          <h1 className='text-white'>Contact Us</h1>
          <h3 className='text-(--subTitle-color)'>Sent Us a Message</h3>
        </main>
        <form className='flex flex-col gap-5 justify-between'>
          <input
            className='bg-white p-2 px-4 w-full md:w-4/5 rounded-md outline-0'
            placeholder='Full Name'
            type='text'
          />
          <input
            className='bg-white p-2 px-4 w-full md:w-4/5 rounded-md outline-0'
            placeholder='Email'
            type='text'
          />
          <textarea
            className='bg-white p-2 px-4 h-40 w-full rounded-md outline-0'
            placeholder='Your Feedback'
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.85 }}
            style={{ backgroundColor: `var(${currentColor})` }}
            className='btn'
            onClick={(e) => e.preventDefault()}
          >
            Submit
          </motion.button>
        </form>
      </section>
    </>
  );
};

export default ContactUsSection;
