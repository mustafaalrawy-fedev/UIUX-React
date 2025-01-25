import React from 'react';
import ContactUsSection from './FooterContent/ContactUsSection';
import Copyright from './FooterContent/Copyright';
import SideMap from './FooterContent/SideMap';
import WebsiteInfo from './FooterContent/WebsiteInfo';
import { useSelector } from 'react-redux';

const Footer = () => {
  const { currentColor } = useSelector((state) => state.image);
  return (
    <>
      <footer className='bg-(--footer-bg-color) h-fit py-10'>
        <section className='container max-w-full flex flex-wrap md:flex-nowrap justify-between gap-20'>
          <ContactUsSection currentColor={currentColor} />
          <SideMap />
          <WebsiteInfo />
        </section>
      </footer>
      <Copyright currentColor={currentColor} />
    </>
  );
};

export default Footer;
