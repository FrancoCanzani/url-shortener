'use client';

import { CornerDownLeft } from 'lucide-react';
import Button from './buttons/button';
import { useRef } from 'react';
import handleURL from '@/utils/actions/handleURL';

export default function UrlForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const submitRef = useRef<React.ElementRef<'button'>>(null);

  return (
    <form
      ref={formRef}
      action={async (FormData) => {
        await handleURL(FormData.get('url'));
        formRef?.current?.reset();
      }}
      className='bg-black w-1/2 flex items-center justify-center px-2.5 py-1 rounded-lg text-white'
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
  );
}
