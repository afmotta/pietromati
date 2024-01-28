import { MapPinIcon, ClockIcon, StarIcon } from "@heroicons/react/20/solid";
import { SectionHeader } from ".";
const features = [
  {
    name: "Indirizzo",
    description: "Via Alessandro Scarlatti 29, Napoli",
    icon: MapPinIcon,
  },
  {
    name: "Orario",
    description: "15:30",
    icon: ClockIcon,
  },
  {
    name: "Parcheggio",
    description:
      "È possibile parcheggiare l’auto nel cortile dell’oratorio adiacente alla Chiesa.",
    icon: StarIcon,
  },
];

export function Wedding() {
  return (
    <div id='cerimonia' className='overflow-hidden bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className='lg:pr-8 lg:pt-4'>
            <div className='lg:max-w-lg'>
              <SectionHeader
                title='La cerimonia'
                subtitle='Chiesa del Sacro Cuore di Gesù'
              />
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                La cerimonia si svolgerà presso la Chiesa salesiana del Sacro
                Cuore di Gesù, nel quartiere Vomero.
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
          </div>
          <img
            src='/napoli.jpg'
            alt='Napoli'
            className='w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[48rem] md:-ml-4 lg:-ml-0 -translate-x-[55%] sm:translate-x-0'
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
