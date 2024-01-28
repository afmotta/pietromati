import { MapPinIcon, MapIcon, StarIcon } from "@heroicons/react/20/solid";
import { SectionHeader } from ".";

const features = [
  {
    name: "Indirizzo",
    description: "Via Salvatore Nullo 176, Giugliano in Campania (NA)",
    icon: MapPinIcon,
  },
  {
    name: "Come arrivare",
    description:
      "Imboccare la tangenziale A56 in direzione Pozzuoli. Prendere l’uscita Licola e proseguire su via S. Nullo per circa 1.5 km.",
    icon: MapIcon,
  },
  {
    name: "Navetta",
    description: `Per chi non è munito di auto abbiamo previsto un servizio navetta
      per raggiungere il luogo del ricevimento, che dopo la festa vi
      riporterà al Vomero. Non dimenticate di segnalarci se avete
      bisogno di un passaggio quando confermate la vostra
      partecipazione!`,
    icon: StarIcon,
  },
];

export function Party() {
  return (
    <div
      id='ricevimento'
      className='py-32 overflow-hidden sm:py-40 bg-gray-100 rounded-2xl'
    >
      <div className='mx-auto max-w-7xl px-6 lg:flex lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8'>
          <div className='lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8'>
            <SectionHeader
              title='Il Ricevimento'
              subtitle='Torre dei Saraceni'
            />

            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Dopo la cerimonia festeggeremo insieme nella cornice di Torre San
              Severino. Non vediamo l’ora di ballare, cantare e divertirci con
              voi!
            </p>
            <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none'>
              {features.map((feature) => (
                <div key={feature.name} className='relative pl-9'>
                  <dt className='inline font-semibold text-gray-900'>
                    <feature.icon
                      className='absolute left-1 top-1 h-5 w-5 text-main'
                      aria-hidden='true'
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className='inline'>{feature.description}</dd>
                </div>
              ))}
            </dl>
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
