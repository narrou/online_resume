import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';

import styled from 'styled-components';
import tw from 'twin.macro';
import { srConfig } from '../config';
import Title from './title';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

export const StyledTabs = styled.button`
  ${tw`p-4 hover:(bg-slate-800 text-crayola) transition ease-in-out text-start sm:(border-l-2 border-b-0) border-l-0 border-b-2 border-slate-800`}
  color: ${({ isActive }) =>
    isActive
      ? tw`sm:border-l-2 border-crayola bg-slate-800 text-crayola`
      : tw``};
`;

const Work = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);
  const revealContainer = useRef(null);
  const [show, setShow] = useState<boolean>(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  /* A hook that is called when the component is mounted. */
  useEffect(() => {
    /**
     * Wait for the revealContainer to be set, then import scrollreveal and reveal the revealContainer
     * with the srConfig() function.
     */
    async function waitForReveal() {
      if (prefersReducedMotion) {
        return;
      }
      setShow(true);
      const sr = (await import('scrollreveal')).default;
      sr().reveal(revealContainer.current, srConfig());
    }
    waitForReveal();
  }, []);

  const jobsData = [
    {
      html: (
        <List>
          <ListItem>
            <ListItemIcon>
              <ArrowRightSharpIcon tw='text-crayola'></ArrowRightSharpIcon>
            </ListItemIcon>
            <ListItemText>
              Replaced an old software capable of creating and testing models
              used to automatically recognize banking documents with a new one
              of higher quality and more reliability.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRightSharpIcon tw='text-crayola'></ArrowRightSharpIcon>
            </ListItemIcon>
            <ListItemText>
              Studied and replaced a component of our recognition chain
              decreasing the amount of failure by 80%.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRightSharpIcon tw='text-crayola'></ArrowRightSharpIcon>
            </ListItemIcon>
            <ListItemText>
              Created a website that displays graphics related to recognition
              rate.
            </ListItemText>
          </ListItem>
        </List>
      ),
      frontmatter: {
        title: 'Apprentice Software Engineer',
        company: 'Luminess',
        range: 'September 2020 - Present',
        url: 'https://www.luminess.fr/'
      }
    },
    {
      html: (
        <List>
          <ListItem>
            <ListItemIcon>
              <ArrowRightSharpIcon tw='text-crayola'></ArrowRightSharpIcon>
            </ListItemIcon>
            <ListItemText>
              Nurture thinking and thought process through one on one
              interaction and group discussion.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRightSharpIcon tw='text-crayola'></ArrowRightSharpIcon>
            </ListItemIcon>
            <ListItemText>
              Provided the tool set to use scientific knowledge to solve
              practical problems.
            </ListItemText>
          </ListItem>
        </List>
      ),
      frontmatter: {
        title: 'Student Engineer',
        company: 'Centrale Lille',
        range: 'Sep 2018 - Present',
        url: 'https://centralelille.fr/'
      }
    }
  ];

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    // If we're at the end, go to the start
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    // If we're at the start, move to the end
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  };

  useEffect(() => focusTab(), [tabFocus]);

  const onKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowUp': {
        e.preventDefault();
        setTabFocus(tabFocus - 1);
        break;
      }

      case 'ArrowDown': {
        e.preventDefault();
        setTabFocus(tabFocus + 1);
        break;
      }

      default: {
        break;
      }
    }
  };
  return (
    <section
      id='jobs'
      tw='hero flex flex-col px-4 sm:pt-16 lg:pt-24 md:pt-20 my-0  mt-24 mx-auto max-w-5xl justify-start items-start'
      ref={revealContainer}
    >
      <Title number='02.'>Where I've worked & studied</Title>
      <div tw='flex flex-col sm:flex-row mt-12'>
        <div tw='flex flex-row sm:flex-col '>
          {jobsData.map((job, index) => (
            <StyledTabs
              onClick={() => setActiveTabId(index)}
              isActive={activeTabId === index}
              key={index}
              ref={(el) => (tabs.current[index] = el)}
            >
              {job.frontmatter.company}
            </StyledTabs>
          ))}
        </div>
        <div tw='p-4 items-center align-middle transition animate-fadein'>
          <div tw='text-slate-100 text-xl'>
            {jobsData[activeTabId].frontmatter.title}
            <span tw='text-crayolabright'>
              {' '}
              @ {jobsData[activeTabId].frontmatter.company}
            </span>
          </div>
          <div>{jobsData[activeTabId].frontmatter.range}</div>
          <div tw='mt-4'>{jobsData[activeTabId].html}</div>
        </div>
      </div>
    </section>
  );
};

export default Work;
