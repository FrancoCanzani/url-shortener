import UrlForm from '@/components/forms/urlForm';

export default function Home() {
  return (
    <main className='flex flex-col w-full items-center justify-center min-h-screen'>
      <h1 className='font-semibold text-2xl py-2 mb-4'>URL Shortener</h1>
      <UrlForm />
    </main>
  );
}
