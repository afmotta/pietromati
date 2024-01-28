import { SectionHeader } from "./SectionHeader";

const locations = [
  {
    name: "VILLA ALBINA",
    website: "https://www.villaalbina.it/",
    address: "Via Mattia Preti, 6",
    phone: "0815788340",
    email: "villalbina2013@gmail.com",
  },
  {
    name: "CHIOSTRO SAN FRANCESCO",
    website: "https://chiostrosanfrancesco.it/",
    address: "Via Luca Giordano, 2",
    phone: "08119384301",
    email: "info@chiostrosanfrancesco.it",
  },
  {
    name: "7TH FLOOR SUITE",
    website: "https://www.7thfloorsuite.com/",
    address: "Via Bernini, 70",
    phone: "0815566300",
    email: "info@7thfloorsuite.com",
  },
  {
    name: "B&B SOLIMENA",
    website: "https://www.bbsolimena.com/",
    address: "Via Solimena, 113",
    phone: "3756350120 - 3385950726",
  },
  {
    name: "G&G NAPOLI",
    website: "https://www.ggnapolibnb.it/",
    address: "Via Bernini, 64",
    phone: "3351220866 - 3664522275",
  },
  {
    name: "VOMERO HILLS",
    website: "http://airbnb.com/h/vomerohillsrooms",
    address: "Via Bonito, 11",
    phone: "3391832579",
    email: "simonamautone00@gmail.com",
  },
  {
    name: "COCOMORGHEN",
    website: "https://cocomorghen.beddy.io/#/(beddy:home)",
    address: "Via Raffaele Morghen 67/A",
    phone: "3332722898",
    email: "info@cocomorghen.it",
  },
  {
    name: "LA DIMORA DEI REALI B&B",
    website: "https://www.ladimoradeireali.com/",
    address: "Via Michetti, 8",
    phone: "3473079910",
  },
  {
    name: "LA MAISONETTE B&B",
    website: "http://www.lamaisonnettebb.it",
    address: "Via Cimarosa 32",
    phone: "3297483282",
  },
  {
    name: "CASA LALLA",
    website: "https://abnb.me/Wpk5mrVXjsb",
    address: "Via Bonito, 11",
    phone: "3472190776",
  },
  {
    name: "TERRAZZA SANFELICE",
    website: "https://abnb.me/9WbYz4kMfAb",
    address: "Via Luigia Sanfelice, 83",
    phone: "3429485933",
  },
  {
    name: "MICHY M’HOUSE",
    website: "https://airbnb.com/h/michymhouse",
    address: "Via Solimena, 80",
    phone: "3484032297",
  },
  {
    name: "VILLINO MANINA",
    website: "https://www.airbnb.it/rooms/1943094",
    address: "Vicoletto Cimarosa, 5",
    phone: "335498412",
  },
  {
    name: "BELVEDERE BONITO",
    website: "https://www.belvederebonito.it/it",
    address: "Via Bonito, 29",
    phone: "3349951789",
  },
  {
    name: "IL CHIATTILLO",
    website: "https://www.ilchiattillo.com/",
    address: "Via Kerbaker, 55",
    phone: "3317017521",
  },
  {
    name: "MANCINI HOUSE",
    website: "https://www.airbnb.it/rooms/27024461",
    address: "Via Mancini, 22",
    phone: "3407818456",
  },
  {
    name: "CASA Il COLIBRÌ",
    website: "https://abnb.me/THJce1uayAb",
    address: "Via Belvedere",
    phone: "3337736994",
  },
  {
    name: "HOLIDAY HOME MAR PACIFICO",
    website: "https://www.booking.com/Share-6zWmdu",
    address: "Via Raffaele Tarantino, 8",
    phone: "3920689845",
  },
];

function Accomodation({ name, address, phone, email, website }) {
  return (
    <div className='hover:bg-main-lighter'>
      <h3 className='border-l border-main pl-6 font-semibold text-gray-900 '>
        {name}
      </h3>
      <address className='border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600'>
        <p>{address}</p>
        <p>{phone}</p>
        {email && <p>{email}</p>}
      </address>
    </div>
  );
}

export function Accomodations() {
  return (
    <div id='pernottamento' className='bg-gray-100 py-24 sm:py-32 '>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <SectionHeader title='Il pernottamento' subtitle='Dormire a Napoli' />
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Consigliamo a chi viene da fuori di alloggiare nel quartiere Vomero:
            in questo modo, potrete raggiungere a piedi la cerimonia ed
            usufruire della navetta. Inoltre, questo quartiere è un ottimo punto
            di partenza per esplorare Napoli. <br /> Vi lasciamo qualche
            suggerimento e link di hotel e bed&breakfast in zona:
          </p>
        </div>
        <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4'>
          {locations.map((i) => {
            return i.website ? (
              <a href={i.website} target='_blank' key={i.name}>
                <Accomodation {...i} />
              </a>
            ) : (
              <Accomodation {...i} key={i.name} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
