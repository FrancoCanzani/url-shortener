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

  const shortenedURL = `clipped.site/${linkData.slug}`;

  return (
    <div className='p-2 hover:scale-105 transition-all ease-in-out animate-fade shadow-sm gap-x-2 text-sm text-clip flex items-center justify-between bg-gray-100 rounded-lg'>
      <a
        href={shortenedURL}
        target='_blank'
        className='mr-4 overflow-hidden whitespace-nowrap text-ellipsis'
        title={shortenedURL}
      >
        📎 clipped.site/<span className='font-semibold'>{linkData.slug}</span>
      </a>
      <div className='space-x-2 flex items-center justify-center z-10'>
        <Tooltip text={clipboardText}>
          <Button
            className='shadow-md'
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
            <ClipboardCopy size={16} color='black' />
          </Button>
        </Tooltip>
        <Tooltip text='Share'>
          <Button
            className='shadow-md'
            onClick={() => handleShare(shortenedURL)}
          >
            <Share2 size={16} color='black' />
          </Button>
        </Tooltip>
        <Tooltip text='Generate QR'>
          <GenerateQR link={linkData} />
        </Tooltip>
      </div>
    </div>
  );
}
