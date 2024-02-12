"use client";
import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function Table({ rows, count, page, pageSize }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const pageLower = pageSize * (page - 1) + 1;
  const pageUpper = page * pageSize;
  const isFirstPage = page === 1;
  const isLastPage = pageUpper > count;

  return (
    <div>
      <div className='mx-auto px-4 sm:px-6 lg:px-8'>
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
        <div className='mx-auto px-4 sm:px-6 lg:px-8'>
          <table className='w-full text-left'>
            <thead className='bg-white'>
              <tr>
                <th
                  scope='col'
                  className='relative isolate py-3.5 pr-3 text-left text-sm font-semibold text-gray-900'
                >
                  Nome
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
                <th
                  scope='col'
                  className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                >
                  Note
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
                    {r.is_coming ? (
                      <CheckIcon className='h-5 w-5 text-green-500' />
                    ) : (
                      <XMarkIcon className='h-5 w-5 text-main' />
                    )}
                  </td>
                  <td className='px-3 py-4 text-sm text-gray-500'>{r.count}</td>
                  <td className='px-3 py-4 text-sm text-gray-500'>{r.email}</td>
                  <td className='px-3 py-4 text-sm text-gray-500'>{r.phone}</td>
                  <td className='px-3 py-4 text-sm text-gray-500'>
                    {r.needs_transportation ? (
                      <CheckIcon className='h-5 w-5 text-green-500' />
                    ) : (
                      <XMarkIcon className='h-5 w-5 text-main' />
                    )}
                  </td>
                  <td className='px-3 py-4 text-sm text-gray-500'>{r.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <nav
        className='flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6'
        aria-label='Pagination'
      >
        <div className='hidden sm:block'>
          <p className='text-sm text-gray-700'>
            Showing <span className='font-medium'>{pageLower}</span> to{" "}
            <span className='font-medium'>
              {pageUpper > count ? count : pageUpper}
            </span>{" "}
            of <span className='font-medium'>{count}</span> results
          </p>
        </div>
        <div className='flex flex-1 justify-between sm:justify-end'>
          <button
            onClick={() =>
              isFirstPage
                ? null
                : router.push(
                    pathname + "?" + createQueryString("page", page - 1)
                  )
            }
            className='relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200'
            disabled={isFirstPage}
          >
            Previous
          </button>
          <button
            onClick={() =>
              isLastPage
                ? null
                : router.push(
                    pathname + "?" + createQueryString("page", page + 1)
                  )
            }
            className='relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200'
            disabled={isLastPage}
          >
            Next
          </button>
        </div>
      </nav>
    </div>
  );
}
