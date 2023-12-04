import React from 'react';
import Meta from '@/components/layout/Meta';
import { useTranslation } from 'react-i18next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { pdfjs, Document, Page } from 'react-pdf';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

type Props = {
  pdf: string;
};

function PrivacyNotice({ pdf }: Props) {
  const { t } = useTranslation();
  const [numPages, setNumPages] = React.useState(null);

  const onDocumentLoadSuccess = ({ numPages: pNums }) => {
    setNumPages(pNums);
  };

  return (
    <>
      <Meta
        title={t('legal.mergepark.childrens-privacy.meta.title')}
        description={t('legal.mergepark.childrens-privacy.meta.description')}
      />
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-start font-theme">
        <section className="flex min-h-[40vh] w-full items-center justify-center bg-primary-purple pt-[200px]">
          <section className="flex w-full max-w-theme items-start justify-start p-5">
            <h1 className="text-left text-2xl font-black text-white lg:text-5xl">
              {t('legal.mergepark.childrens-privacy.title')}
            </h1>
          </section>
        </section>
        <article className="flex w-full flex-col items-center justify-center">
          <section className="flex w-full max-w-xl flex-col items-center justify-start overflow-hidden">
            <Document
              file={pdf}
              className="PDFDocument w-full"
              onLoadSuccess={onDocumentLoadSuccess}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page
                  className="PDFPage PDFPageOne w-full"
                  renderTextLayer={false}
                  pageNumber={index + 1}
                  key={`page_${index + 1}`}
                />
              ))}
            </Document>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ locale }) {
  const pdfs = {
    tr: '/assets/legal/mergepark/childrens-privacy-en.pdf',
    en: '/assets/legal/mergepark/childrens-privacy-en.pdf',
  };

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      pdf: pdfs[locale],
    },
  };
}

export default PrivacyNotice;