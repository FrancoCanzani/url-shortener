type ApiResponse = {
  ok: boolean; // Indicating if the request was successful
  status: number; // HTTP status code
  _id: string; // The unique identifier for the URL entry
  url: string; // The original URL that was shortened
  slug: string; // The generated or user-defined slug
  clicks: number; // The number of clicks on the shortened URL
  error: string | null; // Any error message in case of a failure
};

export type { ApiResponse };
