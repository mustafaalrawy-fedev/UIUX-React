import Logo from '../../header/Logo';
import phoneIcon from '/image/Phone-icon.svg';
import emailIcon from '/image/Email-icon.svg';

const details = [
  { icon: phoneIcon, info: '01030037976' },
  { icon: emailIcon, info: 'mustafaalrawyfedev@gmail.com' },
];

const WebsiteInfo = () => {
  return (
    <>
      <section className='w-full md:w-1/3 flex flex-col gap-10'>
        <main>
          <Logo />
        </main>
        {/* Details */}
        <div className=''>
          {details.map((detail) => {
            const { icon, info } = detail;
            return (
              <span key={info} className='flex items-center gap-3 mb-6'>
                <img src={icon} alt={icon} className='w-5 h-5' />
                <p className='font-bold text-white text-md'>{info}</p>
              </span>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default WebsiteInfo;
