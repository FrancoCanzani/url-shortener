import { ApiResponse } from '@/utils/types';

export default function FormOutput({
  response,
}: {
  response: ApiResponse | null;
}) {
  return (
    <div className='mt-6'>
      {response && response.error ? (
        <span>{`Error: ${response.error}`}</span>
      ) : response?.slug ? (
        <a
          href={`https://url-shortener-btnl.onrender.com/${response.slug}`}
          target='_blank'
        >
          {`https://url-shortener-btnl.onrender.com/${response.slug}`}
        </a>
      ) : null}
    </div>
  );
}
