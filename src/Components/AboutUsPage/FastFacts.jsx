const facts = [
  { num: '7.7M+', detail: 'Active Listing WorldWide' },
  { num: '100K+', detail: 'Cities And Towns With Active Airbnb Listings' },
  { num: '200+', detail: 'Countries And Regions With Airbnb Listings' },
  { num: '1.5B+', detail: 'Airbnb Guest Arrivals All-Time' },
  { num: '5M+', detail: 'Hosts On Airbnb' },
  { num: '$250B+', detail: 'Earned By Hosts All-Time' },
  { num: '$14K', detail: 'Earned By The Typical US Host in 2023' },
  { num: '$10B+', detail: 'Total Takers Collected And Remitted Globally' },
];

const FastFacts = ({ currentColor }) => {
  return (
    <>
      <section className='container h-fit my-10'>
        <h1
          className='text-5xl font-bold mt-28 md:mt-0 mb-28'
          style={{ color: `var(${currentColor})` }}
        >
          Fast Fact
        </h1>
        <article className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
          {facts.map((info, index) => {
            const { num, detail } = info;
            return (
              <main
                key={index}
                className='flex flex-col justify-between w-full bg-(--sections-bg-color) p-5 rounded-md'
                //   style={{ backgroundColor: `var(${currentColor})` }}
              >
                <div className='mb-6'>
                  <h1 className='text-2xl font-bold mb-2'>{num}</h1>
                  <h6 className='text-(--subTitle-color) text-sm'>{detail}</h6>
                </div>
                <p
                  style={{ color: `var(${currentColor})` }}
                  className='text-sm'
                >
                  As Of December 31.2023
                </p>
              </main>
            );
          })}
        </article>
      </section>
    </>
  );
};

export default FastFacts;
