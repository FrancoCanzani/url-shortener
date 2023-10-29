'use client';

import { useState } from 'react';
import LinkForm from './forms/linkForm';
import Link from './link';
import { LinkType } from '@/utils/types';

export default function LinkShortener() {
  const [linkData, setLinkData] = useState<LinkType | null>(null);
  const [error, setError] = useState<string | null>(null);

  return (
    <section className='w-full flex flex-col items-center justify-center gap-y-4 mb-10'>
      <LinkForm setLinkData={setLinkData} setError={setError} />
      <div className='h-10 w-full flex items-center justify-center'>
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
