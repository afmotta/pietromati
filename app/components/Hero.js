import { Button } from "../components";

export const Hero = () => (
  <div className='relative isolate overflow-hidden pt-14 h-screen flex items-center	'>
    <img
      src='/hero.jpg'
      alt=''
      className='absolute inset-0 -z-10 h-full w-full object-cover grayscale-[20%]'
    />
    <div className='mx-auto py-32 sm:py-48 lg:py-56'>
      <div className='text-center flex items-center flex-col'>
        <div className='bg-gray-900/30 my-3 pt-8 pb-6 px-6'>
          <h1 className='text-5xl font-handwrite tracking-tight text-main sm:text-9xl'>
            Pietro e MariaTeresa
          </h1>
          <h2 className='text-xl font-sans font-extralight tracking-tight text-white sm:text-3xl uppercase'>
            21 Settembre 2024
          </h2>
          <h2 className='text-xl font-sans font-extralight tracking-tight text-white sm:text-3xl uppercase'>
            Napoli
          </h2>
        </div>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <a href='#rsvp'>
            <Button>RSVP</Button>
          </a>
        </div>
      </div>
    </div>
  </div>
);
