'use client';

import UrlForm from '@/components/forms/urlForm';
import { useState } from 'react';
import { ApiResponse } from '@/utils/types';
import FormOutput from '@/components/forms/formOutput';

export default function Home() {
  const [response, setResponse] = useState<ApiResponse | null>(null);

  return (
    <main className='flex flex-col w-full items-center justify-evenly min-h-1/2'>
      <div className='max-w-2xl mt-8 xl:max-w-3xl text-center'>
        <h1 className='my-5 capitalize font-display text-5xl md:text-6xl  font-extrabold leading-[1.15] sm:leading-[1.15]"'>
          Links with{' '}
          <span className='bg-gradient-to-r from-blue-500 to-red-600 bg-clip-text text-transparent'>
            Superpowers
          </span>
        </h1>
        <h2 className='text-lg text-center max-w-2xl'>
          Create short links and QR Codes. Share them anywhere. Track what’s
          working, and what’s not. All in one platform.
        </h2>
      </div>
      <div className='w-full my-8 flex flex-col items-center justify-center'>
        <UrlForm setResponse={setResponse} />
        <div className='flex items-center justify-center gap-3 mt-6'>
          {response && <FormOutput response={response} />}
        </div>
      </div>
    </main>
  );
}
