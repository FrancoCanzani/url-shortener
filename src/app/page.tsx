import LinkShortener from '@/components/linkShortener';
import RecentLinks from '@/components/recentLinks';

export default function Home() {
  return (
    <main className='flex flex-col w-full items-center justify-evenly'>
      <div className='max-w-2xl my-8 xl:max-w-3xl text-center'>
        <h1 className='my-5 capitalize font-display text-5xl md:text-6xl font-extrabold leading-[1.15] sm:leading-[1.15]"'>
          Links with{' '}
          <span className='bg-gradient-to-r from-blue-500 to-red-600 bg-clip-text text-transparent'>
            Superpowers
          </span>
        </h1>
        <h2 className='text-lg text-center max-w-2xl'>
          Create short links and QR Codes. Share them anywhere. Track what’s
          working, and what’s not. All in one platform.
        </h2>
      </div>
      <LinkShortener />
      <RecentLinks />
    </main>
  );
}
