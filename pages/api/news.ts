// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  newsData: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data & { newsData: any }>
) {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=gaming&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
  );

  const newsData = await response.json();
  res.status(200).json({ newsData });
}
