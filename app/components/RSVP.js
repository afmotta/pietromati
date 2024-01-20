"use client";

import { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function RSVP() {
  const [isComing, setIsComing] = useState(true);
  const [needsTransportation, setNeedsTransportation] = useState(false);

  return (
    <div
      id='rsvp'
      className='relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8'
    >
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='text-3xl font-handwrite font-bold tracking-tight text-main sm:text-6xl'>
          RSVP
        </h2>
        <p className='mt-2 text-lg leading-8 text-gray-600'>
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <form
        action='#'
        method='POST'
        className='mx-auto mt-16 max-w-xl sm:mt-20'
      >
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
          <div className='sm:col-span-2'>
            <label
              htmlFor='name'
              className='block text-sm font-semibold leading-6 text-gray-900'
            >
              Nome
            </label>
            <div className='mt-2.5'>
              <input
                type='text'
                name='name'
                id='name'
                autoComplete='name'
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <label
              htmlFor='count'
              className='block text-sm font-semibold leading-6 text-gray-900'
            >
              Numero ospiti
            </label>
            <div className='mt-2.5'>
              <input
                type='number'
                name='count'
                id='count'
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='phone'
              className='block text-sm font-semibold leading-6 text-gray-900'
            >
              Telefono
            </label>
            <div className='relative mt-2.5'>
              <input
                type='tel'
                name='phone'
                id='phone'
                autoComplete='tel'
                className='block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='email'
              className='block text-sm font-semibold leading-6 text-gray-900'
            >
              Email
            </label>
            <div className='mt-2.5'>
              <input
                type='email'
                name='email'
                id='email'
                autoComplete='email'
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-1'></div>
          <Switch.Group as='div' className='flex gap-x-4 sm:col-span-2'>
            <div className='flex h-6 items-center'>
              <Switch
                checked={isComing}
                onChange={setIsComing}
                className={classNames(
                  isComing ? "bg-main" : "bg-gray-200",
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main"
                )}
              >
                <span className='sr-only'>Agree to policies</span>
                <span
                  aria-hidden='true'
                  className={classNames(
                    isComing ? "translate-x-3.5" : "translate-x-0",
                    "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className='text-sm leading-6 text-gray-600'>
              Parteciperai al nostro matrimonio?
            </Switch.Label>
          </Switch.Group>
          <Switch.Group as='div' className='flex gap-x-4 sm:col-span-2'>
            <div className='flex h-6 items-center'>
              <Switch
                checked={needsTransportation}
                onChange={setNeedsTransportation}
                className={classNames(
                  needsTransportation ? "bg-main" : "bg-gray-200",
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main"
                )}
              >
                <span className='sr-only'>Trasporto</span>
                <span
                  aria-hidden='true'
                  className={classNames(
                    needsTransportation ? "translate-x-3.5" : "translate-x-0",
                    "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className='text-sm leading-6 text-gray-600'>
              Ti serve un passaggio per raggiungere il ricevimento dopo la
              cerimonia?
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className='sm:col-span-2 mt-5'>
          <label
            htmlFor='notes'
            className='block text-sm font-semibold leading-6 text-gray-900'
          >
            Note
          </label>
          <div className='mt-2.5'>
            <textarea
              name='notes'
              id='notes'
              rows={4}
              className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              defaultValue={""}
              placeholder='Per esempio, esigenze alimentari specifiche...'
            />
          </div>
        </div>
        <div className='mt-10'>
          <button
            type='submit'
            className='block w-full rounded-md bg-main px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-main-lighter hover:text-main-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main'
          >
            Invia
          </button>
        </div>
      </form>
    </div>
  );
}
