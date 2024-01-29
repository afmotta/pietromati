"use server";
import { sql } from "@vercel/postgres";

async function getData() {
  "use server";
  const data = await sql`SELECT * FROM public.rsvp`;
  return { rows: data.rows, count: data.rowCount };
}

const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
]

function Table({ rows }) {
  return (
    <div>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='sm:flex sm:items-center'>
          <div className='sm:flex-auto'>
            <h1 className='text-base font-semibold leading-6 text-gray-900'>
              RSVP
            </h1>
            <p className='mt-2 text-sm text-gray-700'>Tutte le rispose</p>
          </div>
        </div>
      </div>
      <div className='mt-8 flow-root overflow-hidden'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <table className='w-full text-left'>
            <thead className='bg-white'>
              <tr>
                <th
                  scope='col'
                  className='relative isolate py-3.5 pr-3 text-left text-sm font-semibold text-gray-900'
                >
                  Nome
                  <div className='absolute inset-y-0 right-full -z-10 w-screen border-b border-b-gray-200' />
                  <div className='absolute inset-y-0 left-0 -z-10 w-screen border-b border-b-gray-200' />
                </th>
                <th
                  scope='col'
                  className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell'
                >
                  Confermato
                </th>
                <th
                  scope='col'
                  className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell'
                >
                  # Ospiti
                </th>
                <th
                  scope='col'
                  className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 md:table-cell'
                >
                  Email
                </th>
                <th
                  scope='col'
                  className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 md:table-cell'
                >
                  Telefono
                </th>
                <th
                  scope='col'
                  className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                >
                  Navetta
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id}>
                  <td className='relative py-4 pr-3 text-sm font-medium text-gray-900'>
                    {r.name}
                    <div className='absolute bottom-0 right-full h-px w-screen bg-gray-100' />
                    <div className='absolute bottom-0 left-0 h-px w-screen bg-gray-100' />
                  </td>
                  <td className='px-3 py-4 text-sm text-gray-500'>
                    {r.isComing}
                  </td>
                  <td className='px-3 py-4 text-sm text-gray-500'>
                    {r.count}
                  </td>
                  <td className='px-3 py-4 text-sm text-gray-500'>
                    {person.role}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default async function Admin() {
  const { rows } = await getData();

  return (
    <>
      ADMIN: {data.count}
      <Table rows={rows} />
    </>
  );
}
