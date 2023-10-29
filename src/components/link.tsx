import { LinkType } from '@/utils/types';
import { ClipboardCopy, MousePointer } from 'lucide-react';
import Button from './buttons/button';
import Tooltip from './tooltip';
import DownloadQR from './downloadQR';

export default function Link({ linkData }: { linkData: LinkType | null }) {
  if (!linkData) {
    return null;
  }

  const shortenedURL = `clipped.site/${linkData.slug}`;

  return (
    <div className='text-black'>
      <div className='p-2 shadow-sm gap-x-2 text-sm flex items-center justify-between bg-gray-100 rounded-lg'>
        <a href={shortenedURL} target='_blank' className='mr-4 text-ellipsis'>
          📎 {shortenedURL}
        </a>
        <div className='space-x-2 flex items-center justify-center z-10'>
          <Button className='flex gap-x-1 items-center justify-center text-xs'>
            {linkData.clicks} <MousePointer size={14} color='black' />
          </Button>
          <Button>
            <ClipboardCopy size={16} color='black' />
          </Button>
          <DownloadQR link={linkData} />
        </div>
      </div>
    </div>
  );
}
