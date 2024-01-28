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
        <h1 className='text-6xl font-handwrite tracking-tight text-main sm:text-9xl'>
          Pietro e MariaTeresa
        </h1>
        <p className='mt-6 text-lg max-w-xl leading-8 text-white'>
          Benvenuti! In questa pagina condivideremo con voi tutte le
          informazioni riguardanti il nostro Matrimonio. <br /> Grazie di
          accompagnarci in questo viaggio!
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <a href='#rsvp'>
            <Button>RSVP</Button>
          </a>
        </div>
      </div>
    </div>
  </div>
);
