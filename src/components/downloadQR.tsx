import { ApiResponse, LinkType } from '@/utils/types';
import { QrCode } from 'lucide-react';
import Button from './buttons/button';

const QRApi = 'https://image-charts.com/chart?chs=200x200&cht=qr&chl=';

export default function DownloadQR({ link }: { link: LinkType }) {
  return (
    <a
      href={`${QRApi}https://url-shortener-btnl.onrender.com/${link?.slug}`}
      download='QRCode'
      target='blank'
    >
      <Button>
        <QrCode size={16} color='black' />
      </Button>
    </a>
  );
}
