import { ApiResponse, LinkType } from '@/utils/types';
import { QrCode } from 'lucide-react';
import Button from './buttons/button';

export default function GenerateQR({ link }: { link: LinkType }) {
  const API_URL = process.env.API_URL;

  return (
    <a href={`${API_URL}/${link?.slug}`} target='blank'>
      <Button className='shadow-md'>
        <QrCode size={16} color='black' />
      </Button>
    </a>
  );
}
