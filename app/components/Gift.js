export function Gift() {
  return (
    <div id='lista-nozze' className='bg-white py-16 sm:py-24'>
      <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='relative isolate overflow-hidden bg-gray-100 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32'>
          <h2 className='mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-main sm:text-4xl'>
            Aiutaci ad iniziare la nostra vita insieme.
          </h2>
          <p className='mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-500'>
            Reprehenderit ad esse et non officia in nulla. Id proident tempor
            incididunt nostrud nulla et culpa.
          </p>
          <form className='mx-auto mt-10 flex max-w-md gap-x-4'>
            <label htmlFor='iban' className='sr-only'>
              Email address
            </label>
            <input
              id='iban'
              value='IT1231321312321'
              className='min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
            />
            <button
              type='submit'
              className='flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
            >
              Copia IBAN
            </button>
          </form>
          <svg
            viewBox='0 0 1024 1024'
            className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2'
            aria-hidden='true'
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
              fillOpacity='0.7'
            />
            <defs>
              <radialGradient
                id='759c1415-0410-454c-8f7c-9a820de03641'
                cx={0}
                cy={0}
                r={1}
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(512 512) rotate(90) scale(512)'
              >
                <stop stopColor='#BF1F6A' />
                <stop offset={1} stopColor='#db7699' stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
