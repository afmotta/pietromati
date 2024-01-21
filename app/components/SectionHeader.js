export function SectionHeader({ title, subtitle }) {
  return (
    <>
      <h3 className='text-base font-semibold leading-7 text-main uppercase'>
        {subtitle}
      </h3>
      <h2 className='mt-2 text-3xl tracking-tight text-gray-900 sm:text-4xl'>
        {title}
      </h2>
    </>
  );
}
