import { ApiResponse } from '@/utils/types';
import { useState } from 'react';
import { ClipboardCopy } from 'lucide-react';
import Button from '../buttons/button';
import Tooltip from '../tooltip';

export default function FormOutput({
  response,
}: {
  response: ApiResponse | null;
}) {
  const [shortURL, setShortURL] = useState('');
  const [tooltipText, setTooltipText] = useState('Copy to clipboard');

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(shortURL);
      setTooltipText('Copied!');
      setTimeout(() => {
        setTooltipText('Copy to clipboard');
      }, 1500);
    } catch (err) {
      setTooltipText('Failed to copy');
    }
  }

  if (!response) {
    return;
  }

  return (
    <div className='mt-6'>
      {response.error ? (
        <span>{`Error: ${response.error}`}</span>
      ) : (
        <div className='px-2 py-1 text-sm flex items-center justify-center bg-gray-200 rounded-lg'>
          <a
            href={`https://url-shortener-btnl.onrender.com/${response.slug}`}
            target='_blank'
            className='mr-4'
          >
            {`https://url-shortener-btnl.onrender.com/${response.slug}`}
          </a>
          <Tooltip text={tooltipText}>
            {
              <Button
                onClick={() => {
                  setShortURL(
                    `https://url-shortener-btnl.onrender.com/${response.slug}`
                  );
                  copyToClipboard();
                }}
                aria-label='Copy to clipboard'
              >
                <ClipboardCopy size={16} />
              </Button>
            }
          </Tooltip>
        </div>
      )}
    </div>
  );
}
