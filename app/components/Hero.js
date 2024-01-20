import { Image } from "next/image";

export const Hero = () => (
  <div className='relative isolate overflow-hidden pt-14 h-screen flex items-center	'>
    <img
      src='https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      alt=''
      className='absolute inset-0 -z-10 h-full w-full object-cover grayscale-30'
    />
    <div className='mx-auto py-32 sm:py-48 lg:py-56'>
      <div className='text-center flex items-center flex-col'>
        <h1
          className={`text-6xl font-handwrite tracking-tight text-main sm:text-9xl`}
        >
          Pietro e Maria Teresa
        </h1>
        <p className='mt-6 text-lg max-w-xl leading-8 text-gray-900'>
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <a
            href='#'
            className='rounded bg-main-light px-3.5 py-2.5 text-sm font-semibold text-main-dark shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400'
          >
            RSVP
          </a>
        </div>
      </div>
    </div>
  </div>
);
