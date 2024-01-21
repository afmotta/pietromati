export function Party() {
  return (
    <div
      id='ricevimento'
      className='py-32 overflow-hidden sm:py-40 bg-gray-100 rounded-2xl'
    >
      <div className='mx-auto max-w-7xl px-6 lg:flex lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8'>
          <div className='lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8'>
            <h3 className='text-base font-semibold leading-7 text-main'>
              Torre dei Saraceni
            </h3>
            <h2 className='mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl'>
              Il Ricevimento
            </h2>
            <p className='mt-6 text-xl leading-8 text-gray-800'>
              Quasi est quaerat. Sit molestiae et. Provident ad dolorem
              occaecati eos iste. Soluta rerum quidem minus ut molestiae velit
              error quod. Excepturi quidem expedita molestias quas.
            </p>
            <p className='mt-6 text-base leading-7 text-gray-800'>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat. Quasi aperiam sit non sit neque reprehenderit.
            </p>
          </div>
          <div className='flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents'>
            <div className='w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end'>
              <img
                src='/party-0.jpg'
                alt=''
                className='aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover'
              />
            </div>
            <div className='contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8'>
              <div className='flex w-96 flex-auto justify-end lg:w-auto lg:flex-none'>
                <img
                  src='/party-1.jpg'
                  alt=''
                  className='aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover'
                />
              </div>
              <div className='flex sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none'>
                <img
                  src='/party-2.jpg'
                  alt=''
                  className='aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover translate-x-[30%] md:translate-x-0'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
