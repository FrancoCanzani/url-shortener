import Link from 'next/link';
import { Github } from 'lucide-react';

export default function Header() {
  return (
    <header className='sticky bg-gray-50 top-0 z-20 mx-auto flex h-14 w-full max-w-5xl flex-row flex-nowrap items-center justify-between py-6 px-4 sm:px-6'>
      <Link
        href={'/'}
        className='font-normal text-lg flex items-center gap-x-2'
      >
        📎 Clipped.site/
      </Link>
      <Link
        href={'https://github.com/FrancoCanzani/url-shortener'}
        target='_blank'
        aria-label='Github Repository'
      >
        <Github size={20} fill='black' />
      </Link>
    </header>
  );
}
