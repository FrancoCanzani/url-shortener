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
          <div className='flex border items-center justify-between px-4 py-3 space-x-4 bg-red-50 text-red-500 border-red-200 rounded-lg shadow-md hover:shadow-lg transform transition-transform duration-200 hover:scale-105'>
            Error: {error}
          </div>
        ) : (
          linkData && <Link linkData={linkData} />
        )}
      </div>
    </section>
  );
}
