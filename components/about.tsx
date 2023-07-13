import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { srConfig } from '../config';
import tw from 'twin.macro';
import Title from './title';
import profilePic from '../public/profile.jpg';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const About = () => {
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

  return (
    <section
      id='about'
      tw='hero flex flex-col px-4 sm:pt-16 delay-1000 lg:pt-24 md:pt-20 my-0 mx-auto max-w-5xl justify-start items-start'
      ref={revealContainer}
    >
      <Title number='01.'>About me</Title>
      <div tw='md:grid block grid-cols-3 mt-4 gap-14'>
        <div tw='col-span-2'>
          <p>
            I've been programming for a long time, mostly to learn and improve.
            These past two years, I've been working alongside a talented team of
            engineers and helped them build good and maintainable software.
          </p>
          <p>
            I am motivated, resourceful and always looking for new challenges.
          </p>
          <p>Here is a few technologies I've been working with:</p>
          <div tw='flex flex-row items-center justify-start'>
            <List>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightSharpIcon tw='text-crayola'></ArrowRightSharpIcon>
                </ListItemIcon>
                <ListItemText>Javascript (ES6+)</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightSharpIcon tw='text-crayola'></ArrowRightSharpIcon>
                </ListItemIcon>
                <ListItemText>Python</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightSharpIcon tw='text-crayola'></ArrowRightSharpIcon>
                </ListItemIcon>
                <ListItemText>React</ListItemText>
              </ListItem>
            </List>
            <List>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightSharpIcon tw='text-crayola'></ArrowRightSharpIcon>
                </ListItemIcon>
                <ListItemText>Angular</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightSharpIcon tw='text-crayola'></ArrowRightSharpIcon>
                </ListItemIcon>
                <ListItemText>TypeScript</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightSharpIcon tw='text-crayola'></ArrowRightSharpIcon>
                </ListItemIcon>
                <ListItemText>Node.js</ListItemText>
              </ListItem>
            </List>
          </div>
        </div>
        <div tw='block relative w-full max-w-xs max-h-72 mx-auto mt-4'>
          <div tw='w-full block relative' className='group'>
            <div tw='block relative after:(absolute md:(top-5 ) top-10 transition duration-75 group-hover:(-translate-x-2 -translate-y-2)left-5 -z-10 w-full h-full border-2 border-crayola)'>
              <Image
                src={profilePic}
                width='300'
                height='300'
                tw='after:(absolute bg-crayola opacity-50 w-full h-full z-10 inset-0) rounded-lg'
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
