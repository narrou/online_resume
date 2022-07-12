import { Fragment, useEffect, useState } from 'react';
import tw from 'twin.macro';
import xw from 'twin.macro';
import { cx, css } from '@emotion/css';
import { Transition } from '@headlessui/react';

// FC = Function Component
const Side = ({
  children,
  orientation
}: {
  children: React.ReactNode;
  orientation: string;
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const base = xw` text-slate-200 fixed sm:block hidden w-10 bottom-0 z-10 after:(w-[1px] h-24 my-0 mx-auto bg-slate-400 block) `;
  let styles = {
    cssBase: css(base),
    cssOrientation: css(xw``)
  };
  orientation == 'left'
    ? (styles.cssOrientation = css(xw`right-auto sm:left-5 lg:left-10 `))
    : (styles.cssOrientation = css(xw`left-auto sm:right-5 lg:right-10 `));

  return (
    <Transition
      show={show}
      as={Fragment}
      enter='transform transition ease-out delay-[1400ms] duration-500'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transform transition ease-out delay-[1400ms] duration-500'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <div className={cx(styles.cssBase, styles.cssOrientation)}>
        {children}
      </div>
    </Transition>
  );
};

export default Side;
