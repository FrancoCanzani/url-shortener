'use client';

import { CornerDownLeft } from 'lucide-react';
import Button from '../buttons/button';
import { useRef } from 'react';
import handleURL from '@/utils/actions/handleURL';
import { useState } from 'react';
import { ApiResponse } from '@/utils/types';
import FormOutput from './formOutput';

export default function UrlForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const submitRef = useRef<React.ElementRef<'button'>>(null);
  const [response, setResponse] = useState<ApiResponse | null>(null);

  return (
    <section className='w-full items-center justify-center flex flex-col'>
      <form
        ref={formRef}
        action={async (FormData) => {
          const data = {
            url: FormData.get('url'),
            slug: FormData.get('slug'),
          };
          const apiResponse = await handleURL(data);
          setResponse(apiResponse);

          if (!apiResponse.error) {
            formRef?.current?.reset(); // Reset the form only when there's no error
          }
        }}
        className='bg-black w-2/3 flex items-center justify-center px-2.5 py-1 rounded-lg text-white'
      >
        <input
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              submitRef.current?.click();
            }
          }}
          aria-label='Enter a URL'
          type='url'
          id='url'
          name='url'
          autoFocus
          placeholder='url'
          required
          className='bg-transparent text-white placeholder:text-gray-400 ring-0 outline-none resize-none py-2.5 px-2 font-mono text-sm h-10 w-full transition-all duration-300'
        />
        <span>/</span>
        <input
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              submitRef.current?.click();
            }
          }}
          aria-label='Enter a Slug'
          type='slug'
          id='slug'
          name='slug'
          placeholder='slug (optional)'
          className='bg-transparent text-white placeholder:text-gray-400 ring-0 outline-none resize-none py-2.5 px-2 font-mono text-sm h-10 w-full transition-all duration-300'
        />
        <Button
          ref={submitRef}
          variant='submit'
          size={'small'}
          type='submit'
          aria-label='submit'
        >
          {<CornerDownLeft size={18} />}
        </Button>
      </form>
      <FormOutput response={response} />
    </section>
  );
}
