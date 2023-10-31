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
      className='flex gap-x-4 items-center justify-center w-full mb-6'
    >
      <input
        type='url'
        id='link'
        name='link'
        placeholder='Enter your link here'
        required
        autoFocus
        className='w-full px-4 py-3 bg-slate-900 text-white placeholder:text-gray-400 rounded-lg shadow-md outline-none transition duration-300'
      />

      <div className='hidden sm:flex items-center w-full bg-slate-900 text-white rounded-lg shadow-md'>
        <span className='px-4 py-3 bg-gray-800 rounded-xl'>clipped.site/</span>
        <input
          type='text'
          id='slug'
          name='slug'
          placeholder='custom-slug'
          className='w-full px-4 py-3 bg-slate-900 placeholder:text-gray-400 rounded-r-lg outline-none transition duration-300'
        />
      </div>
      <SubmitButton submitRef={submitRef} />
    </form>
  );
}
