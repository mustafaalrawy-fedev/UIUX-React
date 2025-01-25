import founderImg1 from '/image/founder-image1.jpg';
import founderImg2 from '/image/founder-image2.jpg';
import founderImg3 from '/image/founder-image3.jpg';

const founderInfo = [
  { name: 'Mustafa Elrawy', img: founderImg1 },
  { name: 'Mohanad Elrawy', img: founderImg2 },
  { name: 'Youssef Elrawy', img: founderImg3 },
];

const Founders = ({ currentColor }) => {
  return (
    <>
      <section className='container h-fit my-20'>
        <main>
          <h1
            style={{ color: `var(${currentColor})` }}
            className='text-6xl font-bold'
          >
            Founders
          </h1>
        </main>
        <article className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-28'>
          {founderInfo.map((info) => {
            const { name, img } = info;
            return (
              <aside key={name}>
                <img
                  loading='lazy'
                  src={img}
                  alt={name}
                  className='rounded-md w-full h-full md:w-96 md:h-96 object-cover lg:grayscale-100 transition duration-300 lg:hover:grayscale-0 lg:hover:-translate-y-3'
                />
                <h2 className='text-xl font-bold my-4 text-(--subTitle-color)'>
                  {name}
                </h2>
              </aside>
            );
          })}
        </article>
      </section>
    </>
  );
};

export default Founders;
