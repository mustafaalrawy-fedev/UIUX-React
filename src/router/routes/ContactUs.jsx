import { useSelector } from 'react-redux';

const ContactUs = () => {
  const { currentColor } = useSelector((state) => state.image);
  return (
    <>
      <section className='container w-full h-full my-50 flex flex-col justify-center items-center gap-5'>
        <main className='text-center font-bold'>
          <h1 style={{ color: `var(${currentColor})` }} className='text-5xl'>
            Contact Us
          </h1>
          <h6 className='text-(--subTitle-color) mt-3'>
            Our Details To Communicate With Us
          </h6>
        </main>
        <article className='w-full grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20 text-center'>
          <aside className='flex flex-col justify-center items-center'>
            {/* icon */}
            <svg
              width='56'
              height='80'
              viewBox='0 0 56 80'
              fill={currentColor}
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                style={{ fill: `var(${currentColor})` }}
                d='M28 0C12.52 0 0 12.52 0 28C0 49 28 80 28 80C28 80 56 49 56 28C56 12.52 43.48 0 28 0ZM28 38C22.48 38 18 33.52 18 28C18 22.48 22.48 18 28 18C33.52 18 38 22.48 38 28C38 33.52 33.52 38 28 38Z'
                fill={currentColor}
              />
            </svg>
            <h1 className='text-xl font-bold text-(--subTitle-color) mb-4 mt-2'>
              Address
            </h1>
            <h6 className='text-md font-bold text-(--subTitle-color)'>
              Portwefiq Suez-Egypt
            </h6>
          </aside>
          <aside className='flex flex-col justify-center items-center'>
            {/* icon */}
            <svg
              className='w-14 h-20'
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill={currentColor}
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                style={{ fill: `var(${currentColor})` }}
                d='M30.2222 16C29.7481 16 29.3262 15.8293 28.9564 15.488C28.5855 15.1479 28.3704 14.7259 28.3111 14.2222C27.9259 11.4667 26.7633 9.11822 24.8231 7.17689C22.8818 5.23674 20.5333 4.07407 17.7778 3.68889C17.2741 3.62963 16.8521 3.42222 16.512 3.06667C16.1707 2.71111 16 2.28148 16 1.77778C16 1.27407 16.1778 0.851555 16.5333 0.510222C16.8889 0.170074 17.3037 0.0296295 17.7778 0.0888888C21.5111 0.503704 24.6963 2.02963 27.3333 4.66667C29.9704 7.3037 31.4963 10.4889 31.9111 14.2222C31.9704 14.6963 31.8293 15.1111 31.488 15.4667C31.1479 15.8222 30.7259 16 30.2222 16ZM22.8 16C22.4148 16 22.0741 15.8667 21.7778 15.6C21.4815 15.3333 21.2593 14.9778 21.1111 14.5333C20.8741 13.6741 20.4225 12.9108 19.7564 12.2436C19.0892 11.5775 18.3259 11.1259 17.4667 10.8889C17.0222 10.7407 16.6667 10.5185 16.4 10.2222C16.1333 9.92593 16 9.57037 16 9.15555C16 8.56296 16.2074 8.08119 16.6222 7.71022C17.037 7.34044 17.4963 7.21481 18 7.33333C19.6593 7.71852 21.0892 8.51081 22.2898 9.71022C23.4892 10.9108 24.2815 12.3407 24.6667 14C24.7852 14.5037 24.6519 14.963 24.2667 15.3778C23.8815 15.7926 23.3926 16 22.8 16ZM30.1333 32C26.3111 32 22.5855 31.1479 18.9564 29.4436C15.3262 27.7404 12.1114 25.4886 9.312 22.688C6.51141 19.8886 4.25956 16.6738 2.55644 13.0436C0.852148 9.41452 0 5.68889 0 1.86667C0 1.33333 0.177778 0.888889 0.533333 0.533333C0.888889 0.177778 1.33333 0 1.86667 0H9.06667C9.48148 0 9.85185 0.133333 10.1778 0.4C10.5037 0.666667 10.6963 1.00741 10.7556 1.42222L11.9111 7.64444C11.9704 8.05926 11.9633 8.43674 11.8898 8.77689C11.8151 9.11822 11.6444 9.42222 11.3778 9.68889L7.11111 14.0444C8.35556 16.1778 9.91111 18.1778 11.7778 20.0444C13.6444 21.9111 15.7037 23.5259 17.9556 24.8889L22.1333 20.7111C22.4 20.4444 22.7484 20.2441 23.1787 20.1102C23.6077 19.9775 24.0296 19.9407 24.4444 20L30.5778 21.2444C30.9926 21.3333 31.3333 21.533 31.6 21.8436C31.8667 22.1553 32 22.5185 32 22.9333V30.1333C32 30.6667 31.8222 31.1111 31.4667 31.4667C31.1111 31.8222 30.6667 32 30.1333 32Z'
                fill={currentColor}
              />
            </svg>
            <h1 className='text-xl font-bold text-(--subTitle-color) mb-4 mt-2'>
              Phone
            </h1>
            <h6 className='text-md font-bold text-(--subTitle-color)'>
              01030037976
            </h6>
          </aside>
          <aside className='flex flex-col justify-center items-center'>
            {/* icon */}
            <svg
              width='40'
              height='33'
              viewBox='0 0 40 33'
              fill={currentColor}
              xmlns='http://www.w3.org/2000/svg'
              className='w-14 h-20'
            >
              <path
                style={{ fill: `var(${currentColor})` }}
                d='M36 0.5H4C1.8 0.5 0.02 2.3 0.02 4.5L0 28.5C0 30.7 1.8 32.5 4 32.5H36C38.2 32.5 40 30.7 40 28.5V4.5C40 2.3 38.2 0.5 36 0.5ZM36 8.5L20 18.5L4 8.5V4.5L20 14.5L36 4.5V8.5Z'
                fill={currentColor}
              />
            </svg>

            <h1 className='text-xl font-bold text-(--subTitle-color) mb-4 mt-2'>
              Email
            </h1>
            <h6 className='text-md font-bold text-(--subTitle-color)'>
              mustafaalrawyfedev@gmail.com
            </h6>
          </aside>
        </article>
      </section>
    </>
  );
};

export default ContactUs;
