import whoAreWeImg from '/image/AboutUs-HeroSection-Image.jpg';

const AboutUsHero = ({ currentColor }) => {
  return (
    <>
      <section className='container max-w-full flex items-center justify-between h-screen relative'>
        <main className='absolute z-10 w-fit font-bold'>
          <h1
            style={{ color: `var(${currentColor})` }}
            className='w-full text-6xl md:text-[150px]'
          >
            About Us
          </h1>
          <h3 className='text-(--subTitle-color)'>
            Hello, Nice To Meet you we want to give you An <br /> Prefect View
            To Our Agency
          </h3>
        </main>
        <aside className='absolute bottom-0 right-0 md:w-2xl lg:w-3xl'>
          <div
            style={{ backgroundColor: `var(${currentColor})` }}
            className='hidden md:block relative after:absolute after:-top-2 after:right-0 after:w-1/2 after:h-2 after:bg-inherit before:absolute before:z-20 before:bottom-0 before:-left-72 before:w-1/2 before:h-2 before:bg-inherit'
          >
            <img
              loading='lazy'
              src={whoAreWeImg}
              alt='whoAreWeImg'
              className='w-full h-full'
            />
          </div>
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent z-0'></div>
        </aside>
      </section>
    </>
  );
};

export default AboutUsHero;
