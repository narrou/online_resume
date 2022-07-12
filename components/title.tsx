import tw from 'twin.macro';

const Title = ({
  children,
  number
}: {
  children: React.ReactNode;
  number: string;
}) => {
  return (
    <h1 tw='flex items-center text-3xl text-slate-100 after:(relative sm:w-36 w-24 h-[1px] bg-slate-600 block ml-5)'>
      <span tw='text-lg text-crayola align-bottom'>{number}</span>
      <div tw='ml-4'>{children}</div>
    </h1>
  );
};

export default Title;
