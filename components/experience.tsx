import { useEffect, useRef, useState } from 'react';
import tw from 'twin.macro';
import { srConfig } from '../config';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import Project from '../templates/project';
import Title from './title';
import modelizerPic from '../public/Modelizer.png';
import resumePic from '../public/resume.png';

const Experience = () => {
  const revealContainer = useRef(null);
  const [show, setShow] = useState<boolean>(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    async function waitForReveal() {
      setShow(true);
      const sr = (await import('scrollreveal')).default;
      sr().reveal(revealContainer.current, srConfig());
    }
    waitForReveal();
  }, []);
  const listProjects = [
    {
      name: 'Modelizer',
      description:
        'An application that allows you to create and test models used to automatically recognize banking documents.',
      image: modelizerPic,
      techologies: ['Python', 'Jetbrains PyCharm', 'PyQT5', 'MariaDB'],
      link: '',
      orientation: 'left'
    },
    {
      name: 'Online Resume',
      description:
        'An online resume using React and Styled Components. It is a personal project that I have created to learn React and tailwind.',
      image: resumePic,
      techologies: ['React', 'Typescript', 'Tailwind', 'Next.js'],
      link: 'https://github.com/narrou/online_resume',
      orientation: 'right'
    }
  ];

  return (
    <section
      id='jobs'
      tw='hero flex flex-col px-4 sm:pt-16 lg:pt-24 md:pt-20 my-0 mx-auto max-w-5xl justify-start items-start'
      ref={revealContainer}
    >
      <Title number='03.'>My projects</Title>
      <div tw='flex flex-col justify-start items-start mt-4 w-full'>
        {listProjects.map((project, index) => (
          <Project {...project} key={index}></Project>
        ))}
      </div>
    </section>
  );
};

export default Experience;
