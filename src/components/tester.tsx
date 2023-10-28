const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

export default async function Tester() {
  const response = await fetch(`${API_URL}`, {
    headers: {
      authorization: `46b0ed33dde573f9629c71e115c66b74`,
    },
  });

  const res = await response.json();

  return <span>{res.message}</span>;
}
