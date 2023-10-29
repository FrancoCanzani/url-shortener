'use client';

import { Dispatch, SetStateAction, useRef } from 'react';
import { LinkType } from '@/utils/types';
import SubmitButton from '../buttons/submitButton';
import handleLink from '@/utils/actions/handleLink';

export default function LinkForm({
  setLinkData,
  setError,
}: {
  setLinkData: Dispatch<SetStateAction<LinkType | null>>;
  setError: Dispatch<SetStateAction<string | null>>;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const submitRef = useRef<React.ElementRef<'button'>>(null);

  const handleError = (message: string) => {
    setError(message);
    setTimeout(() => {
      setError(null);
    }, 2500);
  };

  return (
    <form
      ref={formRef}
      action={async (FormData) => {
        try {
          const url = FormData.get('link');
          const slug = FormData.get('slug');

          if (!url) {
            handleError('URL cannot be empty.');
            return;
          }

          const data: { url: FormDataEntryValue; slug?: FormDataEntryValue } = {
            url,
          };
          if (slug) data.slug = slug;

          const res = await handleLink(data);
          setLinkData(res);

          if (res && !res.error) {
            formRef?.current?.reset();
          } else {
            handleError(res.message);
          }
        } catch (error: unknown) {
          if (error instanceof Error) {
            handleError(error.message);
          } else {
            handleError('An unexpected error occurred.');
          }
        }
      }}
      className='w-11/12 lg:w-3/4 flex items-center gap-x-2 justify-center mb-2'
    >
      <input
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            submitRef.current?.click();
          }
        }}
        aria-label='Enter a URL'
        type='text'
        id='link'
        name='link'
        autoFocus
        placeholder='link'
        required
        className='bg-slate-900 px-2.5 py-1 rounded-lg text-white placeholder:text-gray-400 ring-0 outline-none resize-none font-mono text-sm h-11 w-full transition-all duration-300'
      />

      <div className='bg-slate-900 hidden sm:flex items-center justify-center px-2.5 py-1 rounded-lg text-white placeholder:text-gray-400 ring-0 outline-none resize-none font-mono text-sm h-11 w-full transition-all duration-300'>
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
          className='bg-slate-900 text-white placeholder:text-gray-400 ring-0 outline-none resize-none font-mono text-sm h-11 w-full transition-all duration-300'
        />
      </div>

      <SubmitButton submitRef={submitRef} />
    </form>
  );
}
