import { ApiResponse } from '@/utils/types';
import { QrCode } from 'lucide-react';
import Button from './buttons/button';

const QRApi = 'https://image-charts.com/chart?chs=200x200&cht=qr&chl=';

export default function DownloadQR({
  response,
}: {
  response: ApiResponse | null;
}) {
  return (
    <a
      href={`${QRApi}https://url-shortener-btnl.onrender.com/${response?.slug}`}
      download='QRCode'
      target='blank'
    >
      <Button className=''>
        <QrCode size={16} color='black' />
      </Button>
    </a>
  );
}
