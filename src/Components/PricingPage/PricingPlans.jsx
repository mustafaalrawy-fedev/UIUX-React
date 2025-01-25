import { motion } from 'motion/react';

const pricingInfo = [
  {
    plan: 'Basic Plan',
    description: 'Best For Small Teams And Freelancers.',
    price: 10,
  },
  {
    plan: 'Business Plan',
    description: 'Best For Growing Teams.',
    price: 20,
  },
  {
    plan: 'Enterprise Plan',
    description: 'Best For Large Organizations.',
    price: 40,
  },
];

const PricingPlans = ({ currentColor, activeBtn }) => {
  return (
    <>
      <section className='mt-10'>
        <article className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {pricingInfo.map((planInfo, idx) => {
            const { plan, description, price } = planInfo;
            return (
              <motion.div
                whileHover={{ y: -8 }}
                key={idx}
                className='bg-(--sections-bg-color) p-5 rounded-md'
              >
                <main className='flex justify-between items-center'>
                  <div>
                    <h1 className='text-xl font-bold'>{plan}</h1>
                    <h6 className='text-xs font-bold text-(--subTitle-color)'>
                      {description}
                    </h6>
                  </div>
                  {/* icon */}
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 72 79'
                    fill={currentColor}
                    xmlns='http://www.w3.org/2000/svg'
                    className='ml-1.5'
                  >
                    <path
                      d='M32 78.9V42.3L0 23.8V55.9C0 57.3667 0.35 58.7 1.05 59.9C1.75 61.1 2.73333 62.0667 4 62.8L32 78.9ZM40 78.9L68 62.8C69.2667 62.0667 70.25 61.1 70.95 59.9C71.65 58.7 72 57.3667 72 55.9V23.8L40 42.3V78.9ZM55.9 23.9L67.7 17L40 1.1C38.7333 0.366667 37.4 0 36 0C34.6 0 33.2667 0.366667 32 1.1L24.1 5.6L55.9 23.9ZM36 35.4L47.9 28.6L16.2 10.2L4.2 17.1L36 35.4Z'
                      fill={currentColor}
                      style={{ fill: `var(${currentColor})` }}
                    />
                  </svg>
                </main>
                <div className='flex items-center font-bold my-5'>
                  <h1 className='text-3xl'>
                    ${activeBtn ? price : price * 12}
                  </h1>
                  <span className='ml-2 text-sm self-end text-(--subTitle-color)'>
                    {activeBtn ? 'per month' : 'per year'}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95, y: 0 }}
                  className='py-2 w-full rounded-md text-white font-bold cursor-pointer'
                  style={{ backgroundColor: `var(${currentColor})` }}
                >
                  {idx === 0 ? 'Start Free Trial' : 'Get Started'}
                </motion.button>
              </motion.div>
            );
          })}
        </article>
      </section>
    </>
  );
};

export default PricingPlans;
