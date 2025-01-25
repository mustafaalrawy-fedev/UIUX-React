import { useState } from 'react';
import { useSelector } from 'react-redux';
import PricingPage from '../../Components/PricingPage/PricingPage';
import PricingTable from '../../Components/PricingPage/PricingTable';
import PricingPlans from '../../Components/PricingPage/PricingPlans';

const Pricing = () => {
  const { currentColor } = useSelector((state) => state.image);
  const [activeBtn, setActiveBtn] = useState(true);
  return (
    <>
      <section className='container flex items-center justify-center w-full h-fit my-60'>
        <article className='w-full'>
          <PricingPage
            currentColor={currentColor}
            activeBtn={activeBtn}
            setActiveBtn={setActiveBtn}
          />
          <PricingPlans currentColor={currentColor} activeBtn={activeBtn} />
          <PricingTable activeBtn={activeBtn} />
        </article>
      </section>
    </>
  );
};

export default Pricing;
