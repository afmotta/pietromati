"use client";
import { useCallback, useState } from "react";
import { Button } from "../components";

export function Gift2() {
  const [copied, setCopied] = useState(false);
  const cb = useCallback(() => {
    navigator.clipboard.writeText("IBAN!!!");
    setCopied(true);
  }, [setCopied]);

  return (
    <div className='relative'>
      <div className='overflow-hidden'>
        <div className='mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32'>
          <div className='mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center'>
            <div className='w-full max-w-xl lg:shrink-0 xl:max-w-2xl'>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                Aiutaci ad iniziare la nostra vita{" "}
                <span className='text-main'>insieme</span>.
              </h1>
              <p className='relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none'>
                Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis
                cupidatat mollit aute velit. Et labore commodo nulla aliqua
                proident mollit ullamco exercitation tempor. Sint aliqua anim
                nulla sunt mollit id pariatur in voluptate cillum. Eu voluptate
                tempor esse minim amet fugiat veniam occaecat aliqua.
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
