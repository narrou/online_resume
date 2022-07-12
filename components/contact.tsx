import tw from 'twin.macro';
import CustomButton from '../templates/button';
import { useEffect, useRef, useState } from 'react';
import { srConfig } from '../config';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const Contact = () => {
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
      id='contact'
      tw='hero flex flex-col sm:py-16 lg:py-24 md:py-20 mb-10 py-16 mx-auto max-w-5xl justify-start items-center'
      ref={revealContainer}
    >
      <h1 tw='text-sm text-crayola'>04. How to contact me ?</h1>
      <h3 tw='text-5xl mt-3'>Get in touch</h3>
      <p tw='text-center mt-3'>
        I'm currently looking for an intership, please contact me if you're
        interested !
      </p>
      <div tw='mt-10'>
        <a href='mailto:julien.domont123@gmail.com'>
          <CustomButton>Say Hello</CustomButton>
        </a>
      </div>
    </section>
  );
};

export default Contact;
