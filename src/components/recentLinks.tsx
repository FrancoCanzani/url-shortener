import { LinkType } from '@/utils/types';
import Link from './link';

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

export default async function RecentLinks() {
  const response = await fetch(`${API_URL}/links/recent`, {
    headers: {
      authorization: `${API_KEY}`,
    },
  });

  const recentLinks = await response.json();

  return (
    <section>
      <h2 className='font-normal text-lg mb-3'>Recent Links</h2>
      <ul className='grid grid-cols-1 gap-2 sm:grid-cols-2'>
        {recentLinks.map((link: LinkType) => (
          <Link key={link.slug} linkData={link} />
        ))}
      </ul>
    </section>
  );
}
