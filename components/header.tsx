/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import tw from 'twin.macro';
import xw from 'twin.macro';
import CustomButton from '../templates/button';
import { debounce } from '../utils/helpers';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const navigation = [
  {
    name: 'Contact',
    order: '04.',
    href: '#contact',
    current: false
  },
  {
    name: 'Work',
    order: '03.',
    href: '#work',
    current: false
  },

  {
    name: 'Experience',
    order: '02.',
    href: '#jobs',
    current: false
  },
  {
    name: 'About me',
    order: '01.',
    href: '#about',
    current: true
  }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const menuButton = useRef(null);

  /* A debounce function that is used to prevent the scroll event from firing too often. */
  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    /* Checking if the user is scrolling up or down. If the user is scrolling up, the header will be
    visible. If the user is scrolling down, the header will be hidden. */
    const isScrollingUp: boolean =
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
      currentScrollPos < 10;
    setVisible(isScrollingUp);
    if (!isScrollingUp) {
      if (isMenuOpen) {
        setIsMenuOpen(false);
        menuButton?.current.click();
      }
    }

    setPrevScrollPos(currentScrollPos);
    // timer set to 100 milliseconds:
  }, 100);

  /* Adding an event listener to the window object. */
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  /**
   * OnOpenMenu is a function that takes a boolean as an argument and sets the state of isMenuOpen to
   * the opposite of the boolean argument.
   * @param isClosed - This is the current state of the menu.
   */
  function onOpenMenu(isClosed) {
    setIsMenuOpen(!isClosed);
  }

  return (
    <Disclosure as='nav'>
      {({ open }) => (
        <div
          style={{ top: visible ? '0' : '-64px' }}
          tw='backdrop-blur-md fixed py-0 px-12 w-full shadow-lg transition-[top 0.6s] duration-300 transition top-0 z-50'
        >
          <div tw='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 '>
            <div tw='relative flex items-center justify-end h-16'>
              <div
                tw='absolute inset-y-0 left-0 flex items-center sm:hidden'
                onClick={() => onOpenMenu(open)}
              >
                {/* Mobile menu button*/}
                <Disclosure.Button
                  ref={menuButton}
                  tw='inline-flex items-center justify-center p-2 rounded-md text-crayola hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-crayola'
                >
                  <span tw='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon tw='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon tw='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div tw='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <div tw='flex-shrink-0 flex items-center'>
                  <Transition
                    show={show}
                    enter='transform transition ease-out duration-500'
                    enterFrom='opacity-0 -translate-y-4'
                    enterTo='opacity-100 translate-y-0'
                    leave='transform transition ease-out duration-500'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 -translate-y-4'
                  >
                    <Link href='/'>
                      <img
                        tw='block lg:hidden h-8 w-auto'
                        src='icon.svg'
                        alt='Workflow'
                      />
                    </Link>
                    <Link href='/'>
                      <img
                        tw='hidden lg:block h-8 w-auto'
                        src='icon.svg'
                        alt='Workflow'
                      />
                    </Link>
                  </Transition>
                </div>
              </div>
              <div tw=' flex items-center justify-end sm:items-stretch sm:justify-start flex-row-reverse'>
                <div tw='hidden sm:block sm:ml-6'>
                  <div tw='flex flex-row-reverse items-center space-x-1'>
                    <Transition
                      show={show}
                      enter='transform transition ease-out delay-500 duration-500'
                      enterFrom='opacity-0 -translate-y-4'
                      enterTo='opacity-100 translate-y-0'
                      leave='transform transition ease-out delay-500 duration-500'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 -translate-y-4'
                    >
                      <CustomButton>
                        <a
                          href='/JulienDomontCV.pdf'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          Resume
                        </a>
                      </CustomButton>
                    </Transition>

                    <Transition
                      show={show}
                      enter='transform transition ease-out delay-[400ms] duration-500'
                      enterFrom='opacity-0 -translate-y-4'
                      enterTo='opacity-100 translate-y-0'
                      leave='transform transition ease-out delay-[400ms] duration-500'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 -translate-y-4'
                    >
                      <a
                        href={navigation[0].href}
                        className='group'
                        css={[
                          tw`px-3 py-2 text-xs font-normal text-crayola`,
                          !navigation[0].current && tw`text-crayola `,
                          navigation[0].current && tw`text-crayola`
                        ]}
                      >
                        {navigation[0].order}{' '}
                        <span tw='text-white transition group-hover:text-crayola'>
                          {navigation[0].name}
                        </span>
                      </a>
                    </Transition>
                    <Transition
                      show={show}
                      enter='transform transition ease-out delay-300 duration-500'
                      enterFrom='opacity-0 -translate-y-4'
                      enterTo='opacity-100 translate-y-0'
                      leave='transform transition ease-out delay-300 duration-500'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 -translate-y-4'
                    >
                      <a
                        href={navigation[1].href}
                        className='group'
                        css={[
                          tw`px-3 py-2 text-xs font-normal text-crayola`,
                          !navigation[1].current && tw`text-crayola `,
                          navigation[1].current && tw`text-crayola`
                        ]}
                      >
                        {navigation[1].order}{' '}
                        <span tw='text-white transition group-hover:text-crayola'>
                          {navigation[1].name}
                        </span>
                      </a>
                    </Transition>
                    <Transition
                      show={show}
                      enter='transform transition ease-out delay-200 duration-500'
                      enterFrom='opacity-0 -translate-y-4'
                      enterTo='opacity-100 translate-y-0'
                      leave='transform transition ease-out delay-200 duration-500'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 -translate-y-4'
                    >
                      <a
                        href={navigation[2].href}
                        className='group'
                        css={[
                          tw`px-3 py-2 text-xs font-normal text-crayola`,
                          !navigation[2].current && tw`text-crayola `,
                          navigation[2].current && tw`text-crayola`
                        ]}
                      >
                        {navigation[2].order}{' '}
                        <span tw='text-white transition group-hover:text-crayola'>
                          {navigation[2].name}
                        </span>
                      </a>
                    </Transition>
                    <Transition
                      show={show}
                      enter='transform transition ease-out delay-100 duration-500'
                      enterFrom='opacity-0 -translate-y-4'
                      enterTo='opacity-100 translate-y-0'
                      leave='transform transition ease-out delay-100 duration-500'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 -translate-y-4'
                    >
                      <a
                        href={navigation[3].href}
                        className='group'
                        css={[
                          tw`px-3 py-2 text-xs font-normal text-crayola`,
                          !navigation[3].current && tw`text-crayola `,
                          navigation[3].current && tw`text-crayola`
                        ]}
                      >
                        {navigation[3].order}{' '}
                        <span tw='text-white transition group-hover:text-crayola'>
                          {navigation[3].name}
                        </span>
                      </a>
                    </Transition>
                  </div>
                </div>
              </div>
              <div tw='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'></div>
            </div>
          </div>

          <Disclosure.Panel tw='sm:hidden'>
            <div tw='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item, index, array) => (
                <Disclosure.Button
                  key={array[array.length - 1 - index].name}
                  as='a'
                  href={array[array.length - 1 - index].href}
                  className='group'
                  css={[
                    tw`block px-3 py-2 rounded-md text-base text-crayola font-medium`,
                    !array[array.length - 1 - index].current &&
                      tw`text-crayola `,
                    array[array.length - 1 - index].current && tw` text-crayola`
                  ]}
                  aria-current={
                    array[array.length - 1 - index].current ? 'page' : undefined
                  }
                >
                  {array[array.length - 1 - index].order}{' '}
                  <span tw='text-white transition group-hover:text-crayola'>
                    {array[array.length - 1 - index].name}
                  </span>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
