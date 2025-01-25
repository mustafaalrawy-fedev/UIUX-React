import aboutUsImg from '/image/aboutus-image.jpg';
import { Link } from 'react-router-dom';

const AboutUsArticle = ({ currentColor }) => {
  return (
    <>
      <section className=' container h-fit md:h-screen max-w-full my-14 md:my-0 flex justify-center items-center'>
        <article className='flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center md:items-stretch gap-4'>
          {/* <div className='relative'> */}
          <img src={aboutUsImg} alt='About Us Image' className='max-w-full' />
          {/* <div className='absolute top-0 left-0 bottom-0 w-full h-full bg-gradient-to-r from-black to-transparent z-10'></div> */}
          {/* </div> */}
          <main className='flex flex-col justify-center md:justify-between items-center md:items-stretch text-center md:text-start gap-5'>
            <div>
              <h1
                style={{ color: `var(${currentColor})` }}
                className='font-bold text-5xl lg:text-6xl mb-4'
              >
                About Us
              </h1>
              <h3 className='text-(--subTitle-color)'>
                About Us Sub-title Description
              </h3>
            </div>
            <p className='text-(--subTitle-color) pr-14'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point <br />
              <br />
              of using Lorem Ipsum is that it has a more-or-less normal Lorem
              Ipsum as their default model text, and a search.
            </p>
            <Link
              className='btn transition duration-300 hover:scale-105 hover:-translate-y-1 '
              style={{ backgroundColor: `var(${currentColor})` }}
              to='/about-us'
            >
              Learn More
            </Link>
          </main>
        </article>
      </section>
    </>
  );
};

export default AboutUsArticle;
