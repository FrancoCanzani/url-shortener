import Link from 'next/link';

export default function Header() {
  return (
    <header className='sticky bg-gray-50 top-0 z-20 mx-auto flex h-14 w-full max-w-5xl flex-row flex-nowrap items-stretch justify-between py-3 px-4 sm:px-6'>
      <Link
        href={'/'}
        className='font-normal text-lg flex items-center gap-x-2'
      >
        📎 Clipped.site/
      </Link>
    </header>
  );
}
