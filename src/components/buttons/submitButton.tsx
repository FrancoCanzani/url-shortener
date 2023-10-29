import { Ref } from 'react';
import Button from './button';
import { CornerDownLeft } from 'lucide-react';
import { useFormStatus } from 'react-dom';
import cn from '@/utils/cn';

export default function SubmitButton({
  submitRef,
}: {
  submitRef: Ref<HTMLButtonElement>;
}) {
  const { pending } = useFormStatus();

  return (
    <Button
      ref={submitRef}
      variant='submit'
      size={'small'}
      type='submit'
      aria-label='submit'
      disabled={pending}
      className={cn('h-11 px-3', {
        'opacity-75': pending,
      })}
    >
      {<CornerDownLeft size={20} />}
    </Button>
  );
}
