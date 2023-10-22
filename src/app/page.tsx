import UrlForm from '@/components/forms/urlForm';

export default function Home() {
  return (
    <main className='flex flex-col w-full items-center justify-evenly min-h-screen'>
      <h1 className='mt-5 capitalize font-display text-4xl font-extrabold leading-[1.15] sm:text-6xl sm:leading-[1.15]"'>
        Links with{' '}
        <span className='bg-gradient-to-r from-blue-500 to-red-600 bg-clip-text text-transparent'>
          Superpowers
        </span>
      </h1>
      <UrlForm />
    </main>
  );
}
