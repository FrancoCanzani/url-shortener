import React, { useEffect } from 'react';
import { SquareSlash, Link, QrCode, BarChart3, Clock } from 'lucide-react';

const features = [
  {
    feat: 'Shorten URLs',
    icon: <Link size={14} />,
  },
  {
    feat: 'Custom slug',
    icon: <SquareSlash size={14} />,
  },
  {
    feat: 'Link Expiry',
    icon: <Clock size={14} />,
  },
  {
    feat: 'QR Code',
    icon: <QrCode size={14} />,
  },
  {
    feat: 'Analytics',
    icon: <BarChart3 size={14} />,
  },
];

export default function Features() {
  return (
    <section className='max-w-4xl px-2'>
      <h3 className='mb-2 font-semibold text-lg'>Features ¬</h3>
      <ul className='flex items-center flex-wrap justify-center gap-3'>
        {features.map((feature, index) => (
          <li
            key={index}
            className='flex items-center px-2 justify-center bg-slate-900 ring-2 ring-inset ring-blue-500 rounded-lg'
          >
            <span className='p-1 font-semibold bg-slate-600 rounded-lg'>
              {feature.icon}
            </span>{' '}
            <p className='p-2 text-sm'>{feature.feat}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
