import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import anime from 'animejs';
import styled from 'styled-components';

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(15 23 42);
  z-index: 99;

  .logo-wrapper {
    width: max-content;
    max-width: 100px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    opacity: ${(props) => (props.isMounted ? 1 : 0)};
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
      #B {
        opacity: 0;
      }
    }
  }
`;

const IconLoader = () => (
  <svg
    version='1.0'
    xmlns='http://www.w3.org/2000/svg'
    fill='white'
    width='225.000000pt'
    height='300.000000pt'
    viewBox='0 0 225.000000 300.000000'
    preserveAspectRatio='xMidYMid meet'
  >
    <g
      transform='translate(0.000000,300.000000) scale(0.100000,-0.100000)'
      fill='#000000'
      stroke='none'
    >
      <path
        fill='white'
        d='M1645 2989 c-31 -17 -325 -311 -341 -341 -12 -23 -14 -156 -14 -858
l0 -830 -142 0 c-79 0 -153 3 -165 6 -23 6 -23 9 -23 171 0 185 -9 220 -64
254 -28 17 -54 19 -286 19 l-255 0 -167 -169 c-133 -136 -168 -177 -174 -205
-12 -68 2 -437 20 -501 32 -118 83 -203 175 -296 71 -70 103 -93 181 -132 168
-82 213 -89 608 -94 394 -5 435 0 575 70 71 35 105 63 252 205 93 90 193 189
222 219 66 70 127 188 161 311 l27 97 3 990 c2 948 2 991 -16 1024 -36 66 -58
71 -322 71 -150 0 -242 -5 -255 -11z m484 -113 c9 -11 11 -255 9 -978 -4 -959
-4 -963 -26 -1043 -55 -200 -165 -346 -312 -419 -127 -62 -181 -68 -535 -63
-273 4 -320 7 -391 25 -241 62 -394 195 -461 397 -23 71 -26 100 -31 267 -2
103 -2 199 2 213 l6 25 229 0 c199 0 230 -2 235 -16 3 -9 6 -88 6 -177 0 -180
5 -199 60 -231 33 -20 53 -21 345 -24 342 -3 347 -2 377 58 17 33 18 101 18
996 0 733 3 963 12 972 19 19 442 17 457 -2z m-594 -372 c0 -82 -1 -89 -20
-89 -18 0 -20 8 -23 78 -2 51 1 84 9 93 25 30 34 8 34 -82z m-107 -593 c-3
-538 -3 -546 -23 -546 -20 0 -20 8 -23 544 -2 557 -2 568 35 554 11 -4 13
-101 11 -552z m114 -126 c8 -581 7 -588 -36 -572 -14 6 -16 65 -16 560 0 305
3 557 7 561 4 4 14 5 23 4 13 -3 16 -68 22 -553z m-117 -595 c0 -70 -1 -75
-22 -78 -22 -3 -23 -1 -23 78 0 79 1 81 23 78 21 -3 22 -8 22 -78z'
      />
    </g>
  </svg>
);

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading()
    });

    loader.add({
      targets: '.loader',
      duration: 500,
      easing: 'easeInOutExpo',
      opacity: 0,
      zIndex: -1
    });
  };

  useEffect(() => {
    setIsLoaded(true);
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledLoader className='loader' isMounted={isMounted}>
      <Helmet />
      {isLoaded ? (
        <div className='logo-wrapper'>
          <IconLoader />{' '}
        </div>
      ) : (
        ''
      )}
    </StyledLoader>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired
};

export default Loader;
