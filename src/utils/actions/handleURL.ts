'use server';

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

type inputData = {
  url: FormDataEntryValue | null;
};

export default async function handleURL(data: inputData): Promise<any> {
  try {
    if (data.url) {
      const res = await fetch(`${API_URL}/links`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `${API_KEY}`,
        },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      return json;
    } else {
      throw new Error('URL is null or undefined');
    }
  } catch (error) {
    throw error;
  }
}
