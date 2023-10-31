'use client';

import { useState } from 'react';
import LinkForm from './forms/linkForm';
import Link from './link';
import { LinkType } from '@/utils/types';

export default function LinkShortener() {
  const [linkData, setLinkData] = useState<LinkType | null>(null);
  const [error, setError] = useState<string | null>(null);

  return (
    <section className='flex w-full flex-col items-center justify-center gap-y-4 p-2 py-6 lg:p-10'>
      <LinkForm setLinkData={setLinkData} setError={setError} />
      <div className='h-10 flex items-center justify-center'>
        {error ? (
          <div className='animate-fade p-2 shadow-sm text-xs flex items-center justify-between bg-red-100 ring-inset ring-1 ring-red-500 rounded-lg'>
            Error: {error}
          </div>
        ) : (
          linkData && <Link linkData={linkData} />
        )}
      </div>
    </section>
  );
}
