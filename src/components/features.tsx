import { ReactElement } from 'react';

const features = [
  {
    svg: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        viewBox='0 0 32 32'
      >
        <path fill='currentColor' d='M4 2H2v26a2 2 0 0 0 2 2h26v-2H4Z' />
        <path
          fill='currentColor'
          d='M30 9h-7v2h3.59L19 18.59l-4.29-4.3a1 1 0 0 0-1.42 0L6 21.59L7.41 23L14 16.41l4.29 4.3a1 1 0 0 0 1.42 0l8.29-8.3V16h2Z'
        />
      </svg>
    ),
    title: 'Optimize',
    text: 'Shortened links can help optimize your campaigns by providing analytics on each link.',
  },
  {
    svg: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        viewBox='0 0 24 24'
      >
        <path
          fill='currentColor'
          d='M18 22q-1.25 0-2.125-.875T15 19q0-.175.025-.363t.075-.337l-7.05-4.1q-.425.375-.95.588T6 15q-1.25 0-2.125-.875T3 12q0-1.25.875-2.125T6 9q.575 0 1.1.213t.95.587l7.05-4.1q-.05-.15-.075-.337T15 5q0-1.25.875-2.125T18 2q1.25 0 2.125.875T21 5q0 1.25-.875 2.125T18 8q-.575 0-1.1-.212t-.95-.588L8.9 11.3q.05.15.075.338T9 12q0 .175-.025.363T8.9 12.7l7.05 4.1q.425-.375.95-.587T18 16q1.25 0 2.125.875T21 19q0 1.25-.875 2.125T18 22Zm0-16q.425 0 .713-.288T19 5q0-.425-.288-.713T18 4q-.425 0-.713.288T17 5q0 .425.288.713T18 6ZM6 13q.425 0 .713-.288T7 12q0-.425-.288-.713T6 11q-.425 0-.713.288T5 12q0 .425.288.713T6 13Zm12 7q.425 0 .713-.288T19 19q0-.425-.288-.713T18 18q-.425 0-.713.288T17 19q0 .425.288.713T18 20Zm0-15ZM6 12Zm12 7Z'
        />
      </svg>
    ),
    title: 'Enhanced Sharing',
    text: 'Short URLs are more shareable on social media as they take up less space in posts.',
  },
  {
    svg: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        viewBox='0 0 24 24'
      >
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M10.723 3.2a.75.75 0 1 0-1.446-.4L7.763 8.25H4a.75.75 0 1 0 0 1.5h3.347l-1.528 5.5H2a.75.75 0 0 0 0 1.5h3.402L4.277 20.8a.75.75 0 0 0 1.446.4l1.236-4.45h7.443l-1.125 4.05a.75.75 0 0 0 1.446.4l1.236-4.45H20a.75.75 0 1 0 0-1.5h-3.624l1.527-5.5H22a.75.75 0 0 0 0-1.5h-3.68l1.403-5.05a.75.75 0 1 0-1.446-.4l-1.514 5.45H9.32l1.403-5.05Zm4.096 12.05l1.528-5.5H8.903l-1.527 5.5h7.443Z'
          clipRule='evenodd'
        />
      </svg>
    ),
    title: 'User-Friendly',
    text: 'Shortened URLs are user-friendly as they transform unwieldy addresses into concise links.',
  },
];

export function Features() {
  return (
    <ul className='px-4 sm:px-6 lg:px-8 pb-4 lg:pb-6 pt-6 max-w-[54rem] mx-auto grid grid-cols-1 gap-2 lg:gap-4 sm:grid-cols-2 lg:grid-cols-3 max-h-[33rem] overflow-hidden'>
      {features.map((feature) => (
        <li key={feature.title} className=''>
          <Feature
            svg={feature.svg}
            title={feature.title}
            text={feature.text}
          />
        </li>
      ))}
    </ul>
  );
}

export function Feature({
  svg,
  text,
  title,
}: {
  svg: ReactElement;
  text: string;
  title: string;
}) {
  return (
    <figure className='flex bg border hover:scale-105 transition-all ease-in-out shadow-sm flex-col bg-gray-50 rounded-lg p-3'>
      <span className='bg-gray-100 rounded-lg p-2 w-fit mb-3 shadow-md'>
        {svg}
      </span>
      <strong className='text-lg mb-1'>{title}</strong>
      <p className='capitalize z-10 font-normal text-sm text-slate-700'>
        {text}
      </p>
    </figure>
  );
}
