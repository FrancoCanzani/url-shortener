import { LinkType } from '@/utils/types';
import { ClipboardCopy } from 'lucide-react';
import Button from './buttons/button';
import Tooltip from './tooltip';
import DownloadQR from './downloadQR';

export default function Link({ linkData }: { linkData: LinkType | null }) {
  if (!linkData) {
    return null;
  }

  const shortenedURL = `clipped.site/${linkData.slug}`;

  return (
    <div className='p-2 animate-fade shadow-sm gap-x-2 text-sm text-clip flex items-center justify-between bg-gray-100 rounded-lg'>
      <a
        href={shortenedURL}
        target='_blank'
        className='mr-4 overflow-hidden whitespace-nowrap text-ellipsis'
        title={shortenedURL}
      >
        📎 clipped.site/<span className='font-semibold'>{linkData.slug}</span>
      </a>
      <div className='space-x-2 flex items-center justify-center z-10'>
        <Tooltip text='Copy to clipboard'>
          <Button>
            <ClipboardCopy size={16} color='black' />
          </Button>
        </Tooltip>
        <Tooltip text='Generate QR'>
          <DownloadQR link={linkData} />
        </Tooltip>
      </div>
    </div>
  );
}
