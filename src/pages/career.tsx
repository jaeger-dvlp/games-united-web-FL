import React from 'react';
import Meta from '@/components/layout/Meta';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import CareerForm from '@/components/forms/Career.form';
import GlobalBanner from '@/components/misc/GlobalBanner';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import BannerImage from '@/public/assets/img/banner-careers.webp';

function Career() {
  return (
    <>
      <Meta
        title="Careers | Games United"
        description="We are a Venture Builder which enables startup teams with capital, vision, and strategic direction. Unlike gaming VC’s, a venture builder deals with the day-to-day operations and strategic decisions to grow the new business."
      />
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-start font-theme">
        <GlobalBanner
          withPurpleDot
          image={BannerImage.src}
          title="Build With Us"
        />
        <CareerForm />
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

export default Career;