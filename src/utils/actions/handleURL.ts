'use server';

const API_URL = process.env.API_URL;

type inputData = {
  url: FormDataEntryValue | null;
};

export default async function handleURL(data: inputData) {
  try {
    const res = await fetch(`${API_URL}/url`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
