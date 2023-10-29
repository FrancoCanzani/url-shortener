'use client';

import { useState } from 'react';
import LinkForm from './forms/linkForm';
import Link from './link';
import { LinkType } from '@/utils/types';

export default function LinkShortener() {
  const [linkData, setLinkData] = useState<LinkType | null>(null);

  return (
    <section className='w-full flex flex-col items-center justify-center gap-y-4'>
      <LinkForm setLinkData={setLinkData} />
      <Link linkData={linkData} />
    </section>
  );
}
