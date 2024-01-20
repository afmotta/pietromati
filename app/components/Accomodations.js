const locations = [
  {
    name: "Hotel 0",
    address: "4556 Brendan Ferry",
    phone: "029215432",
    email: "info@hotel.info",
  },
  {
    name: "Hotel 1",
    address: "4556 Brendan Ferry",
    phone: "029215432",
    email: "info@hotel.info",
  },
  {
    name: "Hotel 2",
    address: "4556 Brendan Ferry",
    phone: "029215432",
    email: "info@hotel.info",
  },
  {
    name: "Hotel 3",
    address: "4556 Brendan Ferry",
    phone: "029215432",
    email: "info@hotel.info",
  },
  {
    name: "Hotel 4",
    address: "4556 Brendan Ferry",
    phone: "029215432",
    email: "info@hotel.info",
  },
];

export function Accomodations() {
  return (
    <div id="pernottamento" className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h3 className='text-base font-semibold leading-7 text-main'>
            Dormire a Napoli
          </h3>
          <h2 className='mt-2 text-3xl font-serif font-bold'>Pernottamento</h2>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
            id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
            fames.
          </p>
        </div>
        <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4'>
          {locations.map((i) => (
            <div key={i.name}>
              <h3 className='border-l border-main pl-6 font-semibold text-gray-900'>
                {i.name}
              </h3>
              <address className='border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600'>
                <p>{i.address}</p>
                <p>{i.phone}</p>
                <p>{i.email}</p>
              </address>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
