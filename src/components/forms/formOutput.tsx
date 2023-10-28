import { ApiResponse } from '@/utils/types';
import { useState } from 'react';
import { ClipboardCopy } from 'lucide-react';
import Button from '../buttons/button';
import Tooltip from '../tooltip';
import DownloadQR from '../downloadQR';

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
    <div>
      {response.error ? (
        <span>{`Error: ${response.error}`}</span>
      ) : (
        <div className='p-2 shadow-sm gap-x-2 text-sm flex items-center justify-center bg-gray-100 text-black rounded-lg'>
          <a
            href={`https://url-shortener.1.us-1.fl0.io/${response.slug}`}
            target='_blank'
            className='mr-4'
          >
            📎 {`https://url-shortener.1.us-1.fl0.io/${response.slug}`}
          </a>
          <Tooltip text={tooltipText}>
            <Button
              onClick={() => {
                setShortURL(
                  `https://url-shortener.1.us-1.fl0.io/${response.slug}`
                );
                copyToClipboard();
              }}
              className='bg-gray-200 shadow-sm text-black hover:bg-gray-300'
            >
              <ClipboardCopy size={16} color='black' />
            </Button>
          </Tooltip>
          <Tooltip text='Generate QR'>
            {<DownloadQR response={response} />}
          </Tooltip>
        </div>
      )}
    </div>
  );
}
