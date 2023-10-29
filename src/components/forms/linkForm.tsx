'use client';

import { CornerDownLeft } from 'lucide-react';
import Button from '../buttons/button';
import { Dispatch, SetStateAction, useRef } from 'react';
import handleURL from '@/utils/actions/handleURL';
import { LinkType } from '@/utils/types';

export default function LinkForm({
  setLinkData,
}: {
  setLinkData: Dispatch<SetStateAction<LinkType | null>>;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const submitRef = useRef<React.ElementRef<'button'>>(null);

  return (
    <form
      ref={formRef}
      action={async (FormData) => {
        const data = {
          url: FormData.get('url'),
          slug: FormData.get('slug'),
        };
        const res = await handleURL(data);
        setLinkData(res);
        if (!res.error) {
          formRef?.current?.reset(); // Reset the form only when there's no error
        }
      }}
      className='w-4/5 lg:w-2/3 flex items-center gap-x-2 justify-center'
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
        className='bg-slate-900 px-2.5 py-1 rounded-lg text-white placeholder:text-gray-400 ring-0 outline-none resize-none font-mono text-sm h-10 w-full transition-all duration-300'
      />
      <div className='bg-slate-900 flex items-center justify-center px-2.5 py-1 rounded-lg text-white placeholder:text-gray-400 ring-0 outline-none resize-none font-mono text-sm h-10 w-full transition-all duration-300'>
        <p>clipped.site/</p>
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
          placeholder='slug'
          className='bg-slate-900 text-white placeholder:text-gray-400 ring-0 outline-none resize-none font-mono text-sm h-10 w-full transition-all duration-300'
        />
      </div>
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
