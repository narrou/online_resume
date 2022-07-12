import Head from 'next/head';
import { FC, useEffect, useState } from 'react';
import tw from 'twin.macro';
import About from '../components/about';
import Contact from '../components/contact';
import Experience from '../components/experience';
import Header from '../components/header';
import Introduction from '../components/introduction';
import Side from '../components/side';
import Title from '../components/title';
import Work from '../components/work';
import Image from 'next/image';
import Loader from '../components/loader';

// FC = Function Component
const Home: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach((link) => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }

    handleExternalLinks();
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : (
        <div tw='h-screen'>
          <Head>
            <title>Julien Domont</title>
            <meta name='title' content='Julien Domont' />
            <meta
              name='og:description'
              content='Julien Domont - Apprentice Software Engineer'
            />
            <meta
              name='description'
              content='Julien Domont - Apprentice Software Engineer'
            />
            <meta property='og:type' content='website' />
            <meta property='og:url' content='juliendomont.com' />
          </Head>
          <Header></Header>
          <Side orientation='left'>
            <ul tw='flex items-center justify-center flex-col m-0 p-0'>
              <li>
                <a href='https://github.com/narrou' tw='p-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    role='img'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    tw='w-5 h-5 align-middle hover:stroke-crayola transition hover:-translate-y-1'
                  >
                    <title>GitHub</title>
                    <path
                      d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35
 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38
  0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3
   6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href='https://linkedin.com/in/domont-julien/' tw='p-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    role='img'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    tw='w-5 h-5 align-middle fill-[none] hover:stroke-crayola transition hover:-translate-y-1'
                  >
                    <title>LinkedIn</title>
                    <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                    <rect x='2' y='9' width='4' height='12'></rect>
                    <circle cx='4' cy='4' r='2'></circle>
                  </svg>
                </a>
              </li>
            </ul>
          </Side>
          <Side orientation='right'>
            <a
              href='mailto:julien.domont123@gmail.com'
              tw='[writing-mode:vertical-rl] flex justify-center align-middle items-center text-center my-5 mx-auto'
            >
              julien.domont123@gmail.com
            </a>
          </Side>
          <div>
            <main tw='py-0 sm:px-24 lg:px-36 justify-center px-4 items-center'>
              <Introduction></Introduction>
              <About></About>
              <Work></Work>
              <Experience></Experience>
              <Contact></Contact>
            </main>
            <footer tw='footer footer-center p-4 text-base-content gap-3 '>
              <div tw='flex sm:hidden flex-row'>
                <a href='https://github.com/narrou' tw='p-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    role='img'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    tw='w-5 h-5 align-middle hover:stroke-crayola transition hover:-translate-y-1'
                  >
                    <title>GitHub</title>
                    <path
                      d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35
 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38
  0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3
   6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'
                    ></path>
                  </svg>
                </a>
                <a href='https://linkedin.com/in/domont-julien/' tw='p-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    role='img'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    tw='w-5 h-5 align-middle fill-[none] hover:stroke-crayola transition hover:-translate-y-1'
                  >
                    <title>LinkedIn</title>
                    <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                    <rect x='2' y='9' width='4' height='12'></rect>
                    <circle cx='4' cy='4' r='2'></circle>
                  </svg>
                </a>
              </div>
              <div>Designed & Built by Julien Domont</div>
            </footer>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
