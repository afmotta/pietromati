"use client";
import { useCallback, useState } from "react";
import { Button } from "../components";

const IBAN = "IT98O0306933590100000010072";
export function Gift() {
  const [copied, setCopied] = useState(false);
  const cb = useCallback(() => {
    navigator.clipboard.writeText(IBAN);
    setCopied(true);
  }, [setCopied]);

  return (
    <div className='relative'>
      <div className='overflow-hidden'>
        <div className='mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32'>
          <div className='mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center'>
            <div className='w-full max-w-xl lg:shrink-0 xl:max-w-2xl'>
              <h1 className='text-4xl font-sans font-light tracking-tight text-gray-900 sm:text-6xl'>
                L&#8217; inizio della nostra vita{" "}
                <span className='text-main'>insieme</span>...
              </h1>
              <p className='relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none'>
                Il regalo più bello è la vostra presenza! <br />
                Se desiderate contribuire alla nascita della nostra famiglia,
                potete farlo tramite: <br />
                IBAN {IBAN}, intestato a Pietro Paraboni
              </p>
              <div className='width-full mt-8'>
                <Button onClick={cb}>
                  {!copied ? "Copia IBAN" : "IBAN copiato negli appunti"}
                </Button>
              </div>
            </div>
            <div className='mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0'>
              <div className='relative'>
                <img
                  src='/gift.jpg'
                  alt=''
                  className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                />
                <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
