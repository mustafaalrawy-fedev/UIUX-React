import sponsorImg1 from '/image/sponsorImg1.png';
import sponsorImg2 from '/image/sponsorImg2.png';
import sponsorImg3 from '/image/sponsorImg3.png';
import sponsorImg4 from '/image/sponsorImg4.png';
import sponsorImg5 from '/image/sponsorImg5.png';
import sponsorImg6 from '/image/sponsorImg6.png';

const SponsorsLogos = [
  sponsorImg1,
  sponsorImg2,
  sponsorImg3,
  sponsorImg4,
  sponsorImg5,
  sponsorImg6,
];

const OurSponsorsSection = ({ currentColor }) => {
  return (
    <>
      <section className='flex flex-col gap-10 items-center justify-between bg-(--sections-bg-color) max-w-full py-14 h-fit'>
        <h1
          className='text-3xl font-bold'
          style={{ color: `var(${currentColor})` }}
        >
          Our Sponsors
        </h1>
        {/* sponsors logos */}
        <article className=' container w-full h-full grid custom-grid justify-center items-center'>
          {SponsorsLogos.map((imageSrc, index) => {
            return (
              <img
                key={index}
                src={imageSrc}
                className='w-full'
                alt='sponsorLogo'
              />
            );
          })}
        </article>
      </section>
    </>
  );
};

export default OurSponsorsSection;
