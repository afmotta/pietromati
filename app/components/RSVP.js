"use client";
import clsx from "clsx";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { useForm } from "react-hook-form";

export function RSVP() {
  const [needsTransportation, setNeedsTransportation] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isValid },
    watch,
  } = useForm();

  const isComing = watch("is-coming", true);

  async function onSubmit(data) {
    console.log("DATA", data);
    return fetch("/api/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, isComing, needsTransportation }),
    });
  }

  return (
    <div
      id='rsvp'
      className='relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8'
    >
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='text-3xl font-sans font-thin tracking-tight text-main sm:text-6xl'>
          R S V P
        </h2>
        <p className='mt-2 text-lg leading-8 text-gray-600'>
          Compilate questa sezione entro il <strong>30 giugno</strong> per
          confermare la vostra presenza in questo giorno speciale.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mx-auto mt-16 max-w-xl sm:mt-20'
      >
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
          <div className='sm:col-span-2'>
            <label
              htmlFor='name'
              className='block text-base font-semibold leading-6 text-gray-900'
            >
              Nome
            </label>
            <div className='mt-2.5'>
              <input
                type='text'
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main sm:text-sm sm:leading-6'
                {...register("name", { required: true })}
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label className='text-base font-semibold text-gray-900 leading-6'>
              Parteciperai al nostro matrimonio?
            </label>
            <fieldset className='mt-4' {...register("is-coming")}>
              <legend className='sr-only'>Notification method</legend>
              <div className='space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0'>
                <div className='flex items-center'>
                  <input
                    id='true'
                    name='is-coming'
                    type='radio'
                    defaultChecked='true'
                    className='h-4 w-4 border-gray-300 text-main focus:ring-main'
                  />
                  <label
                    htmlFor='true'
                    className='ml-3 block text-sm font-medium leading-6 text-gray-900'
                  >
                    Si!
                  </label>
                </div>
                <div className='flex items-center'>
                  <input
                    id='false'
                    name='is-coming'
                    type='radio'
                    className='h-4 w-4 border-gray-300 text-main focus:ring-main'
                  />
                  <label
                    htmlFor='false'
                    className='ml-3 block text-sm font-medium leading-6 text-gray-900'
                  >
                    Purtroppo no
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div>
            <label
              htmlFor='count'
              className='block text-base font-semibold leading-6 text-gray-900'
            >
              Ospiti confermati
            </label>
            <div className='mt-2.5'>
              <input
                type='number'
                min={1}
                max={10}
                disabled={!isComing}
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200'
                {...register("count", { required: isComing, max: 10, min: 1 })}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='phone'
              className='block text-base font-semibold leading-6 text-gray-900'
            >
              Telefono
            </label>
            <div className='relative mt-2.5'>
              <input
                type='tel'
                disabled={!isComing}
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200'
                {...register("phone", { required: isComing })}
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='email'
              className='block text-base font-semibold leading-6 text-gray-900'
            >
              Email
            </label>
            <div className='mt-2.5'>
              <input
                type='email'
                autoComplete='email'
                disabled={!isComing}
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200'
                {...register("email", { required: isComing })}
              />
            </div>
          </div>
          <div className='sm:col-span-1'></div>

          <Switch.Group as='div' className='flex gap-x-4 sm:col-span-2'>
            <Switch.Label className='text-base font-semibold leading-6 text-gray-600'>
              Ti serve la navetta per raggiungere il ricevimento dopo la
              cerimonia?
            </Switch.Label>
            <div className='flex h-6 items-center'>
              <Switch
                checked={needsTransportation}
                onChange={(val) =>
                  isComing ? setNeedsTransportation(val) : null
                }
                className={clsx(
                  needsTransportation ? "bg-main" : "bg-gray-200",
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"
                )}
              >
                <span className='sr-only'>Trasporto</span>
                <span
                  aria-hidden='true'
                  className={clsx(
                    needsTransportation ? "translate-x-3.5" : "translate-x-0",
                    "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  )}
                />
              </Switch>
            </div>
          </Switch.Group>
        </div>
        <div className='sm:col-span-2 mt-5'>
          <label
            htmlFor='notes'
            className='block text-base font-semibold leading-6 text-gray-900'
          >
            Note
          </label>
          <div className='mt-2.5'>
            <textarea
              rows={4}
              className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200'
              defaultValue={""}
              disabled={!isComing}
              placeholder='Per esempio allergie, intolleranze o altre esigenze alimentari specifiche…'
              {...register("notes")}
            />
          </div>
        </div>
        <div className='mt-10'>
          <button
            type='submit'
            className='block w-full rounded-md bg-main px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-main-lighter hover:text-main-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200'
            disabled={!isValid}
          >
            Invia
          </button>
        </div>
      </form>
    </div>
  );
}
