'use client';

import React, { useState, ReactNode } from 'react';

export default function Tooltip({
  children,
  text,
}: {
  children: ReactNode;
  text: string;
}) {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  return (
    <div
      className='relative inline-block'
      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => setTooltipVisible(false)}
    >
      {isTooltipVisible && (
        <div className='absolute -translate-x-1/2 -top-9 min-w-max left-1/2 text-xs z-10 px-2 py-1.5 bg-gray-700 text-white text-center rounded-lg'>
          {text}
        </div>
      )}
      {children}
    </div>
  );
}
