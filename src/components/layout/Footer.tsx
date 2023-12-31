import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import Logo from '@/public/assets/img/logo.webp';

function Footer(): JSX.Element {
  const { t } = useTranslation();
  return (
    <footer className="flex w-full flex-col items-center justify-start gap-20 bg-[#430098] py-16 px-5 font-theme">
      <section className="flex w-full max-w-md flex-wrap items-start justify-center gap-12 lg:max-w-[1100px] lg:flex-nowrap lg:justify-between lg:gap-24">
        <section className="flex w-full flex-col items-center justify-start gap-5 lg:items-start">
          <Link
            href="/"
            className="relative transition-all duration-200 lg:hover:scale-110"
          >
            <img
              alt="Logo"
              src={Logo.src}
              className="w-full max-w-[127px] object-contain object-center"
            />
          </Link>
          <p className="text-center text-sm font-normal text-white lg:text-left lg:text-2xl">
            {t('footer.contact-text')}{' '}
            <a className="hover:underline" href="mailto:hello@gamesunited.co">
              hello@gamesunited.co
            </a>
          </p>
        </section>
        <section className="flex w-full flex-wrap items-start justify-center gap-x-20 gap-y-10 lg:flex-nowrap lg:justify-between">
          <section className="flex flex-col items-center justify-start gap-6 text-center lg:items-start lg:text-left">
            <h4 className="text-2xl font-semibold text-white">
              {t('footer.company.title')}
            </h4>
            <ul className="m-0 flex list-none flex-col items-center justify-start gap-4 p-0 text-2xl font-normal text-white lg:items-start">
              <li>
                <Link className="hover:underline" href="/games/merge-park">
                  {t('footer.company.games')}
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/">
                  {t('footer.company.about')}
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/multiverse">
                  {t('footer.company.multiverse')}
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/contact">
                  {t('footer.company.contact')}
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/career">
                  {t('footer.company.career')}
                </Link>
              </li>
            </ul>
          </section>
          <section className="flex flex-col items-center justify-start gap-6 text-center lg:items-start lg:text-left">
            <h4 className="text-2xl font-semibold text-white">
              {t('footer.social-links.title')}
            </h4>
            <ul className="m-0 flex list-none flex-col items-center justify-start gap-4 p-0 text-2xl font-normal text-white lg:items-start">
              <li>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                  href="https://instagram.com/gamesunitedhq?igshid=MWdkMWlvcGhucWF5cA=="
                >
                  {t('footer.social-links.instagram')}
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                  href="https://www.youtube.com/channel/UCtljjRAxdTuo1EApYHE0LBQ"
                >
                  {t('footer.social-links.youtube')}
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                  href="https://www.linkedin.com/company/gamesunitedhq/mycompany/"
                >
                  {t('footer.social-links.linkedin')}
                </Link>
              </li>
            </ul>
          </section>
        </section>
      </section>
      <section className="flex w-full max-w-md flex-col items-center justify-center gap-5 lg:max-w-theme">
        <p className="text-center text-xl font-normal text-zinc-200">
          {t('footer.legal.rights-reserved')}
        </p>
        <section className="flex w-full flex-wrap items-center justify-center gap-6 text-center text-xl text-zinc-200">
          <Link
            className="underline transition-all duration-150 hover:text-white"
            href="/legal/privacy-policy"
          >
            {t('footer.legal.privacy-policy')}
          </Link>
          <Link
            className="underline transition-all duration-150 hover:text-white"
            href="/legal/cookie-policy"
          >
            {t('footer.legal.cookie-policy')}
          </Link>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
