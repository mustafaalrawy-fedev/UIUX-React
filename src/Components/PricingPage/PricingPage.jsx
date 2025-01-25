import PricingTable from './PricingTable';

const PricingPage = ({ currentColor, activeBtn, setActiveBtn }) => {
  return (
    <>
      <main className='text-center'>
        <h1
          className='font-bold text-5xl mb-2'
          style={{ color: `var(${currentColor})` }}
        >
          Pricing Plans
        </h1>
        <h3 className='text-(--subTitle-color)'>
          Try Our Basics Plan Risk Free For 30 Days, Switch Plans or Cancel Any
          Time
        </h3>
        <div className='flex flex-wrap md:flex-nowrap justify-center items-center mt-10'>
          <button
            className={`py-1 px-5 rounded-md w-full md:w-fit cursor-pointer transition duration-300 ${
              activeBtn
                ? 'border border-(--subTitle-color)'
                : 'text-(--subTitle-color) bg-(--sections-bg-color)'
            }`}
            // style={{ backgroundColor: `var(${currentColor})` }}
            onClick={() => setActiveBtn(!activeBtn)}
            disabled={activeBtn ? false : true}
          >
            Annual Pricing
          </button>
          <button
            className={`py-1 px-5 rounded-md w-full md:w-fit cursor-pointer transition duration-300 ${
              activeBtn
                ? 'text-(--subTitle-color) bg-(--sections-bg-color)'
                : 'border border-(--subTitle-color)'
            }`}
            // style={{ backgroundColor: `var(${currentColor})` }}
            onClick={() => setActiveBtn(!activeBtn)}
            disabled={activeBtn ? true : false}
          >
            Monthly Pricing
          </button>
        </div>
      </main>
    </>
  );
};

export default PricingPage;
