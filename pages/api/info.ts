// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = [
  {
    name: string;
    address: string;
    age: number;
  },
  {
    name: string;
    address: string;
    age: number;
  },
  {
    name: string;
    address: string;
    age: number;
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([
    { name: "Takaya", address: "Chiba", age: 20 },
    { name: "Hoge", address: "Tokyo", age: 30 },
    { name: "Sato", address: "Hokkaido", age: 20 },
  ]);
}
