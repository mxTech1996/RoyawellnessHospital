'use client';
import { useRouter } from 'next/navigation';
import { backgroundColor, footerData, primaryColor } from '@/data';
import { Footer as FooterComponent } from 'ecommerce-mxtech';
import Link from 'next/link';

const Footer = () => {
  const router = useRouter();

  return (
    <FooterComponent
      backgroundColor={backgroundColor}
      textColor='#fff'
      legal={footerData}
      onRedirect={(path) => {
        window.open(path, '_blank');
      }}
      visaImage='/images/visa.png'
      masterImage='/images/master.png'
    />
  );
};

export default Footer;
