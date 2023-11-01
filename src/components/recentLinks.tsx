import { LinkType } from '@/utils/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.API_KEY;

export default async function RecentLinks() {
  const response = await fetch(`${API_URL}/links/recent?limit=12`, {
    headers: {
      authorization: `${API_KEY}`,
    },
    next: { revalidate: 500 },
  });

  const recentLinks = await response.json();

  if (!recentLinks) {
    return null;
  }

  return (
    <section className='mx-auto my-3 max-w-[52rem]'>
      <h2 className='font-semibold text-lg mb-3'>Recent Links ¬</h2>
      <ul className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        {recentLinks.map((link: LinkType) => (
          <li
            key={link._id}
            className='flex gap-x-3 border transform transition-transform ease-in-out duration-300 hover:scale-105 items-center p-3 bg-white rounded-lg shadow-lg text-sm'
          >
            <div
              title={link.url}
              className='flex-1 truncate bg-red-50 text-red-500 font-semibold border border-red-200 rounded p-2'
            >
              {link.url}
            </div>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 text-gray-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 10H3l4-4m0 8h14l-4 4'
              />
            </svg>

            <div className='flex-1 truncate bg-green-50 font-semibold text-green-500 border border-green-200 rounded p-2'>
              clipped.site/{link.slug}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
