import { Transition } from '@headlessui/react';
import { useEffect, useRef, useState } from 'react';
import tw from 'twin.macro';

const Introduction = () => {
  const el = useRef();
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section tw='hero min-h-screen flex flex-col p-0 my-0 mx-auto max-w-5xl justify-center items-start'>
      <div tw='hero-content'>
        <div tw='max-w-3xl' ref={el}>
          <Transition
            show={show}
            enter='transform transition ease-out delay-[600ms] duration-700'
            enterFrom='opacity-0 -translate-y-4'
            enterTo='opacity-100 translate-y-0'
            leave='transform transition ease-out delay-[600ms] duration-700'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 -translate-y-4'
          >
            <h1 tw='mb-5 text-crayola'>Hi, my name is</h1>
          </Transition>
          <Transition
            show={show}
            enter='transform transition ease-out delay-[800ms] duration-700'
            enterFrom='opacity-0 -translate-y-4'
            enterTo='opacity-100 translate-y-0'
            leave='transform transition ease-out delay-[800ms] duration-700'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 -translate-y-4'
          >
            <h3 tw='mb-5 sm:text-7xl text-3xl font-bold'>Julien Domont.</h3>
          </Transition>
          <Transition
            show={show}
            enter='transform transition ease-out delay-[1000ms] duration-700'
            enterFrom='opacity-0 -translate-y-4'
            enterTo='opacity-100 translate-y-0'
            leave='transform transition ease-out delay-[1000ms] duration-700'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 -translate-y-4'
          >
            <h2 tw='text-slate-400 sm:text-7xl text-3xl font-bold'>
              I build things for the web.
            </h2>
          </Transition>
          <Transition
            show={show}
            enter='transform transition ease-out delay-[1200ms] duration-700'
            enterFrom='opacity-0 -translate-y-4'
            enterTo='opacity-100 translate-y-0'
            leave='transform transition ease-out delay-[1200ms] duration-700'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 -translate-y-4'
          >
            <p tw='justify-end max-w-md mt-4'>
              I am an apprentice software engineer with two years of experience
              alongside the industrialisation team of a french company.
            </p>
          </Transition>
        </div>
      </div>
    </section>
  );
};
export default Introduction;
