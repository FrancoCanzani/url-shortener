import { LinkType } from '@/utils/types';
import Link from './link';

const API_URL = process.env.API_URL;
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
    <section className='mx-auto my-3'>
      <h2 className='font-semibold text-lg mb-3'>Recent Links ¬</h2>
      <ul className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
        {recentLinks.map((link: LinkType) => (
          <Link key={link.slug} linkData={link} />
        ))}
      </ul>
    </section>
  );
}
