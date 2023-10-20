import { CornerDownLeft } from 'lucide-react';
import Button from './buttons/button';

export default function UrlForm() {
  return (
    <form
      action=''
      className='bg-black w-1/2 flex items-center justify-center px-2.5 py-1 rounded-lg text-white'
    >
      <input
        aria-label='Enter a URL'
        type='text'
        id='url'
        name='url'
        autoFocus
        placeholder='url'
        className='bg-transparent text-white placeholder:text-gray-400 ring-0 outline-none resize-none py-2.5 px-2 font-mono text-sm h-10 w-full transition-all duration-300'
      />
      <Button variant='submit' size={'small'} type='submit' aria-label='submit'>
        {<CornerDownLeft size={18} />}
      </Button>
    </form>
  );
}
