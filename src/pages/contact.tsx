import React from 'react';
import Meta from '@/components/layout/Meta';
import { useTranslation } from 'next-i18next';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import ContactForm from '@/components/forms/Contact.form';
import GlobalBanner from '@/components/misc/GlobalBanner';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import BannerImage from '@/public/assets/img/banner-contact.webp';

function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <Meta
        title={t('contact.meta.title')}
        description={t('contact.meta.description')}
      />
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-start font-theme">
        <GlobalBanner
          withPurpleDot
          image={BannerImage.src}
          title={t('contact.title')}
        />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Contact;
