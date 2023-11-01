'use client';

import { LinkType } from '@/utils/types';
import { ClipboardCopy, Share2 } from 'lucide-react';
import Button from './buttons/button';
import Tooltip from './tooltip';
import GenerateQR from './generateQR';
import { copyToClipboard } from '@/utils/copyToClipboard';
import { handleShare } from '@/utils/handleShare';
import { useState } from 'react';

export default function Link({ linkData }: { linkData: LinkType | null }) {
  const [clipboardText, setClipboardText] = useState('Copy to clipboard');

  if (!linkData) {
    return null;
  }

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const shortenedURL = `${API_URL}/${linkData.slug}`;

  return (
    <div className='flex border items-center justify-between px-4 py-3 space-x-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transform transition-transform duration-200 hover:scale-105'>
      <a
        href={shortenedURL}
        target='_blank'
        className='flex-1 text-base px-2 text-gray-800 truncate hover:text-blue-600 focus:text-blue-600'
      >
        📎 clipped.site/<span className='font-semibold'>{linkData.slug}</span>
      </a>

      <div className='flex items-center space-x-2'>
        <Tooltip text={clipboardText}>
          <Button
            className='p-2 bg-gray-200 hover:bg-gray-300 shadow-md transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:outline-none'
            onClick={() =>
              copyToClipboard({
                textToCopy: shortenedURL,
                onSuccess: () => {
                  setClipboardText('Copied!');
                  setTimeout(() => {
                    setClipboardText('Copy to clipboard');
                  }, 1000);
                },
                onFailure: () => setClipboardText('Failed to copy'),
              })
            }
          >
            <ClipboardCopy
              size={16}
              className='text-gray-700 hover:text-gray-900'
            />
          </Button>
        </Tooltip>

        <Tooltip text='Share'>
          <Button
            className='p-2 bg-gray-200 hover:bg-gray-300 shadow-md transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:outline-none'
            onClick={() => handleShare(shortenedURL)}
          >
            <Share2 size={16} className='text-gray-700 hover:text-gray-900' />
          </Button>
        </Tooltip>

        <Tooltip text='Generate QR'>
          <GenerateQR link={linkData} />
        </Tooltip>
      </div>
    </div>
  );
}
