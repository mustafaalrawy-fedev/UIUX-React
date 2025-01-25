const Copyright = ({ currentColor }) => {
  return (
    <>
      <article className='container max-w-full bg-(--copyright-bg-color) py-5 text-white font-bold'>
        <h1>
          Copyright ©2025 -{' '}
          <span style={{ color: `var(${currentColor})` }}>
            All Rights Reserved Company Name
          </span>
        </h1>
      </article>
    </>
  );
};

export default Copyright;
