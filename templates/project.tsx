import { Card, createTheme, IconButton, ThemeProvider } from '@mui/material';
import { cx, css } from '@emotion/css';
import xw from 'twin.macro';
import tw from 'twin.macro';
import Image from 'next/image';
import { ExternalLinkIcon } from '@heroicons/react/outline';
import LinkIcon from '@mui/icons-material/Link';

const Project = ({
  name,
  description,
  image,
  techologies,
  link,
  orientation
}: {
  name: string;
  description: string;
  image: string;
  techologies: string[];
  link: string;
  orientation: string;
}) => {
  let styles = {
    cssImg: css(xw`col-span-6 col-start-1 z-0 row-span-full col-start-1`),
    cssCard: css(xw` row-span-full grid w-full col-span-6 z-40 col-end-11`),
    cssJustify: css(xw`text-end`)
  };
  if (orientation === 'left') {
    styles['cssImg'] = css(
      xw`col-span-6 col-start-5 z-0 row-span-full col-end-11`
    );
    styles['cssCard'] = css(
      xw` row-span-full grid w-full col-span-6 z-40 col-start-1`
    );
  }

  return (
    <>
      <div tw='grid-cols-10 hidden md:grid mt-24 relative h-full  w-full'>
        <div
          className={cx(styles.cssImg)}
          tw='relative rounded-lg brightness-50 hover:(brightness-100 transition ease-in-out before:(opacity-0 transition ease-in-out duration-200) ) before:(bg-crayola absolute opacity-25  h-full w-full z-50 inset-0)'
        >
          <Image
            tw='absolute h-full w-full object-cover  '
            src={image}
            alt={name}
          ></Image>
        </div>
        <div className={cx(styles.cssCard)}>
          <div
            tw='text-crayola '
            css={orientation == 'left' ? tw`text-start` : tw`text-end`}
          >
            Featured project
          </div>
          <div
            tw='text-slate-100 text-3xl font-bold'
            css={orientation == 'left' ? tw`text-start` : tw`text-end`}
          >
            {name}
          </div>
          <Card
            sx={{
              backgroundColor: 'rgb(30 41 59)',
              color: 'rgb(148 163 184)',
              padding: '1rem',
              marginTop: '1rem'
            }}
            css={orientation == 'left' ? tw` text-start` : tw` text-end`}
          >
            {description}
          </Card>
          <div
            tw='mt-4 '
            css={orientation == 'left' ? tw`text-start` : tw`text-end`}
          >
            {techologies.map((tech, index) => (
              <span key={index}>{tech} </span>
            ))}
          </div>
          <div
            tw=' mt-4 '
            css={orientation == 'left' ? tw`text-start` : tw`text-end`}
          >
            {link ? (
              <a
                href={link}
                tw='p-1'
                css={orientation == 'left' ? tw`mr-auto` : tw`ml-auto`}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  role='img'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  css={orientation == 'left' ? tw`mr-auto` : tw`ml-auto`}
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
            ) : (
              ''
            )}
          </div>
        </div>
      </div>

      <div
        className='group'
        tw='grid md:hidden grid-cols-1 mt-24 transition ease-in-out hover:shadow-xl shadow-md relative'
      >
        <div
          id='project-content'
          tw='col-span-1 z-20 row-span-full ml-4 p-4 col-end-1'
        >
          <div tw='text-crayola'>Featured project</div>
          <div tw='text-slate-100 text-3xl font-bold transition ease-in-out group-hover:text-crayola'>
            {name}
          </div>
          <div tw='mt-4'> {description}</div>
          <div tw='mt-4'>
            {techologies.map((techology, i) => (
              <span key={i}>{techology} </span>
            ))}
          </div>
          <div tw='mt-4'>
            <IconButton aria-label='external-link' tw='text-crayola'>
              <LinkIcon />
            </IconButton>
          </div>
        </div>
        <div tw='rounded-md col-span-1 col-end-1  row-span-full before:(absolute bg-slate-900 opacity-75 w-full h-full z-10 inset-0) '>
          <div
            id='project-image'
            tw='col-start-1 grayscale rounded-md h-full brightness-50 '
          >
            <Image
              src={image}
              tw='blur-[1px] h-full w-full object-cover absolute rounded-md'
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
